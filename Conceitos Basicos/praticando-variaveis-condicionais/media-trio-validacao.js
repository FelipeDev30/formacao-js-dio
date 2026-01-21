let n1 = parseFloat(prompt("Digite a primeira nota:"));
let n2 = parseFloat(prompt("Digite a segunda nota:"));
let n3 = parseFloat(prompt("Digite a terceira nota:"));
notas = [n1, n2, n3];

for (let i = 0; i < notas.length; i++) {
    if (isNaN(notas[i]) || notas[i] < 0 || notas[i] > 10) {
        alert("Nota inválida! Por favor, insira uma nota entre 0 e 10.");
        throw new Error("Nota inválida");
    }
}

let media = (notas[0] + notas[1] + notas[2]) / 3;

if (isNaN(media)) {
    alert("Por favor, insira valores numéricos válidos para as notas.");
} else if (media < 5 ) {
    alert(`Média: ${media.toFixed(2)} - Reprovado`);
} else if (media >= 5 && media < 7) {
    alert(`Média: ${media.toFixed(2)} - Recuperação`);
}
else {
    alert(`Média: ${media.toFixed(2)} - Aprovado`);
}


