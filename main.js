onst botoes = document.querySelectorALL(''button");

    botoes.for Each(function (botao) {
        let curtiu = false;
        botao.addEventlistener(''click", botaoClicado);
            function botaoClicado() {
                console.log("fui clicado");
                let texto = botao.querySelector("span ");
                if (curtiu === false) {
                    texto.textContent++;
                    curtiu = true;
                } else {
                    texto.textContent--;
                    curtiu = false;
                }
            }

    })