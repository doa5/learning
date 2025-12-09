let score = JSON.parse(localStorage.getItem('score')) || {
  win: 0,
  loss: 0,
  tie: 0
};

updateScoreElement();

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  }
  else if (randomNumber >= 1 / 3 && randomNumber < 2/ 3) {
    computerMove = 'paper';
  }
  else {
    computerMove = 'scissors';
  }
  return computerMove;
}

let isAutoPlaying = false;
let intervalID;

function autoPlay() {
  if (!isAutoPlaying) {
    intervalID = setInterval(() => {
      const playerMove = pickComputerMove()
      playGame(playerMove)
    }, 1000)
    isAutoPlaying = true;
    document.querySelector('.js-auto-play-button')
      .innerHTML= 'Stop Playing'
  } else {
    clearInterval(intervalID)
    isAutoPlaying = false;
    document.querySelector('.js-auto-play-button')
      .innerHTML= 'Auto Play'
  }
}

document.querySelector('.js-rock-button')
  .addEventListener('click', () => playGame('rock'))

document.querySelector('.js-scissors-button')
  .addEventListener('click', () => playGame('scissors'))

document.querySelector('.js-paper-button')
  .addEventListener('click', () => playGame('paper'))

document.querySelector('.js-auto-play-button')
  .addEventListener('click', () => autoPlay())

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    playGame('rock')
    } else if (event.key === 'p') {
      playGame('paper')
    } else if (event.key === 's') {
      playGame('scissors')
    } else if (event.key === 'a') {
      autoPlay()
    } else if (event.key === 'Backspace') {
      confirmReset()
    }
})

document.querySelector('.js-reset-score-button')
  .addEventListener('click', () => confirmReset())



function confirmReset() {
  document.querySelector('.js-confirm-reset')
    .innerHTML = `<p>Are you sure you want to reset the score?</p>
    <button class="js-reset reset-confirm-button">Yes</button>
    <button class="js-dont-reset reset-confirm-button">No</button>
    `
   document.querySelector('.js-reset')
    .addEventListener('click', () => {
      resetScore()
      document.querySelector('.js-confirm-reset').innerHTML = ''
    })

  document.querySelector('.js-dont-reset')
    .addEventListener('click', () => {
      document.querySelector('.js-confirm-reset').innerHTML = ''
    })
}

function resetScore() {
  score.win = 0
  score.loss = 0
  score.tie = 0
  updateScoreElement()
  localStorage.removeItem('score')
}

function playGame(playerMove) {
  let result = '';
  const computerMove = pickComputerMove();

  if (playerMove === 'scissors') {
    if (computerMove === 'scissors') {
    result = 'Tie';
    }
    else if (computerMove === 'rock') {
      result = 'You Lose';
    }
    else {
      result = 'You Win';
    }
  }

  else if (playerMove === 'paper') {
    if (computerMove === 'paper') {
      result = 'Tie';
    }
    else if (computerMove === 'scissors') {
      result = 'You Lose';
    }
    else {
      result = 'You Win';
    }
  }

  else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie';
    }
    else if (computerMove === 'paper') {
      result = 'You Lose';
    }
    else {
      result = 'You Win';
    }
  }
  

  if (result === 'You Win') {
    score.win++;
  } else if (result === 'You Lose') {
    score.loss++;
  } else if (result === 'Tie') {
    score.tie++;
  }
  
  localStorage.setItem('score', JSON.stringify(score));
  updateResultElement(result);
  updateMovesElement(playerMove, computerMove);
  updateScoreElement();
}

function updateScoreElement() {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.win}, Losses: ${score.loss}, Ties: ${score.tie}`;
}

function updateResultElement(result) {
  document.querySelector('.js-result')
    .innerHTML = result;
}

function updateMovesElement(playerMove, computerMove) {
  document.querySelector('.js-moves')
    .innerHTML = `
    You
    <img src="images/${playerMove}-emoji.png" class="move-icon">
    <img src="images/${computerMove}-emoji.png" class="move-icon"> 
    Computer
    `;
}