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

// Adiciona a classe 'active' ao botão clicado e remove dos outros
function makeActive(event) {
    // Seleciona todos os botões
    var buttons = document.querySelectorAll('.filter-buttons a');
    // Remove a classe 'active' de todos os botões
    buttons.forEach(function(button){
      button.classList.remove('active');
    });
    // Adiciona a classe 'active' ao botão que foi clicado
    event.currentTarget.classList.add('active');
  }

// Função para filtrar projetos
function filterSelection(category) {
    var x, i;
    x = document.getElementsByClassName("project-card");
    if (category == 'all') category = '';
    for (i = 0; i < x.length; i++) {
      removeClass(x[i], "show");
      if (x[i].className.indexOf(category) > -1) addClass(x[i], "show");
    }
    makeActive(event);

    // Salva a categoria selecionada no localStorage
    localStorage.setItem('selectedCategory', category);
  }

// Quando a página carrega, verifica o localStorage e atualiza o botão ativo
    document.addEventListener('DOMContentLoaded', function() {
        // Pega a categoria selecionada do localStorage
        var selectedCategory = localStorage.getItem('selectedCategory') || 'all';
        
        // Adiciona a classe 'active' ao botão correspondente
        var allButtons = document.querySelectorAll('.filter-buttons a');
        allButtons.forEach(function(button) {
        if (button.getAttribute('onclick').includes(selectedCategory)) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
        });
        
        // Chama filterSelection para a categoria selecionada
        filterSelection(selectedCategory);
  });
  
  // Mostrar elementos filtrados
  function addClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
    }
  }
  
  // Esconder elementos que não são selecionados
  function removeClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);     
      }
    }
    element.className = arr1.join(" ");
  }
  
  // Adicionar classe 'active' ao botão atual (destacar)
  var btnContainer = document.getElementById("myBtnContainer");
  var btns = btnContainer.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
}

// Esconder elementos que não são selecionados
function removeClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);     
        }
    }
    element.className = arr1.join(" ");
}

function updateActiveButton() {
    // Pega a URL atual da página
    var currentURL = window.location.href;
  
    // Seleciona todos os botões
    var buttons = document.querySelectorAll('.filter-buttons a');
  
    // Remove a classe 'active' de todos os botões
    buttons.forEach(function(button) {
      button.classList.remove('active');
    });
  
    // Adiciona a classe 'active' ao botão que corresponde à URL atual
    buttons.forEach(function(button) {
      if (currentURL.includes(button.getAttribute('data-category'))) {
        button.classList.add('active');
      }
    });
  }
  
  // Chama a função updateActiveButton quando a página carrega e quando há mudanças na URL
  document.addEventListener('DOMContentLoaded', updateActiveButton);
  window.addEventListener('popstate', updateActiveButton);
  