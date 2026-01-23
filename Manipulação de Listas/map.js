/* 

═══════════════════════════════════════════════════════════════════════════
    📚 GUIA DE ESTUDO: MANIPULAÇÃO DE LISTAS - MAP
═══════════════════════════════════════════════════════════════════════════

    Descrição: Uso do método map para transformar listas em JavaScript
    
    📖 TÓPICOS ABORDADOS:
    1. O que é o método map
    2. Sintaxe do map
    3. Funções de callback
    4. Parâmetros da função de callback (elemento, índice, array)
    5. Exemplos práticos de uso do map
    📌 FUNCIONALIDADES:
    • Transformar uma lista em outra lista
    • Aplicar uma função a cada item da lista
    • Criar novas listas baseadas em condições
    ⚠️ Este código roda no NAVEGADOR (usa console.log)
═══════════════════════════════════════════════════════════════════════════
O método map é usado para criar uma nova array com os resultados da chamada de uma função para cada elemento da array original.

Callback function: A função que é passada para o map e é executada para cada elemento do array.
Ela pode receber até três parâmetros:

1. elemento: O elemento atual sendo processado no array.
2. índice (opcional): O índice do elemento atual.
3. array (opcional): O array original sobre o qual o map está sendo chamado.

*/

console.log('\n═══ 🔄 USANDO map PARA TRANSFORMAR LISTAS ═══\n');

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

// Criação de uma lista de pessoas
let pessoas = [
    new Pessoa('Ana', 25),
    new Pessoa('Bruno', 30),
    new Pessoa('Carla', 22),
    new Pessoa('Daniel', 28)
];

console.log('Lista inicial de pessoas:', pessoas);

// Uso do map para criar uma lista de nomes
let nomes = pessoas.map((pessoa) => pessoa.nome);
console.log('\nLista de nomes extraída das pessoas:', nomes);

// Uso do map para criar uma lista de idades incrementadas em 1
let idadesIncrementadas = pessoas.map((pessoa) => pessoa.idade + 1);
console.log('\nLista de idades incrementadas em 1:', idadesIncrementadas);

// Uso do map para criar uma lista de descrições das pessoas
let descricoes = pessoas.map((pessoa) => `${pessoa.nome} tem ${pessoa.idade} anos.`);
console.log('\nLista de descrições das pessoas:', descricoes);

// Exemplo de uso do map com uma lista de números
let numeros = [1, 2, 3, 4, 5];
console.log('\nLista inicial de números:', numeros);
let quadrados = numeros.map((numero) => numero * numero);
console.log('Lista de quadrados dos números:', quadrados);

// Exemplo de uso do map para criar uma nova lista com base em condições
let numerosParidade = numeros.map((numero) => {
    return numero % 2 === 0 ? 'Par' : 'Ímpar';
});
console.log('Lista de paridade dos números:', numerosParidade);