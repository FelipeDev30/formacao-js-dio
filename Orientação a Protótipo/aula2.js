function Pessoa(nome, idade) {
    this.nome =  prompt('Informe seu nome: ')
    this.idade = Number(prompt('Informe sua idade: '))
}

Pessoa.prototype.falar = function() {
    alert(`Seu nome é: ${pessoa1.nome} e você tem ${pessoa1.idade} anos de idade!`)
}

const pessoa1 = new Pessoa()

pessoa1.falar();
