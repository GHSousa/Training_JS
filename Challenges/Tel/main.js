function tocaSom(selecAudio){
    const element = document.querySelector(selecAudio);

    if(element && element.localName === 'audio'){
        element.play();
    } else {
        console.log('Elemento não encontrado ou seletor inválido')
    }
}
const buttonList = document.querySelectorAll('.button');

for(let index = 0; index < buttonList.length; index ++){

    const tecla = buttonList[index];
    const teclado = tecla.classList[1];
    const idAudio = `#som_${teclado}`; 

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (event) {
        if (event.code === 'Space' || event.code === 'Enter'){
            tecla.classList.add('ativa')
        };
    }
    tecla.onkeyup = function () {
        tecla.classList.remove ('ativa')
    }
}