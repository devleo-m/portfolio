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

// JavaScript para adicionar a classe 'fixed-menu' ao header após passar pelo banner
document.addEventListener('DOMContentLoaded', (event) => {
    const header = document.querySelector('header'); // Selecione o elemento header
    const bannerHeight = document.querySelector('.banner').offsetHeight; // Altura do banner

    window.addEventListener('scroll', () => {
        if (window.scrollY > bannerHeight) {
            header.classList.add('fixed-menu'); // Adiciona a classe para fixar o menu
        } else {
            header.classList.remove('fixed-menu'); // Remove a classe para desfixar o menu
        }
    });
});

// Função para abrir o menu lateral
function openNav() {
    document.getElementById("menu-lateral").style.width = "50%";
}

// Função para fechar o menu lateral
function closeNav() {
    document.getElementById("menu-lateral").style.width = "0";
}

// Adicionando evento de clique ao ícone do menu hambúrguer
document.querySelector('.hamburger-menu').addEventListener('click', openNav);
