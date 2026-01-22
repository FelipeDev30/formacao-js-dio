/* 
═══════════════════════════════════════════════════════════════════════════
    📚 GUIA DE ESTUDO: FIRST-CLASS FUNCTIONS E HOF
═══════════════════════════════════════════════════════════════════════════
    Descrição: Conceitos fundamentais de programação funcional em JavaScript
    
    📖 FIRST-CLASS FUNCTIONS (FUNÇÕES DE PRIMEIRA CLASSE)
    
    Em JavaScript, funções são tratadas como valores, isso significa que:
    
    ✓ Podem ser atribuídas a variáveis
    ✓ Podem ser passadas como argumento para outras funções
    ✓ Podem ser retornadas por funções
    ✓ Podem ser armazenadas em estruturas como arrays e objetos
    
    💡 CONCEITO-CHAVE:
    Uma função é apenas um tipo de dado, como um número ou uma string.
    
    ═══════════════════════════════════════════════════════════════════════
    
    📖 HIGHER-ORDER FUNCTIONS (FUNÇÕES DE ORDEM SUPERIOR)
    
    Uma Higher-Order Function (HOF) é uma função que:
    
    ✓ Recebe outra função como argumento, OU
    ✓ Retorna uma função como resultado, OU
    ✓ Ambos
    
    💡 POR QUE EXISTEM?
    Elas existem porque JavaScript possui First-Class Functions!
    
    🔧 EXEMPLOS COMUNS NO DIA A DIA:
    • .map()    - Transforma elementos de um array
    • .filter() - Filtra elementos de um array
    • .reduce() - Reduz array a um único valor
    
    ═══════════════════════════════════════════════════════════════════════
    
    🔗 COMO ESSES CONCEITOS SE CONECTAM?
    
    Higher-Order Functions só existem porque as funções são First-Class!
    
    Se funções não fossem tratadas como valores, não seria possível:
    • Passá-las como argumentos
    • Retorná-las de outras funções
    • Armazená-las em variáveis/estruturas
    
    ✨ RESUMO:
    • First-Class Functions → Conceito fundamental
    • Higher-Order Functions → Aplicação prática do conceito
    
    📊 TABELA COMPARATIVA:
    
    ┌─────────────────────────┬───────────────────────────────────────────┬─────────────────────────┐
    │ Conceito                │ Definição                                 │ Exemplo                 │
    ├─────────────────────────┼───────────────────────────────────────────┼─────────────────────────┤
    │ First-Class Functions   │ Funções tratadas como valores             │ Atribuir função a var   │
    │ Higher-Order Functions  │ Função que recebe/retorna outra função    │ .map(), .filter()       │
    └─────────────────────────┴───────────────────────────────────────────┴─────────────────────────┘
    
═══════════════════════════════════════════════════════════════════════════
*/

console.log('\n═══════════════════════════════════════════════════════');
console.log('🎯 FIRST-CLASS FUNCTIONS - EXEMPLOS PRÁTICOS');
console.log('═══════════════════════════════════════════════════════\n');

// Exemplo prático de First-Class Function
function saudacao(nome) {
    return `Olá, ${nome}!`;
}

const cumprimentar = saudacao;
console.log(cumprimentar("Maria")); // Olá, Maria!

// Exemplo prático de Higher-Order Function
function aplicarOperacao(arr, operacao) {
    const resultado = [];
    for (let i = 0; i < arr.length; i++) {
        resultado.push(operacao(arr[i]));
    }
    return resultado;
}

const numeros = [1, 2, 3, 4];
const dobrar = (x) => x * 2;
const numerosDobrados = aplicarOperacao(numeros, dobrar);
console.log(numerosDobrados); // [2, 4, 6, 8]

// Exemplo de Higher-Order Function retornando outra função
function criarMultiplicador(fator) {
    return function (numero) {
        return numero * fator;
    };
}

const multiplicarPor5 = criarMultiplicador(5);
console.log(multiplicarPor5(10)); // 50