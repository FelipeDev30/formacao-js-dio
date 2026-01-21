/* 
═══════════════════════════════════════════════════════════════════════════
    📚 GUIA DE ESTUDO: CLASSES E CÁLCULOS DE CUSTO
═══════════════════════════════════════════════════════════════════════════
    Descrição: Calculadora de custo de percurso para carros
    
    📖 EXERCÍCIO:
    1 - Crie uma classe para representar um carro.
    Os carros possuem uma marca, uma cor e um gasto médio de combustível
    por quilômetro rodado.
    Crie um método que dado a quantidade de quilômetros e o preço do
    combustível nos dê o valor gasto em reais para realizar este percurso.
    
    📖 TÓPICOS ABORDADOS:
    • Classes e propriedades
    • Métodos de instância
    • Cálculos com tipos de combustível
    • Estruturas condicionais
    • Retorno de valores
    
    💡 VERSÃO AVANÇADA (COMENTADA):
    Inclui classe Pessoa e método dirigir para interação entre objetos
═══════════════════════════════════════════════════════════════════════════
*/

console.log('\n═══ 🚗 CALCULADORA DE CUSTO DE PERCURSO ═══\n');

/* 
═══ 💼 VERSÃO ROBUSTA - COMENTADA ═══

class Carro {
    constructor(marca, cor, tipoCombustivel, gastoMedioPorKM) {
        this.marca = marca;
        this.cor = cor;
        this.tipoCombustivel = tipoCombustivel;
        this.gastoMedioPorKM = gastoMedioPorKM;
    }

    calcularGastoPercurso(distancia, precoCombustivel) {
        return distancia * this.gastoMedioPorKM * precoCombustivel;
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

const uno = new Carro('Fiat', 'Prata', 'gasolina', 0.12);
const maria = new Pessoa('Maria', true);
console.log(maria.dirigir(uno, 70));
*/

console.log('═══ 🔧 VERSÃO IMPLEMENTADA ═══\n');

class Carro {
    marca;
    cor;
    gastoMedioPorKM;

    constructor(marca, cor,tipoCombustivel, gastoMedioPorKM) {
        this.marca = marca;
        this.cor = cor;
        this.tipoCombustivel = tipoCombustivel;
        this.gastoMedioPorKM = gastoMedioPorKM;
    }

    calcularGastoPercurso(distancia, tipoCombustivel, precoCombustivel) {
        if (tipoCombustivel === 'gasolina') {
            precoCombustivel = 5.79;
            return distancia * this.gastoMedioPorKM * precoCombustivel;
        } else if (tipoCombustivel === 'etanol') {
            precoCombustivel = 4.09;
            return distancia * this.gastoMedioPorKM * precoCombustivel;
        } else if (tipoCombustivel === 'diesel') {
            precoCombustivel = 3.99;
            return distancia * (this.gastoMedioPorKM * 1.3) * precoCombustivel;
        } else {
            return 'Tipo de combustível inválido.';
        }
    }  
}

fiat = new Carro('Fiat', 'Prata', 'etanol', 0.12);
console.log('Custo do percurso:', fiat.calcularGastoPercurso(100, 'etanol'));
