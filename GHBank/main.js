let saldo = "00,00"       
       
       // Certifique-se de que o script seja executado após o carregamento do DOM
        document.addEventListener('DOMContentLoaded', function () {
            // Atualize o conteúdo da span com o valor do saldo
            document.getElementById('saldoValor').textContent = saldo;
        });

        function realizarDeposito() {
            var valorDeposito = document.getElementById('valorDeposito').value;
            valorDeposito = parseFloat(valorDeposito);
            saldo += valorDeposito;
            document.getElementById('saldoValor').textContent = saldo;
        }     