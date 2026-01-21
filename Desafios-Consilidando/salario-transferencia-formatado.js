/* 
═══════════════════════════════════════════════════════════════════════════
    📚 DESAFIO: CÁLCULO DE SALÁRIO FORMATADO
═══════════════════════════════════════════════════════════════════════════
    Descrição: Calcular salário líquido com formatação monetária
    
    📖 ENUNCIADO:
    Faça um programa que calcule e imprima o salário a ser transferido
    para um funcionário.
    
    Para realizar o cálculo receba:
    • Valor bruto do salário
    • Adicional dos benefícios
    
    📌 FÓRMULA:
    Salário a transferir = Salário Bruto - Imposto + Benefícios
    
    📊 ALÍQUOTAS DE IMPOSTO:
    • R$ 0,00 a R$ 1.100,00     → 5,00%
    • R$ 1.100,01 a R$ 2.500,00 → 10,00%
    • Maior que R$ 2.500,00     → 15,00%
    
    📌 EXEMPLO:
    Entrada:
        2000
        250
    Saída:
        2050.00
    
    📖 TÓPICOS ABORDADOS:
    • Formatação de valores monetários (Intl.NumberFormat)
    • Cálculo de impostos por faixas
    • Funções para organização de código
    • Estruturas condicionais
    • Import/require de módulos
═══════════════════════════════════════════════════════════════════════════
*/

const {gets, print} = require('./auxiliares-salario')

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
    if (salarioBruto >= 0 && salarioBruto <= 1100) {
      valorTransferencia = salarioComBeneficio - (salarioBruto * 0.05);
    } else if (salarioBruto > 1100 && salarioBruto <= 2500) { 
      valorTransferencia = salarioComBeneficio - (salarioBruto * 0.10);
    } else {
      valorTransferencia = salarioComBeneficio - (salarioBruto * 0.15);
    }
}

calcularSalario();
print(`O salário que deve ser transferido para o funcionário è ${formatador.format(valorTransferencia)}`); 