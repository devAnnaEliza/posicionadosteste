const swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    slidesPerView: 5,
    spaceBetween: 20,
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        480: {
            slidesPerView: 1,
        },
    },
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