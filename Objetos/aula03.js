class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2025 - idade;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e nasci em ${this.anoDeNascimento}.`);
    }
}

function compararPessoas(pessoaA, pessoaB) {
    if (pessoaA.idade > pessoaB.idade) {
        console.log(`${pessoaA.nome} é mais velho(a) que ${pessoaB.nome}.`);
    } else if (pessoaA.idade < pessoaB.idade) {
        console.log(`${pessoaB.nome} é mais velho(a) que ${pessoaA.nome}.`);
    } else {
        console.log(`${pessoaA.nome} e ${pessoaB.nome} têm a mesma idade.`);
    }
}

const pessoa1 = new Pessoa("Carlos", 28);
const pessoa2 = new Pessoa("Diana", 32);

pessoa1.apresentar(); // Olá, meu nome é Carlos, tenho 28 anos e nasci em 1997.
pessoa2.apresentar(); // Olá, meu nome é Diana, tenho 32 anos e nasci em 1993.

compararPessoas(pessoa1, pessoa2); // Diana é mais velho(a) que Carlos.

const pessoa3 = new Pessoa("Eduardo", 28);
compararPessoas(pessoa1, pessoa3); // Carlos e Eduardo têm a mesma idade.