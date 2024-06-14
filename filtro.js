document.addEventListener('DOMContentLoaded', function() {
    let currentCount = 4;
    let currentFilter = 'all';
    let displayedProjects = []; // Armazena os projetos já exibidos
  
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  
    function filterSelection(filter, event) {
      event.preventDefault();
      currentFilter = filter;
      currentCount = 4; // Reseta o contador sempre que um novo filtro é aplicado
      displayedProjects = []; // Reseta os projetos exibidos
      updateProjectDisplay();
    }
  
    function loadMoreProjects() {
      currentCount += 2;
      updateProjectDisplay();
    }
  
    function updateProjectDisplay() {
      let projectContainer = document.querySelector('.project-container');
      let allProjects = Array.from(document.querySelectorAll('.project-card'));
      let projectsToShuffle = allProjects.filter(p => !displayedProjects.includes(p));
  
      shuffleArray(projectsToShuffle); // Embaralha apenas os projetos não exibidos
  
      // Adiciona os projetos embaralhados ao final da lista de exibição
      displayedProjects = [...displayedProjects, ...projectsToShuffle];
  
      // Limpa o container e adiciona os projetos da lista de exibição
      projectContainer.innerHTML = '';
      displayedProjects.forEach(project => projectContainer.appendChild(project));
  
      let count = 0;
      displayedProjects.forEach(project => {
        if (currentFilter === 'all' || project.classList.contains(currentFilter)) {
          project.style.display = count < currentCount ? 'block' : 'none';
          count++;
        } else {
          project.style.display = 'none';
        }
      });
  
      if (count <= currentCount || (currentFilter !== 'all' && count < currentCount)) {
        document.getElementById('loadMore').style.display = 'none';
      } else {
        document.getElementById('loadMore').style.display = 'block';
      }
    }
  
    // Adiciona o evento de clique aos botões de filtro
    let filterButtons = document.querySelectorAll('.filter-buttons a');
    filterButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        filterSelection(button.getAttribute('onclick').split("'")[1], event);
      });
    });
  
    // Chama a função uma vez para configurar a exibição inicial
    updateProjectDisplay();
  
    // Adiciona o evento de clique ao botão 'loadMore'
    document.getElementById('loadMore').addEventListener('click', loadMoreProjects);

      // Função para verificar a existência de projetos e desabilitar botões
  function checkProjectsAndDisableButtons() {
    ['full-stack', 'mobile'].forEach(category => {
      let projects = document.querySelectorAll('.project-card.' + category);
      let button = document.querySelector('.filter-buttons a[onclick*="' + category + '"]');
      if (projects.length === 0) {
        button.classList.add('disabled'); // Adiciona uma classe 'disabled' para estilização
        button.onclick = function(event) {
          event.preventDefault();
          alert('Esta seção está em construção. Por favor, volte mais tarde.');
        };
      }
    });
  }

  // Chama a função para configurar os botões na carga inicial
  checkProjectsAndDisableButtons();
});  