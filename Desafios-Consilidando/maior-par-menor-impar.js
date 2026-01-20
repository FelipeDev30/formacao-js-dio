/* 

Faça um programa quee receba N (quantidade de números) e seus respectivos valores e imprima o maior número par e o menor número impar

Exemplo: 
    Entradas:
        5
        3
        4
        1
        10
        8
    Saida:
        Maior número par: 10
        Menor número impar: 1
*/

const {gets, print} = require('./auxiliares-par-impar')


const n = gets();

let maiorNumeroPar = null;   
let menorNumeroImpar = null; 

for (let i = 0; i < n; i++) {
  const numero = gets();
  if (Number.isNaN(numero)) continue; 

  if (numero % 2 === 0) {
    // par
    if (maiorNumeroPar === null || numero > maiorNumeroPar) {
      maiorNumeroPar = numero;
    }
  } else {
    // ímpar
    if (menorNumeroImpar === null || numero < menorNumeroImpar) {
      menorNumeroImpar = numero;
    }
  }
}

print(`O maior número par é ${maiorNumeroPar}`);
print(`O menor número impar é ${menorNumeroImpar}`);