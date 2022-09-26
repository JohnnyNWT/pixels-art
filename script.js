const color = document.getElementsByClassName('color');
const colorPalette = document.getElementById('colorPalette');
let selecionaSquare = document.querySelector('#pixel-board');
let botaoLimpar = document.getElementById('clear-board');
let pixels = document.getElementsByClassName('pixel');

function pintar({target}) {
  target.style.backgroundColor = colorPalette.value
}
selecionaSquare.addEventListener('click', pintar);

function limpar() {
  for (let i = 0; i < pixels.length; i++) {
    pixels[i].style.backgroundColor = 'white'
  }
}
botaoLimpar.addEventListener('click', limpar);
