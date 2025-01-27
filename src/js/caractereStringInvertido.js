function inverterString(string) {
    let invertida = "";
    for (let i = string.length - 1; i >= 0; i--) {
        invertida += string[i];
    }
    return invertida;
}

const string = prompt("Informe uma string:");
console.log(inverterString(string));