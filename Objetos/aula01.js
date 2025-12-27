const pessoa = {
    nome: "Felipe",
    idade: 31,
    profissao: "Desenvolvedor Full Stack",

    descrever() {
        return `Meu nome é ${this.nome}, tenho ${this.idade} anos e trabalho como ${this.profissao}.`;
    }
}

pessoa['nome'] = prompt("Digite o novo nome:");
pessoa['idade'] = Number(prompt("Digite a nova idade:"));
pessoa['profissao'] = prompt("Digite a nova profissão:");
alert(pessoa.descrever());
console.log(pessoa.descrever());

