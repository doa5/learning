let calculation = localStorage.getItem('calculation') || '';

displayCalculation();

function updateCalculation(sign) {
  calculation += sign;
  displayCalculation();

  localStorage.setItem('calculation', calculation);
}

function displayCalculation() {
  document.querySelector('.js-calculation')
    .innerText = calculation;
}

function saveCalculation() {
  localStorage.setItem('calculation', calculation)
}