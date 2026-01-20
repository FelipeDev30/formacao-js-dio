/* 

Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura)).
Também devem ter a capacidade de dizer se estão acima do peso (IMC >= 30).
Instancie uma pessoa e peça para o usuário inserir os dados dela.

*/

class Pessoa {
    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    ClassificarIMC(imc) {
        if (imc < 18.5) {
            return `${this.nome}, seu IMC é ${imc.toFixed(2)} e você está abaixo do peso.`;
        }
        if (imc >= 18.5 && imc < 25) {
            return `${this.nome}, seu IMC é ${imc.toFixed(2)} e você está no peso ideal.`;
        }
        if (imc >= 25 && imc < 30) {
            return `${this.nome}, seu IMC é ${imc.toFixed(2)} e você está acima do peso.`;
        }
        if (imc >= 30 && imc < 40) {
            return `${this.nome}, seu IMC é ${imc.toFixed(2)} e você está obeso.`;
        }
        if (imc >= 40) {
            return `${this.nome}, seu IMC é ${imc.toFixed(2)} e você está com obesidade mórbida.`;
        }
    }

    calcularIMC() {
        const imc = this.peso / (Math.pow(this.altura, 2));
        return this.ClassificarIMC(imc);
    }

    main() {
        this.peso = Number(prompt('Digite seu peso em kg: '));
        this.altura = Number(prompt('Digite sua altura em metros: '));
        this.nome = prompt('Digite seu nome: ');
    }
}

const novaPessoa = new Pessoa();
novaPessoa.main();
alert(novaPessoa.calcularIMC());