const rockBtn = document.querySelector('.rock-btn');
const paperBtn = document.querySelector('.paper-btn');
const scissorsBtn = document.querySelector('.scissors-btn');
const userHandIcon = document.querySelector('.user.hand-icon');
const computerHandIcon = document.querySelector('.computer.hand-icon')
const result = document.querySelector('.result');
const userScore = document.querySelector(".user-score")
const computerScore = document.querySelector(".computer-score");

const rockIcon = '✊'
const paperIcon = '🤚'
const scissorsIcon = '✌️'

 const iconsList = [rockIcon, paperIcon, scissorsIcon];

function  calculateResult(selectedIcon, winningIcon) {
  result.innerText = "";
  userHandIcon.innerText = "🤜";
  computerHandIcon.innerText = "🤛";
  userHandIcon.classList.add('shakeUserHands');
  computerHandIcon.classList.add('shakeComputerHands');

  setTimeout( () => {
    userHandIcon.classList.remove('shakeUserHands');
    computerHandIcon.classList.remove('shakeComputerHands');
    userHandIcon.innerText = selectedIcon;
   const computerChoice = Math.floor(Math.random() * 3);
   computerHandIcon.innerText = iconsList[computerChoice];
   if(userHandIcon.innerText === computerHandIcon.innerText){
     result.innerText = "Draw";
   } else if (computerHandIcon.innerText === winningIcon) {
          result.innerText = "You Won!!";
          userScore.innerText = +userScore.innerText + 1;
   } else {
      result.innerText = "Computer Won!!";
      computerScore.innerText = +computerScore.innerText + 1;
   }
  }, 1000)
} 

rockBtn.addEventListener('click', () => {
  calculateResult(rockIcon, scissorsIcon);
});

paperBtn.addEventListener('click', () => {
 calculateResult(paperIcon, rockIcon);
})

scissorsBtn.addEventListener('click', () => {
 calculateResult(scissorsIcon, paperIcon)
});