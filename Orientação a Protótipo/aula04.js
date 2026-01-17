function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade 
}

Pessoa.prototype.falar = function() {
    console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} anos de idade!`);
}

const felipe = {
    genero: 'masculino',
}

Pessoa.call(felipe, 'Felipe', 31)
console.log(felipe)


