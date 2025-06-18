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

//add mais devocionais ao calendário
if (document.getElementById('calendario-dias')) {
    const devocionais = {
        '2025-06-01': { titulo: 'Novo Mês, Novos Começos', texto: '“Eis que faço novas todas as coisas.” (Ap 21:5)', link: '#' },
        '2025-06-02': { titulo: 'A Força da Oração', texto: '“Orai sem cessar.” (1Ts 5:17)', link: '#' },
        '2025-06-03': { titulo: 'Confiança Plena', texto: '“Entrega o teu caminho ao Senhor, confia nele...” (Sl 37:5)', link: '#' },
        '2025-06-04': { titulo: 'Alegria no Senhor', texto: '“A alegria do Senhor é a nossa força.” (Ne 8:10)', link: '#' },
        '2025-06-05': { titulo: 'Perseverança na Fé', texto: '“Corramos com perseverança a carreira...” (Hb 12:1)', link: '#' },
        '2025-06-06': { titulo: 'Amor ao Próximo', texto: '“Ame o seu próximo como a si mesmo.” (Mc 12:31)', link: '#' },
        '2025-06-07': { titulo: 'Gratidão Diária', texto: '“Em tudo dai graças...” (1Ts 5:18)', link: '#' },
        '2025-06-08': { titulo: 'Serviço com Amor', texto: '“Sirvam uns aos outros com amor.” (Gl 5:13)', link: '#' },
        '2025-06-09': { titulo: 'Esperança Viva', texto: '“Bendito seja o Deus... que nos regenerou para uma viva esperança.” (1Pe 1:3)', link: '#' },
        '2025-06-10': { titulo: 'Paz Interior', texto: '“Deixo-vos a paz, a minha paz vos dou...” (Jo 14:27)', link: '#' },
        '2025-06-11': { titulo: 'Fé que Move Montanhas', texto: '“Se tiverdes fé... direis a este monte...” (Mt 17:20)', link: '#' },
        '2025-06-12': { titulo: 'Sabedoria do Alto', texto: '“Se algum de vós tem falta de sabedoria, peça a Deus...” (Tg 1:5)', link: '#' },
        '2025-06-13': { titulo: 'Vencendo o Medo', texto: '“No amor não há medo...” (1Jo 4:18)', link: '#' },
        '2025-06-14': { titulo: 'Descanso em Deus', texto: '“Vinde a mim... e eu vos aliviarei.” (Mt 11:28)', link: '#' },
        '2025-06-15': { titulo: 'Renovação Diária', texto: '“As misericórdias do Senhor se renovam a cada manhã.” (Lm 3:23)', link: '#' },
        '2025-06-16': { titulo: 'Esperança Renovada', texto: '“A esperança não decepciona...” (Rm 5:5)', link: '#' },
        '2025-06-17': { titulo: 'Confiança em Deus', texto: '“Confie no Senhor de todo o seu coração...” (Pv 3:5)', link: '#' },
        '2025-06-18': { titulo: 'Luz para o Caminho', texto: '“Lâmpada para os meus pés é tua palavra...” (Sl 119:105)', link: '#' },
        '2025-06-19': { titulo: 'Vida em Comunhão', texto: '“Oh! Quão bom e quão suave é que os irmãos vivam em união.” (Sl 133:1)', link: '#' },
        '2025-06-20': { titulo: 'Coragem para Avançar', texto: '“Seja forte e corajoso...” (Js 1:9)', link: '#' },
        '2025-06-21': { titulo: 'Bondade e Misericórdia', texto: '“Bondade e misericórdia certamente me seguirão...” (Sl 23:6)', link: '#' },
        '2025-06-22': { titulo: 'Verdade que Liberta', texto: '“Conhecereis a verdade, e a verdade vos libertará.” (Jo 8:32)', link: '#' },
        '2025-06-23': { titulo: 'Frutos do Espírito', texto: '“O fruto do Espírito é amor, alegria, paz...” (Gl 5:22)', link: '#' },
        '2025-06-24': { titulo: 'Deus é Fiel', texto: '“Fiel é o que vos chama...” (1Ts 5:24)', link: '#' },
        '2025-06-25': { titulo: 'Viva com Propósito', texto: '“Tudo posso naquele que me fortalece.” (Fp 4:13)', link: '#' },
        '2025-06-26': { titulo: 'Perdão que Liberta', texto: '“Perdoai, e sereis perdoados.” (Lc 6:37)', link: '#' },
        '2025-06-27': { titulo: 'Deus é Amor', texto: '“Deus é amor...” (1Jo 4:8)', link: '#' },
        '2025-06-28': { titulo: 'Vitória em Cristo', texto: '“Mas graças a Deus, que nos dá a vitória...” (1Co 15:57)', link: '#' },
        '2025-06-29': { titulo: 'Crescimento Espiritual', texto: '“Antes, crescei na graça e no conhecimento...” (2Pe 3:18)', link: '#' },
        '2025-06-30': { titulo: 'Gratidão Final', texto: '“Dai graças ao Senhor, porque ele é bom...” (Sl 136:1)', link: '#' }
    };

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
}