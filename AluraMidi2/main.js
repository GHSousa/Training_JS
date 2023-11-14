/*
function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play();
}

function tocaSomClap() {
    document.querySelector('#som_tecla_clap').play();
}

document.querySelector('.tecla_pom').onclick = tocaSomPom;
*/

function tocaSom(idElementAudio) {
    document.querySelector(idElementAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla')

/*let contador = 0;


while (contador < listaDeTeclas.length) {
    const tecla = listaDeTeclas[contador];

    const instrumento = tecla.classList[1];
    
    const idAudio = `#som_${instrumento}`;//template string

    listaDeTeclas[contador].onclick = function () {
        tocaSom(idAudio)
    }
    contador = contador + 1;
}*/

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];

    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;//template string

    listaDeTeclas[contador].onclick = function () {
        tocaSom(idAudio)
    }
}