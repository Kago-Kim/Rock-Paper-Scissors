function getComputerChoice(){
    switch(Math.floor(Math.random()*3)){
    case 0: return `Rock`;
    case 1: return `Paper`;
    case 2: return `Scissors`;
}
}

function getHumanChoice(){
    let a;
while(true){
    a=Number(prompt(`Enter 1 to choose Rock,2 to choose Paper and 3 to choose Scissors`));

    switch(a){
        case 1:return `Rock`;
        case 2:return  `Paper`;
        case 3:return `Scissors`;
        default: alert(`Enter 1 to choose Rock,2 to choose Paper and 3 to choose Scissors`)
    }
}}

let humanScore=0;
let computerScore=0;
let tie=0;


function playRound(humanSelection,computerSelection){
if(
    (humanSelection===`Paper`&& computerSelection===`Rock`)||
    (humanSelection=== `Rock` && computerSelection===`Scissors`)||
    (humanSelection===`Scissors` && computerSelection===`Paper`)
){
    humanScore+=1;
    console.log(`You win!`)
}else if((humanSelection===computerSelection)){
   console.log(`Its a tie`)
   tie+=1;
}else{
     computerScore+=1;
    console.log(`You lose!`)
}
}



function playGame(){
    humanScore=0;
    computerScore=0;
    tie=0;
    while((humanScore + computerScore+tie) < 5){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        console.log(`You chose ${humanSelection}, Computer chose ${computerSelection}`);
        playRound(humanSelection, computerSelection);
    }

    if(humanScore > computerScore){
        console.log("Champion!");
    } else if(humanScore==computerScore){
        console.log("Tie");
    }else{
        console.log("Better luck next time");
    }
}
playGame();
