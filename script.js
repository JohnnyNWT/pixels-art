const color = document.getElementsByClassName('color');
color[0].style.backgroundColor = 'black';
color[1].style.backgroundColor = 'purple';
color[2].style.backgroundColor = 'yellow';
color[3].style.backgroundColor = 'aqua';

let selecionaCor = document.querySelector('#color-palette')
let selecionaSquare = document.querySelector('#pixel-board')
let corSelecionada = 'black'

function selectColor(event) {
    corSelecionada = event.target.style.backgroundColor
}

selecionaCor.addEventListener('click', selectColor)


function pintar(event) {
    event.target.style.backgroundColor = corSelecionada
}

selecionaSquare.addEventListener('click', pintar)
