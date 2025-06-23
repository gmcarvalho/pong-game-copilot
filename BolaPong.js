class BolaPong {
    constructor() {
        this.raio = 12;
        this.reiniciar();
    }

    reiniciar() {
        this.posicaoX = width / 2;
        this.posicaoY = height / 2;
        const velocidadeMaxima = 7;
        // Sempre arremessa para o jogador (esquerda)
        this.velocidadeX = -Math.abs(Math.random() * (velocidadeMaxima - 2) + 2); // valor negativo entre -2 e -5
        // Y pode ser para cima ou para baixo, mas não muito inclinado
        this.velocidadeY = Math.random() * velocidadeMaxima - velocidadeMaxima / 2;
        this.angulo = 0;
    }

    atualizar() {
        this.posicaoX += this.velocidadeX;
        this.posicaoY += this.velocidadeY;
        this.angulo = atan2(this.velocidadeY, this.velocidadeX);

        if (this.posicaoX < this.raio || this.posicaoX > width - this.raio) {
            if (this.posicaoX < this.raio) {
                pontuacaoComputador++;
            } else {
                pontuacaoJogador++;
            }
            atualizarPlacarVisual();
            somGol.play();

            if (pontuacaoJogador >= 4 || pontuacaoComputador >= 4) {
                jogoEncerrado = true;
                vencedor = pontuacaoJogador >= 4 ? "Jogador" : "Computador";
            } else {
                this.reiniciar();
            }
        }
        if (this.posicaoY < this.raio || this.posicaoY > height - this.raio) {
            this.velocidadeY *= -1;
        }

        if (
            verificaColisaoRaqueteBola(
                this.posicaoX, this.posicaoY, this.raio,
                raqueteJogador.posicaoX, raqueteJogador.posicaoY, raqueteJogador.largura, raqueteJogador.altura
            ) ||
            verificaColisaoRaqueteBola(
                this.posicaoX, this.posicaoY, this.raio,
                raqueteComputador.posicaoX, raqueteComputador.posicaoY, raqueteComputador.largura, raqueteComputador.altura
            )
        ) {
            somBatida.play();
            this.velocidadeX *= -1;
            this.velocidadeX *= 1.1;
            this.velocidadeY *= 1.1;
        }
    }

    desenhar() {
        push();
        translate(this.posicaoX, this.posicaoY);
        rotate(this.angulo);
        imageMode(CENTER);
        image(imagemBolaPong, 0, 0, this.raio * 5, this.raio * 5);
        pop();
    }
}