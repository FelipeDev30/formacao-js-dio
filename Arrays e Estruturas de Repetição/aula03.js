let notas = [];

notas.push(6);
notas.push(8);
notas.push(9);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}

let media = soma / notas.length;

console.log('Média das notas:', media); // Saída: Média das notas: 7

for (let indexi = 0; indexi < notas.length; indexi++) {
    const element = notas[indexi];
    console.log(`Nota ${indexi + 1}:`, element);
}

console.log('---');