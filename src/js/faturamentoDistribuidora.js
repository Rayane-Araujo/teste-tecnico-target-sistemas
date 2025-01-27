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
