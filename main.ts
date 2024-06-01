import inquirer from "inquirer";
let myBalance = 20000;
let mypin = 1234;

let pinAnswer= await inquirer.prompt([
    { name:"pin",
  message:"Enter your pin",
    type:"number",
}]);

if (pinAnswer.pin === mypin){
    console.log("Correct pin code !!");

    let operationAns = await inquirer.prompt([{
        name:'operation',
        message:"Please select  option:",
        type:"list",
        choices:["withdrew", "check balance", "Fast Cash"]


    }])
    if (operationAns.operation==="withdrew"){
        let amountAns =await inquirer.prompt([{
            name:"amount",
            type:"number",
            message:"Enter your amount:" }
        ]);
    
         if (myBalance>=amountAns.amount)
            {myBalance -= amountAns.amount ;
                console.log("Your remaining balance is",myBalance)
                
            }else {console.log("Insufficent Balance !!")}
    }
          
    
    else if(operationAns.operation==="check balance")
            {
                console.log("Your balance is: "+ myBalance)}

else if(operationAns.operation==="Fast Cash"){
    let fastcashAns= await inquirer.prompt([{
        name:"fastCash",
        message:"Please select your amount:",
        type:"list",
        choices:['1000','5000','10000','15000','20000']}
    ]);
      if (myBalance>= fastcashAns.fastCash){
        myBalance-= fastcashAns.fastCash;
        console.log(`Your remaining balance is ${myBalance}`)
      } 
}
} else{console.log("Incorrect pin number!")}
