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