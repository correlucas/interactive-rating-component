const input = document.getElementById('input');
const output = document.getElementById('output');
const outputButton = document.querySelectorAll('[type="radio"]')
const submitButton = document.getElementById('submitBtn');
const submitAgainButton = document.getElementById('submit-again');

let selected;

const rating = document.getElementById('ratingOutput');

outputButton.forEach((btn) => {
  btn.addEventListener("click", () => {
    // submitBtn.disabled = false;
    rating.innerHTML = btn.value;
  });
});



submitButton.addEventListener('click', () => {
  output.classList.remove('hidden');
  input.classList.add('hidden');
});

// comeback to the first form with RATE AGAIN 
submitAgainButton.addEventListener('click', () => {
  output.classList.add('hidden');
  input.classList.remove('hidden');
});