let score = JSON.parse(localStorage.getItem('score')) || {
  win: 0,
  loss: 0,
  tie: 0
};

updateScoreElement();

/*
if (!score) {
  score = {
    win: 0,
    loss: 0,
    tie: 0
  };
}
*/

function pickComputerMove() {
  const randomNumber = Math.random();
  let result = '';
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