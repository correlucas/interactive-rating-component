const input = document.querySelector('.input');

const output = document.querySelector('.output');

const submitButton = document.getElementById('submit');
const submitAgainButton = document.getElementById('submit-again');

submitButton.addEventListener('click', () => {
  output.classList.remove('hidden');
  input.classList.add('hidden');
});

// Here I've added an addEventListener with the click as a trigger to add an action, using the arrow function to add the action to add the class .hidden that have display: none; to make the html block disappear and also to remove it from the class output, making one html element visible and the other invisible when the submit button gets triggered.

submitAgainButton.addEventListener('click', () => {
  output.classList.add('hidden');
  input.classList.remove('hidden');
});

// Here the opposite action happens with the submitAgainButton

