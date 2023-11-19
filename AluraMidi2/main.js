
/*
function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play();
}

function tocaSomClap() {
    document.querySelector('#som_tecla_clap').play();
}

document.querySelector('.tecla_pom').onclick = tocaSomPom;
*/

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
function tocaSom(selectorAudio) {
    const element = document.querySelector(selectorAudio);

if (element && element.localName === 'audio') {
        element.play();
    } 
    else { console.log('Elemento não encontrado ou seletor invalido') }
}
    
const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;//template string

    tecla.onclick = function () {
        tocaSom(idAudio)
    }
    tecla.onkeydown = function (Event) {
        if (Event.code === 'Space' || Event.code === 'Enter') {
            tecla.classList.add('ativa')
        };
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }
}