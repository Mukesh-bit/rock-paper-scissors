const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

let userScore = 0;
let compScore = 0;

// Function for Computer Choice
const getCompChoice = () => {
  const optins = ["rock", "paper", "scissors"];
  const randoIndx = Math.floor(Math.random() * 3);
  return optins[randoIndx];
};

// Function For Draw Game
const drawGame = () => {
  msg.innerText = "Match Draw! StartAgain";
  msg.style.backgroundColor = "#081b31";
};

// Function For Show Winner
const showWinner = (userWin, userChoice, compchoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win ! Your ${userChoice} beats ${compchoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You Lose ! ${compchoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

// Function For Start The Game
const playGame = (userChoice) => {

  const compchoice = getCompChoice();

  if (userChoice === compchoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compchoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compchoice === "scissors" ? false : true;
    } else {
      userWin = compchoice === "rock" ? false : true;
    }

    showWinner(userWin, userChoice, compchoice);
  }
};

// Adding EventListener on Choices Div
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
