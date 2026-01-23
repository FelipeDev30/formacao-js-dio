/*

═══════════════════════════════════════════════════════════════════════════
    📚 GUIA DE ESTUDO: MANIPULAÇÃO DE LISTAS - JOIN
═══════════════════════════════════════════════════════════════════════════

    Descrição: Uso do método join para concatenar elementos de listas em JavaScript
    
    📖 TÓPICOS ABORDADOS:
    1. O que é o método join
    2. Sintaxe do join
    3. Separadores personalizados
    4. Exemplos práticos de uso do join
    📌 FUNCIONALIDADES:
    • Concatenar elementos de uma lista em uma string
    • Usar diferentes separadores
    ⚠️ Este código roda no NAVEGADOR (usa console.log)
═══════════════════════════════════════════════════════════════════════════
O método join é utilizado para concatenar todos os elementos de um array em uma única string, com a opção de especificar um separador entre os elementos.

*/
console.log('\n═══ 🔗 USANDO JOIN PARA CONCATENAR ELEMENTOS DE LISTAS ═══\n');
// Criação de uma lista de frutas
let frutas = ['Maçã', 'Banana', 'Laranja', 'Uva'];
console.log('Lista inicial de frutas:', frutas);

// Uso do join para concatenar os elementos da lista em uma string, separados por vírgula
let listaFrutas = frutas.join(', ');
console.log('Frutas concatenadas (separadas por vírgula):', listaFrutas);
console.log('\n═══ ➖ USANDO JOIN COM OUTRO SEPARADOR ═══\n');

// Uso do join para concatenar os elementos da lista em uma string, separados por hífen
let listaFrutasHifen = frutas.join(' - ');
console.log('Frutas concatenadas (separadas por hífen):', listaFrutasHifen);
console.log('\n═══ 🔢 USANDO JOIN PARA LISTAS DE NÚMEROS ═══\n');

// Criação de uma lista de números
let numeros = [1, 2, 3, 4, 5];
console.log('Lista inicial de números:', numeros);

// Uso do join para concatenar os números em uma string, separados por espaço
let listaNumeros = numeros.join(' ');
console.log('Números concatenados (separados por espaço):', listaNumeros);
console.log('\n═══ 📜 USANDO JOIN PARA LISTAS DE PALAVRAS ═══\n')

// Criação de uma lista de palavras;
let palavras = ['Olá', 'mundo', 'isto', 'é', 'JavaScript'];
console.log('Lista inicial de palavras:', palavras);

// Uso do join para concatenar as palavras em uma frase, separadas por espaço
let frase = palavras.join(' ');
console.log('Frase concatenada:', frase);