const input = document.querySelector('.input');
const output = document.querySelector('.output');

const submitButton = document.getElementById('submit');
const submitAgainButton = document.getElementById('submit-again');


submitButton.addEventListener('click', () => {
  if (rating.textContent === "") {
    // alert("linha 45")
    document.getElementById('modal').style.display = 'flex';
    // input.classList.add('blur');
  } else {
    output.classList.remove('hidden');
    input.classList.add('hidden');
  }
});

// Here I've added an addEventListener with the click as a trigger to add an action, using the arrow function to add the action to add the class .hidden that have display: none; to make the html block disappear and also to remove it from the class output, making one html element visible and the other invisible when the submit button gets triggered. 

// I added also a custom modal to check if the user choose a value or not before submitAgainButton.


submitAgainButton.addEventListener('click', () => {
  output.classList.add('hidden');
  input.classList.remove('hidden');
  rating.innerHTML = ""
});

// Here the opposite action happens with the submitAgainButton.Using the rating.innerHTML = "" this will clear value number checked when the button "rate again" gets pushed.

const rating = document.getElementById('ratingOutput');
const ratingNum = document.querySelectorAll('.btn');

ratingNum.forEach((rateNum) => {
  rateNum.addEventListener('click', () => {
    rating.innerHTML = rateNum.innerHTML;
  })
})


// Here we're created two variables, rating that select the number that will be displayed as the rating (the number selected by the user) and the variable ratingNum that will trigger the action with the eventlistener click.

// When its add that the rating.innerHTML is equal to the ratingNum this means that the text will be override with the the text input from the Button.


const close = document.getElementById('closeModal');
const modal = document.getElementById('modal');

close.addEventListener('click', () => {
  document.getElementById('modal').style.display = 'none';
});


window.addEventListener('click', (event) => {
  if (event.target == modal) {
    document.getElementById('modal').style.display = 'none';
  }
});



