'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// console.log(secretNumber);
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const changeColor = function () {
  checkBtn.style.color = 'blue';
};

// const checkBtn = document.querySelector('.check');
// checkBtn.onclick = function () {
//   alert('Hi there');
// };

// //adding onlick for an element is not a good idea since only one event can be assigned to an element
// checkBtn.onclick = function () {
//   alert('2nd Hi there');
// };
// checkBtn.addEventListener('mouseover', changeColor);
// checkBtn.addEventListener('mouseout', function () {
//   checkBtn.style.color = 'grey';
// });

document.querySelector('.check').addEventListener('click', function () {
  const x = document.querySelector('.guess');
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guessInput);
  //if there is any input
  if (!guess) {
    displayMessage(`⛔ no number!`);
  } else if (guess === secretNumber) {
    displayMessage(`🎉 correct number`);
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess != secretNumber) {
    if (score > 1) {
      score--;
      displayMessage(guess > secretNumber ? ` 💹 Too high!` : `📉 Too low`);
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage(`💣 You lost the game`);
      document.querySelector('.score').textContent = 0;
    }
  }
});

// element.addEventListener('click', function () {
//   document.getElementById('demo').innerHTML = 'Hello World';
// });

// const selectElement = document.querySelector('.ice-cream');

// selectElement.addEventListener('change', event => {
//   const result = document.querySelector('.result');
//   result.textContent = `You like ${event.target.value}`;
// });

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage(`Start guessing`);

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
