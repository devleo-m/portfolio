// JavaScript para o efeito de esconder/mostrar o menu com transição suave
let ultimaPosicaoScroll = window.pageYOffset;
window.addEventListener('scroll', function() {
    let posicaoAtualScroll = window.pageYOffset;
    if (ultimaPosicaoScroll > posicaoAtualScroll) {
        document.querySelector('header').style.top = '0';
    } else {
        document.querySelector('header').style.top = '-100px';
    }
    ultimaPosicaoScroll = posicaoAtualScroll;
});
