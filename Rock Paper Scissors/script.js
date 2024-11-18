
let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const comscorepara = document.querySelector("#com-score");


const genComChoice = () => {
    let options = ["rock", "papper", "scissors"];
    let RndIdx = Math.floor(Math.random() * 3);
    return options[RndIdx];
};

const DrawGame = () =>{
    msg.innerText = "Game is Draw, Play again!";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (UserWin,userChoice,comChoice) => {
    if(UserWin){
        userScore++;
        userscorepara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${comChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        comScore++;
        comscorepara.innerText = comScore;
        msg.innerText = `You Lose! ${comChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    let comChoice = genComChoice();

    if(userChoice === comChoice){
        DrawGame();
    }
    else{
      let UserWin = true;
      if(userChoice === "rock"){
        //It means Computer selected paper or scissors
         if(comChoice === "papper"){
            UserWin = false;
         } else {
            UserWin = true;
         }
      }
       else if(userChoice === "papper"){
        // It means Computer selected rock or scissors
        if(comChoice === "scissors"){
            UserWin = false;
         } else {
            UserWin = true;
         } 
      }
      else {
        //It means Computer selected rock or papper
        if(comChoice === "rock"){
            UserWin = false;
         } else {
            UserWin = true;
         }
      }
      showWinner(UserWin,userChoice,comChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});    