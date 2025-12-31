/*

Faça um programa que calcule a média de uma nota e imprima o resultado com base nas seguintes regras:

- Se a média for maior ou igual a 7, imprima "Aluno aprovado!"
- Se a média for menor que 7 e maior ou igual a 5, imprima "Aluno em recuperação!"
- Se a média for menor que 5, imprima "Aluno reprovado!" 

Exemplo:
Entrada: 5.5
Saída: Aluno em recuperação! Média: 5.50

*/


const { gets, print } = require("./auxiliares.js");

media = gets();


resultado = media >= 7 ? 'Aprovado': media >= 5 ? 'Recuperação': 'Reprovado';

print(`Aluno ${resultado} com média ${media}`);
