let INDICE = 13, SOMA = 0, K = 0;

while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}

console.log(SOMA);

function isFibonacci(num) {
    if (num < 0) return false;
    let a = 0, b = 1;
    while (a <= num) {
        if (a === num) return true;
        [a, b] = [b, a + b];
    }
    return false;
}

const num = parseInt(prompt("Informe um número: "), 10);
console.log(isFibonacci(num) ? "Pertence à sequência de Fibonacci." : "Não pertence à sequência de Fibonacci.");

const dados = {
    faturamento: [0, 1500, 2200, 0, 1800, 3000, 0, 4000, 2800, 5000]
};

const faturamento = dados.faturamento.filter(f => f > 0);
const somaFaturamento = faturamento.reduce((acc, val) => acc + val, 0);
const mediaMensal = somaFaturamento / faturamento.length;
const menorFaturamento = Math.min(...faturamento);
const maiorFaturamento = Math.max(...faturamento);
const diasAcimaDaMedia = faturamento.filter(f => f > mediaMensal).length;

console.log(menorFaturamento);
console.log(maiorFaturamento);
console.log(diasAcimaDaMedia);

const faturamentoEstados = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

const faturamentoTotal = Object.values(faturamentoEstados).reduce((acc, val) => acc + val, 0);
const percentuais = Object.entries(faturamentoEstados).map(([estado, valor]) => {
    return { estado, percentual: ((valor / faturamentoTotal) * 100).toFixed(2) };
});

percentuais.forEach(({ estado, percentual }) => console.log(`${estado}: ${percentual}%`));


function inverterString(string) {
    let invertida = "";
    for (let i = string.length - 1; i >= 0; i--) {
        invertida += string[i];
    }
    return invertida;
}

const string = prompt("Informe uma string:");
console.log(inverterString(string));