function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade 
}

Pessoa.prototype.falar = function() {
    console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} anos de idade!`);
}

const felipe = {
    genero: 'masculino'
}

const p1 = new Pessoa('Felipe', 31)
p1.falar();