/* 

O que é Object Destructuring?

É uma forma de extrair dados de arrays ou objetos em variáveis distintas, 
de forma mais simples e rápida.

*/

const { print, gets } = require('./funcoes-auxiliares-gets-print.js');


print( `O numero dentro da gets é: ${gets()}`);

/* Object Destructuring */

const Pessoa = {
    nome: "Felipe",
    idade: 25,
    cidade: "São Paulo",
    cpf: "123.456.789-00"
}

const { nome, idade, cidade, cpf } = Pessoa;

print(nome);
print(idade);
print(cidade);
print(cpf);