class RaquetePong {
    constructor(posicaoX) {
        this.posicaoX = posicaoX;
        this.posicaoY = height / 2;
        this.largura = 10;
        this.altura = 60;
    }
    atualizar() {
        if (this.posicaoX < width / 2) {
            this.posicaoY = mouseY;
        } else {
            if (bolaPong.posicaoY < this.posicaoY) {
                this.posicaoY -= 5;
            } else {
                this.posicaoY += 5;
            }
        }
        if (this.posicaoY < 0) {
            this.posicaoY = 0;
        }
        if (this.posicaoY > height - this.altura) {
            this.posicaoY = height - this.altura;
        }
    }
    desenhar() {
        if (this.posicaoX < width / 2) {
            image(imagemRaqueteJogador, this.posicaoX, this.posicaoY, this.largura, this.altura);
        } else {
            image(imagemRaqueteComputador, this.posicaoX, this.posicaoY, this.largura, this.altura);
        }
    }
}