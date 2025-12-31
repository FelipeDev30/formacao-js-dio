/* 

Uma sala contem 5 alunos e para cada aluno foi sorteado um número de 1 a 100. Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.

Dados de entrada:

5
50
10
98
23

Saída esperada:

O maior número sorteado é 98

*/

const { gets, print } = require('./functions-auxiliares.js');

let maiorNumero = 0;

for(let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    if(numeroSorteado > maiorNumero) {
        maiorNumero = numeroSorteado;
    }
}

print(`O maior número sorteado é ${maiorNumero}`);