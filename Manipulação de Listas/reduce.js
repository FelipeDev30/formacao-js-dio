/* 

═══════════════════════════════════════════════════════════════════════════
    📚 GUIA DE ESTUDO: MANIPULAÇÃO DE LISTAS - REDUCE
═══════════════════════════════════════════════════════════════════════════
    Descrição: Uso do método reduce para agregar valores em listas em JavaScript
    
    📖 TÓPICOS ABORDADOS:
    1. O que é o método reduce
    2. Sintaxe do reduce
    3. Funções de callback
    4. Parâmetros da função de callback (acumulador, valorAtual, índice, array)
    5. Valor inicial do acumulador
    6. Exemplos práticos de uso do reduce
    📌 FUNCIONALIDADES:
    • Somar valores em uma lista
    • Concatenar strings
    • Encontrar valores máximos ou mínimos
    ⚠️ Este código roda no NAVEGADOR (usa console.log)
═══════════════════════════════════════════════════════════════════════════
O método reduce é uma poderosa ferramenta para agregar valores em arrays, permitindo transformar uma lista em um único valor através de uma função de callback.

Callback function: A função que é passada para o reduce e é executada para cada elemento do array.
Ela pode receber até quatro parâmetros:

1. acumulador: O valor acumulado retornado na última invocação da função de callback, ou o valor inicial, se fornecido.
2. valorAtual: O elemento atual sendo processado no array.
3. índice (opcional): O índice do elemento atual.
4. array (opcional): O array original sobre o qual o reduce está sendo chamado.

*/
console.log('\n═══ ➕ USANDO REDUCE PARA SOMAR VALORES EM LISTAS ═══\n');

// Criação de uma lista de números
let numeros = [10, 20, 30, 40, 50];
console.log('Lista inicial de números:', numeros);
// Uso do reduce para somar todos os números na lista
let soma = numeros.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual;
}, 0);
console.log('Soma dos números na lista:', soma);

console.log('\n═══ 🔤 USANDO REDUCE PARA CONCATENAR STRINGS ═══\n');
// Criação de uma lista de palavras
let palavras = ['JavaScript', 'é', 'uma', 'linguagem', 'incrível'];
console.log('Lista inicial de palavras:', palavras);
// Uso do reduce para concatenar todas as palavras em uma frase
let frase = palavras.reduce((acumulador, valorAtual) => {
    return acumulador + ' ' + valorAtual;
});
console.log('Frase concatenada:', frase.trim());

console.log('\n═══ 📊 USANDO REDUCE PARA ENCONTRAR O MÁXIMO ═══\n');
// Criação de uma lista de números
let valores = [5, 12, 8, 21, 3, 18];
console.log('Lista inicial de valores:', valores);
// Uso do reduce para encontrar o valor máximo na lista
let maximo = valores.reduce((acumulador, valorAtual) => {
    return (valorAtual > acumulador) ? valorAtual : acumulador;
});
console.log('Valor máximo na lista:', maximo);