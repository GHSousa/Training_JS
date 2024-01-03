var saldo = "00,00"       
       
       // Certifique-se de que o script seja executado após o carregamento do DOM
        document.addEventListener('DOMContentLoaded', function () {
            // Atualize o conteúdo da span com o valor do saldo
            document.getElementById('saldoValor').textContent = saldo;
        });