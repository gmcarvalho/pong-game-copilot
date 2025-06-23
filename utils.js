function anunciarPontuacao() {
    if ('speechSynthesis' in window) {
        const textoPontuacao = "Pontuação é " + pontuacaoJogador + " a " + pontuacaoComputador;
        const mensagem = new SpeechSynthesisUtterance(textoPontuacao);
        mensagem.lang = 'pt-BR';
        window.speechSynthesis.speak(mensagem);
    }
}

function verificaColisaoRaqueteBola(cx, cy, raio, x, y, largura, altura) {
    if (cx + raio < x || cx - raio > x + largura) {
        return false;
    }
    if (cy + raio < y || cy - raio > y + altura) {
        return false;
    }
    return true;
}