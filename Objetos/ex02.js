/* 

Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura)).
Também devem ter a capacidade de dizer se estão acima do peso (IMC >= 30).
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor do seu IMC e dizer se está acima do peso.

*/

class Pessoa {
    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC(imc) {
        imc = this.peso / (Math.pow(this.altura, 2));
        if(imc < 18.5 ) {
            return `${this.nome}, seu IMC é ${imc.toFixed(2)} e você está abaixo do peso.`;
        }
        if(imc >= 18.5 && imc < 25) {
            return `${this.nome}, seu IMC é ${imc.toFixed(2)} e você está no peso ideal.`;
        }
        if(imc >= 25 && imc < 30) {
            return `${this.nome}, seu IMC é ${imc.toFixed(2)} e você está acima do peso.`;
        }
        if(imc >= 30 && imc < 40) {
            return `${this.nome}, seu IMC é ${imc.toFixed(2)} e você está obeso.`;
        }
        if(imc >= 40) {
            return `${this.nome}, seu IMC é ${imc.toFixed(2)} e você está com obesidade mórbida.`;
        }
    }
}

const jose = new Pessoa('José', 70, 1.75);
console.log(jose.calcularIMC());

const felipe = new Pessoa('Felipe', 92, 1.60);
console.log(felipe.calcularIMC());