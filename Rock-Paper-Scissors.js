function getComputerChoice(){
    switch(Math.floor(Math.random()*3)){
    case 0: return `Rock`;
    case 1: return `Paper`;
    case 2: return `Scissors`;
}
}

let rock=document.getElementById("rock");
let Paper=document.getElementById("paper");
let scissors=document.getElementById("scissors");
let result=document.getElementById("result")
let finalResult=document.getElementById("finalResult")


rock.addEventListener("click",function(){
    let computerSelection = getComputerChoice();
    playRound(`Rock`,computerSelection)
    
})
paper.addEventListener("click",function(){
    let computerSelection = getComputerChoice();
   playRound(`Paper`,computerSelection)
})
scissors.addEventListener("click",function(){
    let computerSelection = getComputerChoice();
    playRound(`Scissors`,computerSelection) 
})


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
    result.textContent=`You win this round! cause you chose ${humanSelection} and i chose ${computerSelection} hence yourscore is ${humanScore} and myscore is ${computerScore}`
}else if((humanSelection===computerSelection)){
   result.textContent=`Its a tie because we all chose ${computerSelection} and myscore is still ${computerScore} and your score is still ${humanScore}`
   tie+=1;
}else{
     computerScore+=1;
   result.textContent=`You lose this round! cause you chose ${humanSelection} and i chose ${computerSelection} hence yourscore is ${humanScore} and myscore is ${computerScore}`
}
if (humanScore >= 5) {
    finalResult.textContent = `You're the Champion 🎉`;
} else if (computerScore >= 5) {
    finalResult.textContent = `I am the Champion 🤖`;
}

}



