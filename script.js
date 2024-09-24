// Função para calcular os dias corridos até a data
function calcularDiasCorridos(fim) {
    const hoje = new Date();
    const diffTime = fim.getTime() - hoje.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

// Função para calcular dias úteis (sem sábados, domingos e feriados)
function calcularDiasUteis(fim, excluirSextas = false) {
    const hoje = new Date();
    let diasUteis = 0;
    
    const feriados = [
        new Date('2024-10-14'),
        new Date('2024-11-15'),
        new Date('2024-11-20')
    ];

    // Loop de hoje até a data de término
    for (let dia = new Date(hoje); dia <= fim; dia.setDate(dia.getDate() + 1)) {
        const diaSemana = dia.getDay();
        const eFeriado = feriados.some(feriado => (
            feriado.getDate() === dia.getDate() &&
            feriado.getMonth() === dia.getMonth() &&
            feriado.getFullYear() === dia.getFullYear()
        ));

        // Se não for sábado, domingo, feriado (e opcionalmente sexta-feira)
        if (diaSemana !== 0 && diaSemana !== 6 && !eFeriado) {
            if (!(excluirSextas && diaSemana === 5)) {
                diasUteis++;
            }
        }
    }
    return diasUteis;
}

// Data final para o contador (17/12/2024)
const dataFim = new Date('2024-12-17');

// Atualiza os valores na página
document.getElementById('corridos').textContent = calcularDiasCorridos(dataFim);
document.getElementById('uteis').textContent = calcularDiasUteis(dataFim);
document.getElementById('uteisSextas').textContent = calcularDiasUteis(dataFim, true);// JavaScript Document