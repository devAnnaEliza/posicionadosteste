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