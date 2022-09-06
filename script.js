const color = document.getElementsByClassName('color');
color[0].style.backgroundColor = 'white'; // branco
color[1].style.backgroundColor = 'black'; // preto
color[2].style.backgroundColor = '#4f3e2d'; // marrom
color[3].style.backgroundColor = '#c8a64f'; // marrom claro
color[4].style.backgroundColor = '#d9ad99'; // cor da pele
color[5].style.backgroundColor = '#9ea6b0'; // cinza
color[6].style.backgroundColor = '#0070bc'; // azul
color[7].style.backgroundColor = '#fade17'; // amarelo
color[8].style.backgroundColor = '#0d7339'; // verde
color[9].style.backgroundColor = '#607878'; // verde escuro

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
    let container = document.getElementById('pixel-board').innerHTML;
    event.target.style.backgroundColor = corSelecionada
    localStorage.setItem('guardarNey', container)
    console.log(container);
}
selecionaSquare.addEventListener('click', pintar)

function limpar() {
    for(let i = 0; i < pixels.length; i++) {
        pixels[i].style.backgroundColor = 'white'
    }
}
botaoLimpar.addEventListener('click', limpar)

window.onload = () => {
    // localStorage.getItem('guardarNey')
}
