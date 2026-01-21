/* 
═══════════════════════════════════════════════════════════════════════════
    📚 DESAFIO: CLASSIFICAÇÃO DE MÉDIA ESCOLAR
═══════════════════════════════════════════════════════════════════════════
    Descrição: Calcular e classificar média de um aluno
    
    📖 ENUNCIADO:
    Faça um programa que calcule a média de uma nota e imprima o resultado
    com base nas seguintes regras:
    
    📌 CRITÉRIOS DE APROVAÇÃO:
    • Se a média for >= 7  → "Aluno aprovado!"
    • Se a média for >= 5  → "Aluno em recuperação!"
    • Se a média for < 5   → "Aluno reprovado!"
    
    📖 EXEMPLO:
    Entrada: 5.5
    Saída: Aluno em recuperação! Média: 5.50
    
    📖 TÓPICOS ABORDADOS:
    • Estruturas condicionais (if/else if/else)
    • Validação de entrada (isNaN, intervalos)
    • Import/require de módulos
    • Template strings
    • Comparações numéricas
═══════════════════════════════════════════════════════════════════════════
*/

const {gets, print} = require('./auxiliares-media')

media = gets();


if(isNaN(media) || media < 0 || media > 10){
    print(`Valor inserido invalido.`);
} else {
    if(media >= 7)
        print(`Aluno aprovado comm média ${media}`);
    else if(media >= 5) {
        print(`Aluno em recuperação com média ${media}`);
    } else {
        print(`Aluno reprovado com média ${media}`);
    }
}



