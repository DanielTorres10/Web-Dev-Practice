let userScore = 0;
let compScore = 0;
let drawScore = 0;

const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const drawScore_span = document.getElementById("draw-score");

const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

const uWord = " (user) ".fontsize(3).sup();
const cWord = " (comp) ".fontsize(3).sup();


function decode(letter){
    switch(letter){
    case "r": return "Rock"
    case "p": return "Paper"
    case "s": return "Scissors"
    }
    
}

function win(user,comp){
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = decode(user)+uWord + " beats " + decode(comp)+cWord + ". You win!";
    const glow = document.getElementById(user).classList
    glow.add("green-glow");
    setTimeout(() =>  glow.remove("green-glow"),500);
}

function lose(user,comp){
    compScore++;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = decode(user)+uWord + " doesn't beat " +  decode(comp)+cWord  + ". You Lose!";
    const glow = document.getElementById(user).classList
    glow.add("red-glow");
    setTimeout(() =>  glow.remove("red-glow"),500);
}

function draw(comp){
    drawScore++;
    drawScore_span.innerHTML = drawScore;
    result_p.innerHTML = "Computer also choosed "+ decode(comp)+cWord +". Draw!";
    const glow = document.getElementById(comp).classList
    glow.add("gray-glow");
    setTimeout(() =>  glow.remove("gray-glow"),500);
}

function compChoice(){
    const choices = ["r","p","s"];
    const num = Math.floor(Math.random()*3);
    return choices[num];
}

function game(userChoice){
    const comp = compChoice();
    if(userChoice===comp) draw(comp);
    switch (userChoice + comp){
        case "rs":
        case "pr":
        case "sp": 
            win(userChoice,comp);
            break;
        case "rp":
        case "ps":
        case "sr": 
            lose(userChoice,comp);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click', () => game("p"));
    scissors_div.addEventListener('click', () => game("s"));
}

main();