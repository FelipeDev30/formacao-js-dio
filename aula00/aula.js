/* 

Como conversar com o terminal usando JaavaScript

*/


let saudacao = (nome, idade) => {
    idade = prompt("Digite sua idade: ");
    nome = prompt("Digite seu nome: ");
    alert(`Olá, ${nome} você tem ${idade} anos de idade! Seja bem-vindo(a)!`);
}

saudacao();
