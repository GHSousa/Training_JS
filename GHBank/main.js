let saldo = 0   
        document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('saldoValor').textContent = saldo;
        });

        function hideModal(){
            let modal = document.getElementById("modal");
            modal.classList.remove("show-modal")
        }
        
        function realizarDeposito() {
            let valorDeposito = document.getElementById('valorDeposito').value;
            valorDeposito = parseFloat(valorDeposito);
            if( valorDeposito === "" || isNaN(valorDeposito)) {
                alert("O valor que voce esta depositando é menor do que o minimo permitido. Por favor, deposite um valor maior!")
            } else {
                saldo += valorDeposito;

                let saldoFormatado = saldo.toFixed(2).replace('.','');
                document.getElementById('saldoValor').textContent = saldo;
    
                let modal = document.getElementById("modal");
                let modalContent = modal.querySelector('.modal-content');
                modalContent.innerHTML = `
                    <span class="modal-span" onclick="hideModal()">&times;</span>
                    <h1>Depósito realizado no valor de <strong>R$:${valorDeposito},00 reais!</strong><br>Obrigado!!!</h1>
                `;  
                modal.classList.add("show-modal");
            }
        }   

        function realizaSaque() {
            let valorSaque = document.getElementById('valorSaque').value;
            valorSaque = parseFloat(valorSaque);

            if(valorSaque <= saldo){
                saldo -= valorSaque;
                document.getElementById('saldoValor').textContent = saldo;

                let modal = document.getElementById("modal");
                let modalContent = modal.querySelector('.modal-content');
                modalContent.innerHTML = `
                    <span class="modal-span" onclick="hideModal()">&times;</span>
                    <h1>Saque realizado no valor de <strong>R$:${valorSaque},00 reais!</strong><br>
                    O saldo restante é de: R$:${saldo},00 reais! <br>
                    Obrigado!!!</h1>
                `;  
                modal.classList.add("show-modal");
            } else {
                alert("Voce não tem saldo suficiente pra realizar um saque! Faça primeiro um deposito")
            }
        }