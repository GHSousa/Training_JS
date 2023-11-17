const buttonList = document.querySelectorAll('input[type=button]');

const inputTel = document.querySelector('input[type=tel]');

for (let indice = 0; indice < listaDeTeclas.length; indice++) {
    const tecla = buttonList[indice];
    tecla.onclick = function () {
        inputTel.value = inputTel.value + tecla.value;
    }
}