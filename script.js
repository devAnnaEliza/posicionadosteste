// primeiro carrossel
new Swiper('#carrossel-evento-1', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next-1',
        prevEl: '.swiper-button-prev-1',
    },
    slidesPerView: 1,
    spaceBetween: 10,
});

// segundo carrossel
new Swiper('#carrossel-evento-2', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next-2',
        prevEl: '.swiper-button-prev-2',
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    slidesPerView: 1,
    spaceBetween: 10,
});

document.getElementById('form-contato').addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const celular = document.getElementById('celular').value.trim();
    const bairro = document.getElementById('bairro').value.trim();
    const cidade = document.getElementById('cidade').value.trim();
    const estado = document.getElementById('estado').value;

    if (!nome || !celular || !bairro || !cidade || !estado) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    alert('Formulário enviado com sucesso!');
    document.getElementById('form-contato').reset();
});