/* 

Faça um programa que calcule e imprima o salário a ser transferido para um funcionário.

Para realizar o calculo receba o valor bruto do salário e o adicional dos beneficios

O salário a ser transferido e calculado da seguinte maneira:

valor bruto do salário - percentual de imposto mediante a faixa salarial + adicional dos beneficios

Para calcular o percentual de imposto segue as aliquotas:

De R$: 0.00 a R$ 1100.00 = 5.00%
De R$: 1100.01 a R$: 2500.00 = 10.00%
Maior que R$: 2500.00 = 15.00%

Entrada:

2000
250

Saida:

2050.00

*/

const {gets, print} = require('./auxiliares03')

const formatador = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 2 
});


const salarioBruto = gets(); 
const beneficios = gets();
const salarioComBeneficio = salarioBruto + beneficios;

let valorTransferencia;

function calcularSalario() {
    if (salarioBruto <= 1100) {
      valorTransferencia = salarioComBeneficio - (salarioBruto * 0.05);
    } else if (salarioBruto > 1100 && salarioBruto <= 2500) { 
      valorTransferencia = salarioComBeneficio - (salarioBruto * 0.10);
    } else {
      valorTransferencia = salarioComBeneficio - (salarioBruto * 0.15);
    }
}

calcularSalario();
print(`O salário que deve ser transferido para o funcionário è ${formatador.format(valorTransferencia)}`); 