const botaoPlaypause = document.getElementById('play-pause');
const audioCapitulo = document.getElementById('audio-capitulo');
const botaoVoltar = document.getElementById('anterior');
const botaoAvancar = document.getElementById('proximo');
const nomeCapitulo = document.getElementById('capitulo');

const numeroCapitulos = 10;

let taTocando = 0;
let capituloAtual = 1;

function tocarFaixa() {
    audioCapitulo.play();
    botaoPlaypause.classList.remove('bi-play-fill');
    botaoPlaypause.classList.add('bi-pause-fill');
}

function pausarFaixa() {
    audioCapitulo.pause();
    botaoPlaypause.classList.remove('bi-pause-fill');
    botaoPlaypause.classList.add('bi-play-fill');
}

function tocarOuPausar() {
    if(taTocando === 0){
        tocarFaixa();
        taTocando = 1;
    } else {
        pausarFaixa();
        taTocando = 0;
    }
}

function trocarNomeFaixa() {
    nomeCapitulo.innerText = 'Capitulo ' + capituloAtual;
}

function proximaFaixa () {
    if(capituloAtual === numeroCapitulos){
        capituloAtual = 1;
    } else {
        capituloAtual = capituloAtual + 1;
    }
    audioCapitulo.src = "books/dom-casmurro/" + capituloAtual + ".mp3";
    tocarFaixa();
    taTocando = 1;
    trocarNomeFaixa();
}

function voltarFaixa () {
    if(capituloAtual === 1){
        capituloAtual = numeroCapitulos;
    } else {
        capituloAtual = capituloAtual - 1;
    }
    audioCapitulo.src = "books/dom-casmurro/" + capituloAtual + ".mp3";
    tocarFaixa();
    taTocando = 1;
    trocarNomeFaixa();
}

botaoPlaypause.addEventListener('click', tocarOuPausar);
botaoAvancar.addEventListener('click', proximaFaixa);
botaoVoltar.addEventListener('click', voltarFaixa);
