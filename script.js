const color = document.getElementsByClassName('color');
color[0].style.backgroundColor = 'black';
color[1].style.backgroundColor = 'purple';
color[2].style.backgroundColor = 'yellow';
color[3].style.backgroundColor = 'aqua';

let selecionaCor = document.querySelector('#color-palette')
let selecionaSquare = document.querySelector('#pixel-board')
let botaoLimpar = document.getElementById('clear-board')
let pixels = document.getElementsByClassName('pixel')
let corSelecionada = 'black'

function selectColor(event) {
    for (let index of color) {
        index.classList.remove('selected')
    }
    event.target.classList.add('selected')
    corSelecionada = event.target.style.backgroundColor
}
selecionaCor.addEventListener('click', selectColor)

function pintar(event) {
    event.target.style.backgroundColor = corSelecionada
}
selecionaSquare.addEventListener('click', pintar)

function limpar() {
    for(let i = 0; i < pixels.length; i++) {
        pixels[i].style.backgroundColor = 'white'
    }
}
botaoLimpar.addEventListener('click', limpar)
