const output = document.getElementById('output');
const input = document.getElementById('input');
const outputButton = document.querySelectorAll('[type="radio"]')
const submitButton = document.getElementById('submitBtn');
const submitAgainButton = document.getElementById('submit-again');
const rating = document.getElementById('ratingOutput');
const form = document.querySelector("form");
const close = document.getElementById('closeModal');

submitButton.addEventListener('click', () => {
  if (rating.textContent === "") {
    document.getElementById('modal').style.display = 'flex';
  } else {
    output.classList.remove('hidden');
    input.classList.add('hidden');
  }
});

outputButton.forEach((btn) => {
  btn.addEventListener("click", () => {
    // submitButton.disabled = false;
    rating.innerHTML = btn.value;
  });
});

// reset form default
// form.addEventListener("submit", (ev) => {
//   ev.preventDefault()
//   output.classList.remove('hidden');
//   input.classList.add('hidden');
// })

// comeback to the first form with RATE AGAIN 
submitAgainButton.addEventListener('click', () => {
  output.classList.add('hidden');
  input.classList.remove('hidden');
  rating.innerHTML = "";
});

// close modal
close.addEventListener('click', () => {
  document.getElementById('modal').style.display = 'none';
});

// close modal if click outside of it
window.addEventListener('click', (event) => {
  if (event.target == modal) {
    document.getElementById('modal').style.display = 'none';
  }
});