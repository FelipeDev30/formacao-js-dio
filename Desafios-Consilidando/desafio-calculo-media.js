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


if(isNaN(media) || media < 0 || media > 10){
    print(`Valor inserido invalido.`);
} else {
    if(media >= 7)
        print(`Aluno aprovado comm média ${media}`);
    else if(media >= 5) {
        print(`Aluno em recuperação com média ${media}`);
    } else {
        print(`Aluno reprovado com média ${media}`);
    }
}



