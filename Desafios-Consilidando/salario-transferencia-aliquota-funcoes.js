/* 
═══════════════════════════════════════════════════════════════════════════
    📚 DESAFIO: CÁLCULO DE SALÁRIO COM ALÍQUOTA
═══════════════════════════════════════════════════════════════════════════
    Descrição: Calcular salário líquido com imposto e benefícios (com funções)
    
    📖 ENUNCIADO:
    Calcule e imprima o salário a ser transferido para um funcionário.
    
    📌 FÓRMULA:
    Salário Líquido = Salário Bruto - Imposto + Benefícios
    
    📊 ALÍQUOTAS DE IMPOSTO:
    • R$ 0,00 a R$ 1.100,00     → 5%
    • R$ 1.100,01 a R$ 2.500,00 → 10%
    • Maior que R$ 2.500,00     → 15%
    
    📖 TÓPICOS ABORDADOS:
    • Funções auxiliares
    • Cálculo de porcentagens
    • Determinação de alíquotas por faixa
    • Estruturas condicionais encadeadas
    • Import/require de módulos
═══════════════════════════════════════════════════════════════════════════
*/

const {gets, print } = require("./auxiliares-salario")

const salarioBruto = gets();
const beneficios = gets();

function calcularPorcentagem(valor, percentual) {
    return valor * (percentual / 100)
}

function pegarAliquota(salario) {
    if(salario >= 0 && salario <= 1100){
        return 5;
    } else if(salario > 1100 && salario <= 2500) {
        return 10;
    } else {
        return 15;
    }
}

const aliquotaImposto = pegarAliquota(salarioBruto);
const valorImposto = calcularPorcentagem(salarioBruto, aliquotaImposto)

const valorATransferir = salarioBruto - valorImposto + beneficios

print(valorATransferir);