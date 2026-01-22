/* 

═══════════════════════════════════════════════════════════════════════════
    📚 GUIA DE ESTUDO: MANIPULAÇÃO DE LISTAS
═══════════════════════════════════════════════════════════════════════════
    Descrição: Introdução à manipulação de listas (arrays) em JavaScript
    
    📖 TÓPICOS ABORDADOS:
    1. Criação de listas
    2. Acesso a elementos
    3. Adição e remoção de elementos
    4. Iteração sobre listas
    5. Métodos comuns de listas (push, pop, shift, unshift, splice, slice)
    6. Uso de loops para manipulação
    📌 FUNCIONALIDADES:
    • Criar uma lista de itens
    • Adicionar e remover itens
    • Iterar sobre a lista para exibir itens
    • Modificar itens existentes
    ⚠️ Este código roda no NAVEGADOR (usa console.log)
═══════════════════════════════════════════════════════════════════════════


*/

console.log('\n═══ 📋 MANIPULAÇÃO DE LISTAS EM JAVASCRIPT ═══\n')

// 1. Criação de uma lista
let frutas = ['Maçã', 'Banana', 'Laranja'];
console.log('Lista inicial de frutas:', frutas);

// 2. Acesso a elementos
console.log('Primeira fruta:', frutas[0]);
console.log('Segunda fruta:', frutas[1]);

// 3. Adição de elementos
frutas.push('Manga');
console.log('Após adicionar Manga:', frutas);
frutas.unshift('Morango');
console.log('Após adicionar Morango no início:', frutas);

// 4. Remoção de elementos
let frutaRemovida = frutas.pop();
console.log('Após remover a última fruta (' + frutaRemovida + '):', frutas);
frutaRemovida = frutas.shift();
console.log('Após remover a primeira fruta (' + frutaRemovida + '):', frutas);

// 5. Iteração sobre a lista
console.log('Iterando sobre a lista de frutas:');
frutas.forEach((fruta, index) => {
    console.log(`${index + 1}: ${fruta}`);
});

// 6. Modificação de elementos existentes
frutas[1] = 'Abacaxi';
console.log('Após modificar a segunda fruta para Abacaxi:', frutas);

// 7. Uso de splice para remover e adicionar elementos
frutas.splice(1, 1, 'Uva', 'Pera');
console.log('Após usar splice para modificar a lista:', frutas);

// 8. Uso de slice para criar uma nova lista
let citricas = frutas.slice(0, 2);
console.log('Nova lista com frutas cítricas (slice):', citricas);
console.log('\n═══ ✅ FIM DA MANIPULAÇÃO DE LISTAS ═══\n');