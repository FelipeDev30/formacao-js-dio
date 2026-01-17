class Pessoa {
    constructor(nome, idade) {
        nome = prompt('Informe seu nome: ')
        idade = Number(prompt('Informe sua idade: '))
        this.nome = nome
        this.idade = idade
    }

    falar() {
        alert(`Seu nome é: ${pessoa1.nome} e você tem ${pessoa1.idade} anos de idade!`)
    }
}


/* 

Pessoa.prototype.falar = function () {
    function Pessoa() {
        this.nome = prompt('Informe seu nome: ');
        this.idade = Number(prompt('Informe sua idade: '));
    }
    alert(`Seu nome é: ${pessoa1.nome} e você tem ${pessoa1.idade} anos de idade!`)
}

*/

const pessoa1 = new Pessoa()

pessoa1.falar();
