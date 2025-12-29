// Adicionando um elemento ao final do array
let frutas = ['uva', 'pera', 'maçã', 'banana'];
frutas.push('laranja');
console.log(frutas); // Saída: ['uva', 'pera', 'maçã', 'banana', 'laranja']

// Removendo o primeiro elemento do array
frutas.shift();
console.log(frutas); // Saída: ['pera', 'maçã', 'banana', 'laranja']

frutas.pop();
console.log(frutas); // Saída: ['pera', 'maçã', 'banana']



// Iterando sobre os elementos do array
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

// Saída:
// pera
// maçã
// banana

console.log('---');

// Usando for...of para iterar sobre o array
for (let fruta of frutas) {
    console.log(fruta);
}

