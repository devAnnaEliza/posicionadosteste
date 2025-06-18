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


// calendário
const calendarioMesAno = document.getElementById('calendario-mes-ano');
const calendarioDias = document.getElementById('calendario-dias');
const btnPrev = document.querySelector('.cal-btn.prev');
const btnNext = document.querySelector('.cal-btn.next');

let dataAtual = new Date();
let selecionado = new Date();

function renderizarCalendario(mes, ano) {
    calendarioDias.innerHTML = '';
    const primeiroDia = new Date(ano, mes, 1);
    const ultimoDia = new Date(ano, mes + 1, 0);
    const hoje = new Date();

    const nomesMeses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
    calendarioMesAno.textContent = `${nomesMeses[mes]} ${ano}`;

    for (let i = 0; i < primeiroDia.getDay(); i++) {
        const vazio = document.createElement('button');
        vazio.className = 'cal-dia vazio';
        vazio.disabled = true;
        calendarioDias.appendChild(vazio);
    }

    for (let d = 1; d <= ultimoDia.getDate(); d++) {
        const btn = document.createElement('button');
        btn.className = 'cal-dia';
        btn.textContent = d;

        if (
            d === hoje.getDate() &&
            mes === hoje.getMonth() &&
            ano === hoje.getFullYear()
        ) {
            btn.classList.add('hoje');
        }
        if (
            d === selecionado.getDate() &&
            mes === selecionado.getMonth() &&
            ano === selecionado.getFullYear()
        ) {
            btn.classList.add('selecionado');
        }

        btn.addEventListener('click', () => {
            selecionado = new Date(ano, mes, d);
            renderizarCalendario(mes, ano);
        });

        calendarioDias.appendChild(btn);
    }
}

btnPrev.addEventListener('click', () => {
    dataAtual.setMonth(dataAtual.getMonth() - 1);
    renderizarCalendario(dataAtual.getMonth(), dataAtual.getFullYear());
});
btnNext.addEventListener('click', () => {
    dataAtual.setMonth(dataAtual.getMonth() + 1);
    renderizarCalendario(dataAtual.getMonth(), dataAtual.getFullYear());
});

renderizarCalendario(dataAtual.getMonth(), dataAtual.getFullYear());