// Inicialização do Swiper.js
const swiper = new Swiper('.swiper-container', {
    loop: true, // Permite que o carrossel seja infinito
    navigation: {
        nextEl: '.swiper-button-next', // Botão para avançar
        prevEl: '.swiper-button-prev', // Botão para voltar
    },
    autoplay: {
        delay: 3000, // Tempo entre slides (em ms)
        disableOnInteraction: false, // Continua o autoplay após interação
    },
    slidesPerView: 5, // Quantidade de slides visíveis ao mesmo tempo
    spaceBetween: 20, // Espaço entre os slides (em px)
    breakpoints: {
        768: {
            slidesPerView: 2, // 2 slides visíveis em telas médias
        },
        480: {
            slidesPerView: 1, // 1 slide visível em telas pequenas
        },
    },
});

// Mostrar o botão "Voltar ao Topo" ao rolar
window.addEventListener('scroll', () => {
    const backToTop = document.querySelector('.back-to-top');
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

document.getElementById('form-contato').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o envio do formulário

    // Validação básica
    const nome = document.getElementById('nome').value.trim();
    const celular = document.getElementById('celular').value.trim();
    const bairro = document.getElementById('bairro').value.trim();
    const cidade = document.getElementById('cidade').value.trim();
    const estado = document.getElementById('estado').value;

    if (!nome || !celular || !bairro || !cidade || !estado) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    // Exibe mensagem de sucesso
    alert('Formulário enviado com sucesso!');
    document.getElementById('form-contato').reset(); // Limpa o formulário
});