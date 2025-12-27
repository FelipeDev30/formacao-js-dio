/* 

1 - Crie uma classe para representar um carro.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por quilômetro rodado.
Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.

2 - Crie uma classe para representar uma pessoa.
Cada pessoa possui um nome e uma carteira de motorista (booleano).
Crie um método que permita a pessoa dirigir um carro, este método deve receber um carro e a quantidade de quilômetros a serem percorridos.
Caso a pessoa possua carteira de motorista, o método deve retornar o valor gasto para realizar o percurso, caso contrário deve retornar uma mensagem dizendo que a pessoa não pode dirigir.

*/

class Carro {
    constructor(marca, cor, gastoMedioPorKM) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKM = gastoMedioPorKM;
    }

    calcularGastoPercurso(km, precoCombustivel) {
        return km * this.gastoMedioPorKM * precoCombustivel;
    }
}

class Pessoa {
    constructor(nome, carteiraMotorista) {
        this.nome = nome;
        this.carteiraMotorista = carteiraMotorista;
    }

    dirigir(carro, km) {
        if (this.carteiraMotorista) {
            return `O senhor(a) ${this.nome} dirigiu o carro ${carro.marca} por ${km} km e gastou R$ ${carro.calcularGastoPercurso(km, 5.0)}.`;
        } else {
            return `O senhor(a) ${this.nome} não pode dirigir.`;
        }
    }
}

// Exemplo de uso:
const meuCarro = new Carro("Toyota", "Vermelho", 0.1);
const pessoaComCNH = new Pessoa("João", true);
const pessoaSemCNH = new Pessoa("Maria", false);
console.log(pessoaComCNH.dirigir(meuCarro, 150)); // Valor gasto para percorrer 100 km
console.log(pessoaSemCNH.dirigir(meuCarro, 100)); // A pessoa não pode dirigir.
