function toggleButton(selector) {
  const currentButton = document.querySelector(`.js-${selector}-button`)
  if (currentButton.classList.contains('is-toggled')) {
    currentButton.classList.remove('is-toggled')
  }
  else {
    turnOffPreviousButton()
    currentButton.classList.add('is-toggled')
  }
}

function turnOffPreviousButton() {
  const previousButton = document.querySelector('.is-toggled');
  if (previousButton) {
    previousButton.classList.remove('is-toggled');
  }
}