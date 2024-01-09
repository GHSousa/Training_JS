let saldo = 0   
        document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('saldoValor').textContent = saldo;
        });

        function realizarDeposito() {
            let valorDeposito = document.getElementById('valorDeposito').value;
            valorDeposito = parseFloat(valorDeposito);
            saldo += valorDeposito;
            document.getElementById('saldoValor').textContent = saldo;
        }     

        function realizaSaque() {
            let valorSaque = document.getElementById('valorSaque').value;
            valorSaque = parseFloat(valorSaque);

            if(valorSaque <= saldo){
                saldo -= valorSaque;
                document.getElementById('saldoValor').textContent = saldo;
            } else {
                alert("Voce não tem saldo suficiente pra realizar um saque! Faça primeiro um deposito")
            }
        }