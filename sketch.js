let imagemBolaPong;
let imagemRaqueteJogador;
let imagemRaqueteComputador;
let imagemFundo;
let somBatida;
let somGol;
let pontuacaoJogador = 0;
let pontuacaoComputador = 0;

let bolaPong;
let raqueteJogador;
let raqueteComputador;
let canvas;

let jogoEncerrado = false;
let vencedor = "";

function preload() {
    imagemBolaPong = loadImage('assets/bola1.png');
    imagemRaqueteJogador = loadImage('assets/barra01.png');
    imagemRaqueteComputador = loadImage('assets/barra02.png');
    imagemFundo = loadImage('assets/fundo4.png');
    somBatida = loadSound('assets/batida.wav');
    somGol = loadSound('assets/gol.wav');
}

function centerCanvas() {
    const x = (windowWidth - width) / 2;
    const y = (windowHeight - height) / 2;
    canvas.position(x, y);
}

function setup() {
    let proporcao = 2; // largura/altura
    let larguraDesejada = min(windowWidth * 0.95, 800);
    let alturaDesejada = larguraDesejada / proporcao;
    canvas = createCanvas(larguraDesejada, alturaDesejada);
    centerCanvas();
    bolaPong = new BolaPong();
    raqueteJogador = new RaquetePong(30);
    raqueteComputador = new RaquetePong(width - 40);
}

function windowResized() {
    let proporcao = 2;
    let larguraDesejada = min(windowWidth * 0.95, 800);
    let alturaDesejada = larguraDesejada / proporcao;
    resizeCanvas(larguraDesejada, alturaDesejada);
    centerCanvas();
    // Reposiciona raquetes e bola para o centro se desejar
    // bolaPong.reiniciar();
    // raqueteJogador.posicaoY = height / 2;
    // raqueteComputador.posicaoY = height / 2;
}

function draw() {
    background(0);
    if (imagemFundo) {
        let canvasRatio = width / height;
        let imgRatio = imagemFundo.width / imagemFundo.height;
        let larguraDesenho, alturaDesenho;

        if (imgRatio > canvasRatio) {
            alturaDesenho = height;
            larguraDesenho = imgRatio * alturaDesenho;
        } else {
            larguraDesenho = width;
            alturaDesenho = larguraDesenho / imgRatio;
        }

        imageMode(CENTER);
        image(
            imagemFundo,
            width / 2,
            height / 2,
            larguraDesenho,
            alturaDesenho
        );
        imageMode(CORNER);
    }

    bolaPong.atualizar();
    bolaPong.desenhar();
    raqueteJogador.atualizar();
    raqueteJogador.desenhar();
    raqueteComputador.atualizar();
    raqueteComputador.desenhar();

    if (jogoEncerrado) {
        desenharTelaVencedor();
        noLoop(); // pausa o jogo até reiniciar
    }
}

function atualizarPlacarVisual() {
    document.getElementById('placar-jogador').textContent = pontuacaoJogador;
    document.getElementById('placar-computador').textContent = pontuacaoComputador;
}

// Suporte a touch para mobile
function touchMoved() {
    raqueteJogador.posicaoY = mouseY;
    return false;
}

function desenharTelaVencedor() {
    push();
    fill(0, 180);
    rect(0, 0, width, height);

    textAlign(CENTER, CENTER);
    textSize(48);
    fill(vencedor === "Jogador" ? "#1e90ff" : "#ff4136");
    text(`${vencedor} venceu!`, width / 2, height / 2 - 30);

    textSize(24);
    fill(255);
    text("Clique para reiniciar", width / 2, height / 2 + 30);

    pop();
}

function mousePressed() {
    if (jogoEncerrado) {
        pontuacaoJogador = 0;
        pontuacaoComputador = 0;
        atualizarPlacarVisual();
        bolaPong.reiniciar();
        jogoEncerrado = false;
        vencedor = "";
        loop(); // retoma o jogo
    }
}