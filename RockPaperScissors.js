var userChoice = prompt("Do you choose rock, paper or scissors?");
while(userChoice != "rock" && userChoice != "paper" & userChoice != "scissors"){
    confirm(userChoice + " is not a valid entry.");
    userChoice = prompt("Do you choose rock, paper or scissors?");
    
    }
var computerChoice = Math.random();
console.log(computerChoice);

if(computerChoice <= 0.33){
    computerChoice = "rock";
    console.log(computerChoice);
}
else if(computerChoice > 0.34 && computerChoice < 0.66){
    computerChoice = "paper";    
    console.log(computerChoice);
}
else{
    computerChoice = "scissors";
    console.log(computerChoice);
}


var compare = function(choice1, choice2){
    if(choice1 === choice2){
        console.log("The result is a tie!");
    }
    else if(choice1 === "rock"){
        if(choice2 === "scissors"){
            console.log("rock wins");    
        }
        else{
            console.log("paper wins");
        }
    }
    else if(choice1 === "paper"){
        if(choice2 === "rock"){
            console.log("paper wins");
        }
        else{
            console.log("scissors wins");
        }
         
    }
    else if(choice1 === "scissors"){
        if(choice2 === "rock"){
            console.log("rock wins");
        }
        else{
            console.log("paper wins");
        }
          
    }
        
};
compare(userChoice,computerChoice);