const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

input.addEventListener('input', size => {
   text.style.fontSize = `${size.currentTarget.value}px`;
});