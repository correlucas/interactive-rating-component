const open = document.getElementById('openModal');
const close = document.getElementById('closeModal');
const modal = document.getElementById('modal');
const input = document.querySelector('.input');

close.addEventListener('click', () => {
  document.getElementById('modal').style.display = 'none';
});

open.addEventListener('click', () => {
  document.getElementById('modal').style.display = 'flex';
});

window.addEventListener('click', (event) => {
  if (event.target == modal) {
    document.getElementById('modal').style.display = 'none';
  }
});





