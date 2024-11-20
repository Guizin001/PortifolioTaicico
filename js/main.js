// Aguardar o carregamento completo da página
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');

  form.addEventListener('submit', function (e) {
    // Prevenir o envio do formulário até que a validação ocorra
    e.preventDefault();

    // Obter os valores dos campos
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Verificar se os campos estão preenchidos
    if (name === "" || email === "" || message === "") {
      formMessage.textContent = "Por favor, preencha todos os campos.";
      formMessage.classList.remove('success');
      formMessage.classList.add('error');
    } else {
      // Simular o envio do formulário e mostrar a mensagem de sucesso
      formMessage.textContent = "Mensagem enviada com sucesso! Entraremos em contato em breve.";
      formMessage.classList.remove('error');
      formMessage.classList.add('success');

      // Após 3 segundos, resetar o formulário e limpar a mensagem
      setTimeout(function () {
        form.reset();
        formMessage.textContent = "";
      }, 3000);
    }
  });
});


// Detecta o scroll da página para adicionar ou remover a classe 'scrolled'
document.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  if (window.scrollY > 100) { // Quando rolar mais de 100px para baixo
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const menuLinks = document.querySelectorAll('.nav-list li a');
  const sections = document.querySelectorAll('section');
  const header = document.getElementById('header');
  
  // Função para adicionar ou remover a classe 'active' nos itens do menu
  function highlightMenu() {
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        // Adiciona a classe 'active' no link do menu correspondente
        menuLinks[index].classList.add('active');
      } else {
        // Remove a classe 'active' do link do menu
        menuLinks[index].classList.remove('active');
      }
    });
  }

  // Função para ajustar o background do header conforme o scroll
  function adjustHeaderTransparency() {
    const scrollY = window.scrollY;
    const opacity = Math.min(1, scrollY / 300); // Limita a opacidade de 0 a 1 conforme o scroll
    const gradientOpacity = 1 - opacity; // Quanto mais o usuário rola, mais transparente fica o gradiente

    // Aplica a opacidade do gradiente ao fundo
    header.style.background = `linear-gradient(90deg, rgba(152, 109, 255, ${gradientOpacity}), rgba(18, 18, 18, ${gradientOpacity}))`;
  }

  // Detecta a rolagem para aplicar as funções de highlightMenu e adjustHeaderTransparency
  window.addEventListener('scroll', function() {
    highlightMenu();
    adjustHeaderTransparency();
  });

  // Chama a função ao carregar a página para garantir que o menu inicial esteja correto
  highlightMenu();
  adjustHeaderTransparency();
});

document.addEventListener('DOMContentLoaded', function () {
  const typewriterElement = document.getElementById('typewriter');
  const words = ['Web Desenvolvedor', 'Frontend Developer']; // Texto para reescrever
  let wordIndex = 0;
  let letterIndex = 0;
  let currentWord = '';
  let typing = true;

  function type() {
    if (typing) {
      if (letterIndex < words[wordIndex].length) {
        currentWord += words[wordIndex].charAt(letterIndex);
        typewriterElement.textContent = currentWord;
        letterIndex++;
        setTimeout(type, 150); // Ajuste da velocidade de digitação
      } else {
        typing = false;
        setTimeout(type, 1500); // Pausa antes de apagar
      }
    } else {
      if (letterIndex > 0) {
        currentWord = currentWord.slice(0, -1);
        typewriterElement.textContent = currentWord;
        letterIndex--;
        setTimeout(type, 100); // Ajuste da velocidade de apagamento
      } else {
        typing = true;
        wordIndex = (wordIndex + 1) % words.length; // Vai para a próxima palavra
        setTimeout(type, 500); // Pausa antes de digitar a próxima palavra
      }
    }
  }

  // Inicia a digitação
  type();
});

// Função para alternar a visibilidade das descrições das empresas
function toggleAccordion(empresa) {
  const content = document.getElementById(empresa);
  
  // Se a empresa clicada já estiver visível, esconde
  if (content.classList.contains('active')) {
    content.classList.remove('active');
  } else {
    // Caso contrário, exibe a descrição e oculta as outras
    const allContents = document.querySelectorAll('.accordion-content');
    allContents.forEach(item => item.classList.remove('active'));
    content.classList.add('active');
  }
}

// Função para alternar o conteúdo do accordion
function toggleAccordion(id) {
  // Fecha todos os outros conteúdos
  const allContents = document.querySelectorAll('.accordion-content');
  allContents.forEach(content => {
    if (content.id !== id) {
      content.style.display = 'none';
    }
  });

  // Alterna a exibição do conteúdo clicado
  const selectedContent = document.getElementById(id);
  if (selectedContent.style.display === 'block') {
    selectedContent.style.display = 'none';
  } else {
    selectedContent.style.display = 'block';
  }
}


let isEnglish = false; // Controla o idioma atual

// Função para alternar entre Português e Inglês
function toggleLanguage() {
  const languageFlag = document.getElementById('languageFlag');
  
  // Verifica se está em inglês ou português
  if (isEnglish) {
    languageFlag.src = "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg";
    document.querySelectorAll('[data-translate]').forEach(el => {
      el.textContent = el.getAttribute('data-translate-pt');
    });
  } else {
    languageFlag.src = "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg";
    document.querySelectorAll('[data-translate]').forEach(el => {
      el.textContent = el.getAttribute('data-translate-en');
    });
  }

  isEnglish = !isEnglish;
}

console.log("EmailJS User ID inicializado");
emailjs.init('mtgA2rdr4LoVNguMh');

