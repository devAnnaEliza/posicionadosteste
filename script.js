if (document.querySelector('.swiper-container')) {
    //primeiro carrossel
    if (document.getElementById('carrossel-evento-1')) {
        new Swiper('#carrossel-evento-1', {
            navigation: {
                nextEl: '.swiper-button-next-1',
                prevEl: '.swiper-button-prev-1',
            },
            loop: true,
        });
    }
    //segundo carrossel
    if (document.getElementById('carrossel-evento-2')) {
        new Swiper('#carrossel-evento-2', {
            navigation: {
                nextEl: '.swiper-button-next-2',
                prevEl: '.swiper-button-prev-2',
            },
            loop: true,
        });
    }
}

//gerador automatico de devocionais
const devocionais = {};
for (let d = 1; d <= 30; d++) {
    const dia = d.toString().padStart(2, '0');
    devocionais[`2025-06-${dia}`] = {
        titulo: `Devocional do dia ${dia}/06/2025`,
        texto: `Esta é a devocional automática para o dia ${dia}/06/2025. Medite, ore e compartilhe!`,
        link: '#'
    };
}

    const calendarioMesAno = document.getElementById('calendario-mes-ano');
    const calendarioDias = document.getElementById('calendario-dias');
    const btnPrev = document.querySelector('.cal-btn.prev');
    const btnNext = document.querySelector('.cal-btn.next');
    const devocionalDia = document.getElementById('devocional-dia');
    const devocionalData = document.getElementById('devocional-data');
    const devocionalTitulo = document.getElementById('devocional-titulo');
    const devocionalTexto = document.getElementById('devocional-texto');
    const devocionalLink = document.getElementById('devocional-link');
    const ultimosLista = document.getElementById('devocionais-ultimos-lista');

    let dataAtual = new Date();
    let selecionado = new Date();

    function formatarDataISO(date) {
        return date.toISOString().slice(0, 10);
    }
    function formatarDataBR(date) {
        return date.toLocaleDateString('pt-BR');
    }

    function renderizarCalendario(mes, ano) {
        calendarioDias.innerHTML = '';
        const primeiroDia = new Date(ano, mes, 1);
        const ultimoDia = new Date(ano, mes + 1, 0);
        const hoje = new Date();

        const nomesMeses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
        calendarioMesAno.textContent = `${nomesMeses[mes]} ${ano}`;

        let diaSemana = primeiroDia.getDay();
        for (let i = 0; i < diaSemana; i++) {
            const vazio = document.createElement('button');
            vazio.className = 'cal-dia vazio';
            vazio.disabled = true;
            calendarioDias.appendChild(vazio);
        }

        for (let d = 1; d <= ultimoDia.getDate(); d++) {
            const btn = document.createElement('button');
            btn.className = 'cal-dia';
            btn.textContent = d;

            const dataBtn = new Date(ano, mes, d);

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
                mostrarDevocionalDoDia(selecionado);
                mostrarUltimosDevocionais(selecionado);
            });

            calendarioDias.appendChild(btn);
        }
    }

    function mostrarDevocionalDoDia(data) {
        const dataISO = formatarDataISO(data);
        const dev = devocionais[dataISO];
        devocionalData.textContent = formatarDataBR(data);
        if (dev) {
            devocionalTitulo.textContent = dev.titulo;
            devocionalTexto.textContent = dev.texto;
            devocionalLink.href = dev.link;
            devocionalLink.style.display = '';
        } else {
            devocionalTitulo.textContent = 'Sem devocional cadastrado';
            devocionalTexto.textContent = '';
            devocionalLink.style.display = 'none';
        }
    }

    function mostrarUltimosDevocionais(data) {
        ultimosLista.innerHTML = '';
        for (let i = 1; i <= 7; i++) {
            const dia = new Date(data);
            dia.setDate(dia.getDate() - i);
            const dataISO = formatarDataISO(dia);
            const dev = devocionais[dataISO];
            const li = document.createElement('li');
            li.innerHTML = `<span class="devocional-data">${dia.getDate().toString().padStart(2, '0')}/${(dia.getMonth()+1).toString().padStart(2, '0')}</span> ${dev ? dev.titulo : 'Sem devocional'}`;
            ultimosLista.appendChild(li);
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
    mostrarDevocionalDoDia(selecionado);
    mostrarUltimosDevocionais(selecionado);
