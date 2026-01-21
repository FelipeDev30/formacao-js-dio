/* 
═══════════════════════════════════════════════════════════════════════════
    📚 GUIA DE ESTUDO: INTRODUÇÃO A ARRAYS
═══════════════════════════════════════════════════════════════════════════
    Descrição: Conceitos básicos de Arrays em JavaScript
    
    📖 TÓPICOS ABORDADOS:
    1. O que são Arrays
    2. Declaração de Arrays
    3. Acesso a elementos
    4. Propriedade length
═══════════════════════════════════════════════════════════════════════════
*/

console.log('\n═══ 📦 O QUE SÃO ARRAYS? ═══\n');
/* 
📌 CONCEITO:
   Arrays são estruturas de dados que armazenam uma COLEÇÃO de elementos.
   
   ✓ Permitem armazenar múltiplos valores em uma única variável
   ✓ Os elementos são ordenados e acessados por índices (começando em 0)
   ✓ Podem conter qualquer tipo de dado (números, strings, objetos, etc.)
   ✓ O tamanho é dinâmico (pode crescer ou diminuir)
   
   ANALOGIA: Imagine um armário com gavetas numeradas:
   - Gaveta 0: primeira posição
   - Gaveta 1: segunda posição
   - Gaveta 2: terceira posição... e assim por diante
*/

console.log('\n═══ 1️⃣ DECLARAÇÃO DE UM ARRAY ═══\n');
/* 
📌 SINTAXE:
   let nomeArray = [elemento1, elemento2, elemento3];
   
   Os elementos ficam entre COLCHETES [], separados por VÍRGULAS
*/

// Declaração de um array com frutas
let frutas = ['uva', 'pera', 'maçã', 'banana'];
console.log('Array completo:', frutas);
console.log('Tipo da variável:', typeof frutas); // object
console.log('É um array?', Array.isArray(frutas)); // true


console.log('\n═══ 2️⃣ ACESSANDO ELEMENTOS DO ARRAY ═══\n');
/* 
📌 CONCEITO:
   - Usamos ÍNDICES (números) para acessar elementos
   - O índice começa em 0 (ZERO)
   - Sintaxe: nomeArray[indice]
   
   IMPORTANTE: 
   Índice 0 = primeiro elemento
   Índice 1 = segundo elemento
   Índice 2 = terceiro elemento... e assim por diante
*/

console.log('Primeiro elemento [0]:', frutas[0]);  // uva
console.log('Segundo elemento [1]:', frutas[1]);   // pera
console.log('Terceiro elemento [2]:', frutas[2]);  // maçã
console.log('Quarto elemento [3]:', frutas[3]);    // banana

// Tentando acessar índice que não existe
console.log('Índice inexistente [10]:', frutas[10]); // undefined


console.log('\n═══ 3️⃣ PROPRIEDADE LENGTH ═══\n');
/* 
📌 CONCEITO:
   - length retorna a QUANTIDADE de elementos no array
   - É uma propriedade, não um método (sem parênteses)
   - Muito útil para loops e verificações
*/

console.log('Quantidade de elementos:', frutas.length); // 4
console.log('Último elemento (usando length):', frutas[frutas.length - 1]); // banana

// Por que frutas.length - 1?
// Porque os índices começam em 0, então:
// - Array com 4 elementos tem índices: 0, 1, 2, 3
// - O último índice é sempre: tamanho - 1


console.log('\n═══ 4️⃣ ARRAYS COM DIFERENTES TIPOS ═══\n');
/* 
📌 CONCEITO:
   JavaScript permite arrays com tipos mistos
   (embora não seja uma boa prática em muitos casos)
*/

let misto = [42, 'texto', true, null, { nome: 'João' }];
console.log('Array misto:', misto);
console.log('Número:', misto[0]);
console.log('String:', misto[1]);
console.log('Boolean:', misto[2]);
console.log('Null:', misto[3]);
console.log('Objeto:', misto[4]);


/* 
═══════════════════════════════════════════════════════════════════════════
    📝 RESUMO PARA ESTUDO
═══════════════════════════════════════════════════════════════════════════
    
    ✅ Arrays armazenam múltiplos valores em uma variável
    ✅ Índices começam em 0 (zero-based indexing)
    ✅ Acesso: nomeArray[indice]
    ✅ Tamanho: nomeArray.length
    ✅ Arrays são objetos especiais em JavaScript
    
    💡 PRÓXIMOS PASSOS:
    - Aprenda a adicionar elementos (push, unshift)
    - Aprenda a remover elementos (pop, shift)
    - Aprenda a iterar sobre arrays (for, forEach)
    
    🔧 Como executar: node "Arrays e Estruturas de Repetição/pagamento-descontos.js"
═══════════════════════════════════════════════════════════════════════════
*/

