/* 
═══════════════════════════════════════════════════════════════════════════
    📚 GUIA DE ESTUDO: ESTRUTURAS CONDICIONAIS
═══════════════════════════════════════════════════════════════════════════
    Descrição: Introdução às estruturas condicionais em JavaScript
    
    📖 O QUE SÃO CONDICIONAIS?
    
    Condicionais são estruturas de controle que permitem executar diferentes
    blocos de código com base em certas condições. Elas são fundamentais na
    programação, pois possibilitam a tomada de decisões dentro do código.
    
    📌 TIPOS DE CONDICIONAIS:
    • if      → Executa se condição for verdadeira
    • else if → Testa outra condição se a anterior for falsa
    • else    → Executa se todas as condições anteriores forem falsas
    • switch  → Compara um valor com múltiplos casos
    
    📖 EXEMPLO PRÁTICO: VERIFICADOR DE PARIDADE
═══════════════════════════════════════════════════════════════════════════
*/

console.log('\n═══ ⚖️ VERIFICADOR DE PARIDADE ═══\n');

const  eNumeroPar = (numero) => {
    if (numero % 2 == 0) {
        console.log(`O número ${numero} é par.`);
    } else if (numero % 2 != 0) {
        console.log(`O número ${numero} é impar.`);
    } else {
        console.log(`O valor ${numero} não é um número valido.`);
    }
}

eNumeroPar(5);

