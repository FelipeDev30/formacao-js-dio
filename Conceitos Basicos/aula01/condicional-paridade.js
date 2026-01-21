/* 
═══════════════════════════════════════════════════════════════════════════════
🔀 CONCEITO: ESTRUTURAS CONDICIONAIS - IF/ELSE 🎯
═══════════════════════════════════════════════════════════════════════════════

📌 O QUE SÃO CONDICIONAIS?
Condicionais são estruturas de controle que permitem executar diferentes blocos 
de código com base em certas condições. Elas são FUNDAMENTAIS na programação, 
pois possibilitam a tomada de decisões dentro do código.

📌 ESTRUTURAS CONDICIONAIS EM JAVASCRIPT:
- if: executa bloco se condição for verdadeira
- else if: testa outra condição se a anterior for falsa
- else: executa se todas as condições anteriores forem falsas
- switch: alternativa para múltiplas condições

═══════════════════════════════════════════════════════════════════════════════
*/

console.log('\n═══════════════════════════════════════════════════════');
console.log('🔢 VERIFICADOR DE PARIDADE (PAR/ÍMPAR)');
console.log('═══════════════════════════════════════════════════════\n');

/* 
📌 CONCEITO: OPERADOR MÓDULO (%)
- O operador % retorna o RESTO da divisão
- número % 2 === 0 → número é PAR
- número % 2 !== 0 → número é ÍMPAR
- Funciona porque números pares são divisíveis por 2 (resto 0)
*/

const eNumeroPar = (numero) => {
    if (numero % 2 == 0) {
        console.log(`✅ O número ${numero} é PAR.`);
    } else if (numero % 2 != 0) {
        console.log(`✅ O número ${numero} é ÍMPAR.`);
    } else {
        console.log(`❌ O valor ${numero} não é um número válido.`);
    }
}

console.log('📊 Testando números:');
eNumeroPar(5);
eNumeroPar(10);
eNumeroPar(7);
eNumeroPar(100);

console.log('\n═══════════════════════════════════════════════════════');
console.log('📖 EXEMPLO: VERSÃO MELHORADA COM VALIDAÇÃO');
console.log('═══════════════════════════════════════════════════════\n');

/* 
📌 CONCEITO: VALIDAÇÃO DE ENTRADA
- Verificar se o valor é realmente um número
- isNaN(): verifica se não é um número (is Not a Number)
- typeof: verifica o tipo do dado
- Validação previne erros e comportamentos inesperados
*/

function verificarParidade(valor) {
    // Validação: verifica se é um número válido
    if (isNaN(valor) || typeof valor !== 'number') {
        console.log(`❌ ERRO: "${valor}" não é um número válido!`);
        return;
    }
    
    // Verifica se é zero (caso especial)
    if (valor === 0) {
        console.log(`ℹ️ O número ${valor} é ZERO (considerado PAR).`);
        return;
    }
    
    // Verifica paridade
    if (valor % 2 === 0) {
        console.log(`✅ O número ${valor} é PAR.`);
    } else {
        console.log(`✅ O número ${valor} é ÍMPAR.`);
    }
}

console.log('📊 Testando com validação:');
verificarParidade(8);
verificarParidade(15);
verificarParidade(0);
verificarParidade('texto'); // Teste de erro
verificarParidade(null); // Teste de erro

console.log('\n═══════════════════════════════════════════════════════');
console.log('📖 EXEMPLO: ANÁLISE COMPLETA DO NÚMERO');
console.log('═══════════════════════════════════════════════════════\n');

/* 
📌 CONCEITO: CONDICIONAIS ANINHADAS
- Podemos colocar if dentro de if
- Permite análises mais complexas e detalhadas
- Importante: manter código legível e organizado
*/

function analisarNumero(numero) {
    console.log(`\n🔍 Analisando o número: ${numero}`);
    
    // Validação
    if (typeof numero !== 'number' || isNaN(numero)) {
        console.log('❌ Valor inválido!');
        return;
    }
    
    // Análise de sinal
    if (numero > 0) {
        console.log('  • Sinal: POSITIVO');
    } else if (numero < 0) {
        console.log('  • Sinal: NEGATIVO');
    } else {
        console.log('  • Sinal: NEUTRO (zero)');
    }
    
    // Análise de paridade
    if (numero % 2 === 0) {
        console.log('  • Paridade: PAR');
    } else {
        console.log('  • Paridade: ÍMPAR');
    }
    
    // Análise de magnitude
    if (Math.abs(numero) < 10) {
        console.log('  • Magnitude: Menor que 10');
    } else if (Math.abs(numero) < 100) {
        console.log('  • Magnitude: Entre 10 e 99');
    } else {
        console.log('  • Magnitude: 100 ou maior');
    }
}

analisarNumero(42);
analisarNumero(-15);
analisarNumero(0);
analisarNumero(150);

console.log('\n═══════════════════════════════════════════════════════');
console.log('📖 EXEMPLO: VERIFICAÇÃO EM LOTE');
console.log('═══════════════════════════════════════════════════════\n');

/* 
📌 CONCEITO: PROCESSAMENTO DE ARRAYS
- forEach: itera sobre cada elemento do array
- Útil para aplicar a mesma lógica em múltiplos valores
*/

const numeros = [1, 2, 3, 4, 5, 10, 15, 20, 25, 100];

console.log('📊 Analisando lista de números:', numeros);
console.log('\nResultados:');

numeros.forEach(num => {
    const tipo = num % 2 === 0 ? 'PAR' : 'ÍMPAR';
    console.log(`  ${num} → ${tipo}`);
});

console.log('\n═══════════════════════════════════════════════════════');
console.log('📖 EXEMPLO: OPERADOR TERNÁRIO');
console.log('═══════════════════════════════════════════════════════\n');

/* 
📌 CONCEITO: OPERADOR TERNÁRIO
- Forma concisa de escrever if/else
- Sintaxe: condição ? valorSeVerdadeiro : valorSeFalso
- Útil para atribuições simples e expressões curtas
*/

function verificarComTernario(numero) {
    const resultado = numero % 2 === 0 ? 'PAR' : 'ÍMPAR';
    console.log(`  ${numero} é ${resultado}`);
}

console.log('📊 Usando operador ternário:');
verificarComTernario(4);
verificarComTernario(7);
verificarComTernario(12);

console.log('\n═══════════════════════════════════════════════════════');
console.log('📖 COMPARAÇÃO: == vs ===');
console.log('═══════════════════════════════════════════════════════\n');

/* 
📌 CONCEITO: COMPARAÇÃO ESTRITA vs FLEXÍVEL
- == (duplo igual): compara valores com conversão de tipo
- === (triplo igual): compara valores E tipos (recomendado!)
- Sempre prefira === para evitar comportamentos inesperados
*/

console.log('Comparando 2 e "2":');
console.log('  2 == "2" →', 2 == "2");   // true (converte string para número)
console.log('  2 === "2" →', 2 === "2"); // false (tipos diferentes)

console.log('\nComparando 0 e false:');
console.log('  0 == false →', 0 == false);   // true (conversão de tipo)
console.log('  0 === false →', 0 === false); // false (tipos diferentes)

console.log('\n✅ Sempre prefira === para comparações mais seguras!');

console.log('\n═══════════════════════════════════════════════════════');
console.log('📋 RESUMO - CONCEITOS APRENDIDOS');
console.log('═══════════════════════════════════════════════════════\n');

console.log(`
✅ Estruturas Condicionais:
   └─ if: executa código se condição for verdadeira
   └─ else if: testa outra condição
   └─ else: executa se todas anteriores forem falsas

✅ Operador Módulo (%):
   └─ Retorna o resto da divisão
   └─ número % 2 === 0 → PAR
   └─ número % 2 !== 0 → ÍMPAR

✅ Validação de Dados:
   └─ isNaN(): verifica se não é número
   └─ typeof: verifica o tipo do dado
   └─ Previne erros e bugs

✅ Operador Ternário:
   └─ condição ? verdadeiro : falso
   └─ Forma concisa de if/else

✅ Comparações:
   └─ == : compara com conversão de tipo
   └─ === : compara valor E tipo (preferível)

═══════════════════════════════════════════════════════
🎯 Pratique criando suas próprias condicionais!
═══════════════════════════════════════════════════════
`);

