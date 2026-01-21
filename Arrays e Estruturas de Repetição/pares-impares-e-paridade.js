/* 
═══════════════════════════════════════════════════════════════════════════
    📚 GUIA DE ESTUDO: NÚMEROS PARES, ÍMPARES E PARIDADE
═══════════════════════════════════════════════════════════════════════════
    Descrição: Exercícios sobre verificação e listagem de paridade
    
    📖 TÓPICOS ABORDADOS:
    1. Operador módulo (%) para verificar paridade
    2. Estruturas de repetição (for)
    3. Funções com parâmetros
    4. Operador ternário
    
    📌 EXERCÍCIOS:
    • Listar números pares de 0 até N
    • Listar números ímpares de 0 até N
    • Verificar se um número é par ou ímpar
    
    ⚠️ Este código roda no NAVEGADOR (usa prompt/alert)
═══════════════════════════════════════════════════════════════════════════
*/

console.log('\n═══ 🔢 EXERCÍCIO 1: NÚMEROS PARES ═══\n');

/* 
Crie um programa que receba um numero inteiro e mostre todos os numeros pares de 0 ate esse numero.
*/

const par = parseInt(prompt("Digite um número inteiro:"));

function pares() {
    alert(`Números pares de 0 até ${par}:`);

    for (let i = 0; i <= par; i += 2) {
        alert(i);
    }
}

pares();

console.log('\n═══ 🔢 EXERCÍCIO 2: NÚMEROS ÍMPARES ═══\n');

/* 
Crie um programa que receba um numero inteiro e mostre todos os numeros ímpares de 0 ate esse numero.
*/

const impares = parseInt(prompt("Digite um número inteiro:"));

function impar() {
    alert(`Números ímpares de 0 até ${impares}:`);
    for (let j = 1; j <= impares; j += 2) {
        alert(j);
    }
}

impar();

console.log('\n═══ ⚖️ EXERCÍCIO 3: VERIFICAR PARIDADE ═══\n');

/* 
Crie um programa que receba um numero inteiro e diga se ele é par ou ímpar.
*/

function parOuImpar(numero) {
    if (numero % 2 === 0 ? 'par' : 'ímpar');
    return numero % 2 === 0 ? 'par' : 'ímpar';
}

const numeroUsuario = parseInt(prompt("Digite um número inteiro para verificar se é par ou ímpar:"));
const resultado = parOuImpar(numeroUsuario);
alert(`O número ${numeroUsuario} é ${resultado}.`);



