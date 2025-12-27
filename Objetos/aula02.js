class Pessoa {
    constructor(nome, idade, profissao) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.profissao}.`);
    }
}

const pessoa1 = new Pessoa("Ana", 25, "desenvolvedora");
pessoa1.apresentar(); // Olá, meu nome é Ana, tenho 25 anos e sou desenvolvedora.

const pessoa2 = new Pessoa("Bruno", 30, "designer");
pessoa2.apresentar(); // Olá, meu nome é Bruno, tenho 30 anos e sou designer.