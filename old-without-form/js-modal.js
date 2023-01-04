const open = document.getElementById('openModal');
const close = document.getElementById('closeModal');
const modal = document.getElementById('modal');
// const input = document.getElementById('main');

open.addEventListener('click', () => {
  document.getElementById('modal').style.display = 'flex';
  input.classList.add('blur');
});

close.addEventListener('click', () => {
  document.getElementById('modal').style.display = 'none';
  input.classList.remove('blur');
});

window.addEventListener('click', (event) => {
  if (event.target == modal) {
    document.getElementById('modal').style.display = 'none';
  }
});





