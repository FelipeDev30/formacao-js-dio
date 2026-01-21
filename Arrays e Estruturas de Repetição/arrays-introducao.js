/* 
═══════════════════════════════════════════════════════════════════════════
    📚 GUIA DE ESTUDO: MÉTODOS BÁSICOS DE ARRAYS
═══════════════════════════════════════════════════════════════════════════
    Descrição: Manipulação e iteração de Arrays em JavaScript
    
    📖 TÓPICOS ABORDADOS:
    1. Adicionar elementos (push)
    2. Remover elementos (shift, pop)
    3. Iteração com for tradicional
    4. Iteração com for...of
═══════════════════════════════════════════════════════════════════════════
*/

console.log('\n═══ 📦 MANIPULAÇÃO DE ARRAYS ═══\n');

// Adicionando um elemento ao final do array
let frutas = ['uva', 'pera', 'maçã', 'banana'];
frutas.push('laranja');
console.log('Após push:', frutas); // Saída: ['uva', 'pera', 'maçã', 'banana', 'laranja']

// Removendo o primeiro elemento do array
frutas.shift();
console.log('Após shift:', frutas); // Saída: ['pera', 'maçã', 'banana', 'laranja']

frutas.pop();
console.log('Após pop:', frutas); // Saída: ['pera', 'maçã', 'banana']

console.log('\n═══ 🔄 ITERAÇÃO DE ARRAYS ═══\n');

// Iterando sobre os elementos do array
console.log('For tradicional:');
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

// Saída:
// pera
// maçã
// banana

console.log('\n---\n');

// Usando for...of para iterar sobre o array
console.log('For...of:');
for (let fruta of frutas) {
    console.log(fruta);
}

