// Função de interatividade do menu
var menuHbg = document.querySelector(".menuBtn");
var menuList = document.querySelector(".menuList");

function menu() {
  if (menuList.style.display == "none" || menuList.style.display == "") {
    menuList.style.display = "block";
    menuHbg.innerText = "close";
  } else if (menuList.style.display = "block") {
    menuList.style.display = "none";
    menuHbg.innerText = "menu";
  }
}

// Função para automatizar carrosel de imagens
let count = 1;

// Define o botão de opção (radio) com o ID 'radio1' como selecionado (checked).
document.getElementById("radio1").checked = true;

// Define um intervalo para chamar repetidamente a função "nextImage" a cada 3 segundos.
setInterval(function () {
  nextImage();
}, 3000);

function nextImage() {
  count++;

  // Verifica se o valor de "count" ultrapassou 3 (número de imagens disponíveis).
  // Se sim, redefine "count" para 1, reiniciando o ciclo de imagens.
  if (count > 3) {
    count = 1;
  }

  // Define o botão de opção (radio) com o ID correspondente a "count" como selecionado.
  document.getElementById("radio" + count).checked = true;
}

// Função para botões de ensino
function expandirEns(container) {
  // Adiciona ou remove a classe 'expanded' no elemento clicado
  container.classList.toggle("expanded");

  // Obtém todos os containers com a classe 'contracted'
  var todosContainers = document.querySelectorAll(".contracted");

  // Percorre todos os containers com a classe 'contracted'
  todosContainers.forEach(function (cont) {
    // Remove a classe 'expanded' e limpa o conteúdo dos containers não clicados
    if (cont !== container) {
      cont.classList.remove("expanded");
      cont.innerHTML = "";
    }
  });

  // Seleciona o parágrafo dentro do elemento com a classe 'educationTextContainer'
  var textoEnsino = document.querySelector(".educationTextContainer > p");

  // Verifica se o container clicado foi expandido
  if (container.classList.contains("expanded")) {
    // Define o conteúdo do container clicado com base na classe e atualiza o texto
    if (container.classList.contains("childishContainer")) {
      container.innerHTML = "<p>Educação Infantil</p>";
      textoEnsino.innerText = "O Colégio Égalité atende crianças de 4 meses a 5 anos na Educação Infantil, buscando autonomia, respeito individual e socialização por meio de vivências lúdicas, fortalecendo laços afetivos e reavaliando emoções e relações.";
    } else if (container.classList.contains("elementaryContainer")) {
      container.innerHTML = "<p>Ensino Fundamental</p>";
      textoEnsino.innerText = "No Ensino Fundamental I, os alunos valorizam conteúdos disciplinares, adotam atitudes éticas e se integram ao ambiente escolar. Já no Ensino Fundamental II, os jovens são preparados para mudanças físicas e psicológicas, recebendo apoio emocional e focando no desenvolvimento pessoal e acadêmico.";
    } else if (container.classList.contains("highContainer")) {
      container.innerHTML = "<p>Ensino Médio</p>";
      textoEnsino.innerText = "No Ensino Médio do Colégio Égalité, os alunos são incentivados a se engajar criticamente com o mundo atual, enquanto a equipe docente torna o aprendizado mais atrativo. O foco é desenvolver jovens comunicativos e criativos, respeitando suas individualidades e conscientizando sobre seus papéis na sociedade.";
    }
  } else if (!container.classList.contains("expanded")) {
    // Remove o conteúdo se o container for contraído e redefine o texto padrão
    container.innerHTML = "";
    textoEnsino.innerText = "Clique nas cores para abrir os níveis de ensino.";
  }
}