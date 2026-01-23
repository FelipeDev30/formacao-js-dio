/* 

═══════════════════════════════════════════════════════════════════════════
    📚 GUIA DE ESTUDO: MANIPULAÇÃO DE LISTAS - FILTER
═══════════════════════════════════════════════════════════════════════════

    Descrição: Uso do método filter para filtrar listas em JavaScript
    
    📖 TÓPICOS ABORDADOS:
    1. O que é o método filter
    2. Sintaxe do filter
    3. Funções de callback
    4. Parâmetros da função de callback (elemento, índice, array)
    5. Exemplos práticos de uso do filter
    📌 FUNCIONALIDADES:
    • Filtrar itens com base em condições
    • Criar novas listas a partir de condições específicas
    • Trabalhar com arrays de objetos
    ⚠️ Este código roda no NAVEGADOR (usa console.log)
═══════════════════════════════════════════════════════════════════════════

O metódo filter é utilizado para criar um novo array contendo apenas os elementos que atendem a uma determinada condição especificada em uma função de callback.

Callback function: A função que é passada para o filter e é executada para cada elemento do array.
Ela pode receber até três parâmetros:

1. elemento: O elemento atual sendo processado no array.
2. índice (opcional): O índice do elemento atual.
3. array (opcional): O array original sobre o qual o filter está sendo chamado.

*/

console.log('\n═══ 🔍 USANDO FILTER PARA FILTRAR LISTAS ═══\n');
// Criação de uma lista de números
let numeros = [10, 25, 30, 45, 50, 65, 70, 85, 90];
console.log('Lista inicial de números:', numeros);

// Uso do filter para obter números maiores que 50
let numerosMaioresQue50 = numeros.filter((numero) => {
    return numero > 50;
});

console.log('\nNúmeros maiores que 50:', numerosMaioresQue50);

// Uso do filter para obter números pares
let numerosPares = numeros.filter((numero) => {
    return numero % 2 === 0;
});
console.log('\nNúmeros pares:', numerosPares);

// Exemplo de uso do filter com uma lista de objetos
let produtos = [
    { nome: 'Camiseta', preco: 20 },
    { nome: 'Calça', preco: 50 },
    { nome: 'Tênis', preco: 80 },
    { nome: 'Boné', preco: 15 }
];

console.log('\nLista inicial de produtos:', produtos);

let produtosAbaixoDe50 = produtos.filter((produto) => {
    return produto.preco < 50;
});
console.log('\nProdutos com preço abaixo de 50:', produtosAbaixoDe50);