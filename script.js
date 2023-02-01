'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
let score = Number(document.querySelector('.score').textContent);
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const gameLogic = function () {
  const guess = Number(document.querySelector('.guess').value);
  //When there is no input
  if (!guess) {
    displayMessage('🥲NO number !');

    //when players wins
  } else if (guess === secretNumber) {
    displayMessage('🎉Correct Number🎉');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } //when guess is different
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈Too high📈' : '📉Too low📉');
      score--;
      document.querySelector('.score').textContent = score;
    } // when player looses
    else {
      displayMessage('You lost the game 💥');
      document.querySelector('.score').textContent = 0;
    }
  }
};

document.querySelector('.check').addEventListener('click', gameLogic);
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15 rem';
  document.querySelector('.guess').textContent = '';
  document.querySelector('body').style.backgroundColor = '#222';
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    gameLogic();
  }
});

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//Revision again📑㊫

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct message!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// console.log((document.querySelector('.guess').value = 13));

// const secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// document.querySelector('.number').textContent = secretNumber;
// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(typeof guess);
//   if (!guess) {
//     document.querySelector('.message').textContent = 'No number 🔴 ';
//   } else if (guess === secretNumber) {
//     document.querySelector('.message').textContent = '🎉 Correct message!';
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📈Too High';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lost💥 ';
//       document.querySelector('.score').textContent = 0;
//     }
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📉Too Low';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lost💥 ';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

// const numberGuessing = document.querySelector('.guess');
// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// let highScore = 0;
// const displayMessage = function (message) {
//   document.querySelector('.message').textContent = message;
// };
// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(numberGuessing.value);
//   if (!guess) {
//     displayMessage('No 🔴 number!');
//   } else if (guess === secretNumber) {
//     document.querySelector('.number').textContent = guess;
//     displayMessage('Correct Number🎉');
//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width = '30rem';
//     if (score > highScore) {
//       highScore = score;
//       document.querySelector('.highscore').textContent = highScore;
//     }
//   } else if (guess !== secretNumber) {
//     if (score > 1) {
//       displayMessage(guess > secretNumber ? 'Too high📈' : 'Too Low📉');
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       displayMessage('You Lose😭');
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });
// document.querySelector('.again').addEventListener('click', function () {
//   displayMessage('Start guessing...');
//   score = 20;
//   document.querySelector('.score').textContent = score;
//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style.width = '15rem';
//   document.querySelector('.number').textContent = '?';
//   numberGuessing.value = ' ';
//   secretNumber = Math.trunc(Math.random() * 20) + 1;
// });

/////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
