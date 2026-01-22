/*  

═══════════════════════════════════════════════════════════════════════════
    📚 GUIA DE ESTUDO: MANIPULAÇÃO DE LISTAS - FOREACH
═══════════════════════════════════════════════════════════════════════════

    Descrição: Uso do método forEach para iterar sobre listas em JavaScript
    
    📖 TÓPICOS ABORDADOS:
    1. O que é o método forEach
    2. Sintaxe do forEach
    3. Funções de callback
    4. Parâmetros da função de callback (elemento, índice, array)
    5. Exemplos práticos de uso do forEach
    📌 FUNCIONALIDADES:
    • Iterar sobre uma lista de itens
    • Exibir cada item com seu índice
    • Modificar itens durante a iteração
    ⚠️ Este código roda no NAVEGADOR (usa console.log)
═══════════════════════════════════════════════════════════════════════════

O metódo forEach é uma forma eficiente e legível de iterar sobre arrays em JavaScript, permitindo executar uma função para cada elemento da lista.

Callback function: A função que é passada para o forEach e é executada para cada elemento do array.

Ela pode receber até três parâmetros:

1. elemento: O elemento atual sendo processado no array.
2. índice (opcional): O índice do elemento atual.
3. array (opcional): O array original sobre o qual o forEach está sendo chamado.

*/

console.log('\n═══ 🔄 USANDO forEach PARA ITERAR SOBRE LISTAS ═══\n');

// Criação de uma lista de tarefas
let tarefas = ['Estudar JavaScript', 'Fazer exercícios', 'Ler documentação', 'Praticar projetos'];
console.log('Lista inicial de tarefas:', tarefas);

// Uso do forEach para exibir cada tarefa com seu índice
console.log('\nExibindo tarefas com índices:');
tarefas.forEach((tarefa, indice) => {
    console.log(`${indice + 1}. ${tarefa}`);
});

// Modificação de tarefas durante a iteração
console.log('\nModificando tarefas para adicionar " - Concluído":');
tarefas.forEach((tarefa, indice, array) => {
    array[indice] = tarefa + ' - Concluído';
});
console.log('Lista de tarefas após modificação:', tarefas);

// Exemplo de uso do forEach com uma lista de números
let numeros = [1, 2, 3, 4, 5];
console.log('\nLista inicial de números:', numeros);
let soma = 0;
numeros.forEach((numero) => {
    soma += numero;
});
console.log('Soma dos números na lista:', soma);

// Exemplo de uso do forEach para criar uma nova lista
let numerosMultiplicados = [];
numeros.forEach((numero) => {
    numerosMultiplicados.push(numero * 2);
});
console.log('Números multiplicados por 2:', numerosMultiplicados);

// Comparação entre forEach e for tradicional
// Demonstra como o forEach funciona internamente e sua equivalência com o loop for
console.log('\n═══ 🔄 COMPARANDO forEach COM for TRADICIONAL ═══\n');

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Definição de uma função callback que será usada em ambos os exemplos
const cb = (value, i, listRef) => {
    console.log(value, i);
}

// Usando forEach com a função callback
console.log('Usando forEach:');
lista.forEach(cb);

// Implementação manual do comportamento do forEach usando for tradicional
console.log('\nImplementação simples do forEach usando for:\n');

for(let i = 0; i < lista.length; i++) {
    const element = lista[i];
    cb(element, i, lista);
}

console.log('\n═══ ✅ FIM DA MANIPULAÇÃO DE LISTAS ═══\n');
