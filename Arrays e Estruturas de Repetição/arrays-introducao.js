/* 
═══════════════════════════════════════════════════════════════════════════════
📚 INTRODUÇÃO A ARRAYS E MÉTODOS BÁSICOS 🎯
═══════════════════════════════════════════════════════════════════════════════

📌 O QUE SÃO ARRAYS?
Arrays são estruturas de dados que armazenam uma COLEÇÃO de elementos.
Eles permitem que você armazene múltiplos valores em uma única variável,
facilitando a organização e manipulação dos dados.

📌 CONCEITOS IMPORTANTES:
- Array é uma lista ordenada de elementos
- Cada elemento tem um ÍNDICE (posição) começando do 0
- Arrays podem conter diferentes tipos de dados
- São dinâmicos: podem crescer ou diminuir

═══════════════════════════════════════════════════════════════════════════════
*/

console.log('\n═══════════════════════════════════════════════════════');
console.log('📖 SEÇÃO 1: CRIAÇÃO E ACESSO A ARRAYS');
console.log('═══════════════════════════════════════════════════════\n');

/* 
📌 CONCEITO: DECLARAÇÃO DE ARRAY
- Sintaxe: [elemento1, elemento2, elemento3]
- Índices começam em 0
- array[0] acessa o primeiro elemento
- array.length retorna o número de elementos
*/

let frutas = ['uva', 'pera', 'maçã', 'banana'];

console.log('Array de frutas:', frutas);
console.log('Primeiro elemento (índice 0):', frutas[0]);
console.log('Terceiro elemento (índice 2):', frutas[2]);
console.log('Número de elementos:', frutas.length);
console.log('Último elemento:', frutas[frutas.length - 1]);

console.log('\n═══════════════════════════════════════════════════════');
console.log('📖 SEÇÃO 2: MÉTODOS push() e pop()');
console.log('═══════════════════════════════════════════════════════\n');

/* 
📌 CONCEITO: ADICIONAR E REMOVER ELEMENTOS
- push(): adiciona elemento no FINAL do array
- pop(): remove elemento do FINAL do array
- Ambos modificam o array original
*/

console.log('Array inicial:', frutas);

// Adicionando elemento com push()
frutas.push('laranja');
console.log('\nApós push("laranja"):', frutas);
console.log('  ✅ "laranja" foi adicionada no final');

console.log('\n═══════════════════════════════════════════════════════');
console.log('📖 SEÇÃO 3: MÉTODOS shift() e unshift()');
console.log('═══════════════════════════════════════════════════════\n');

/* 
📌 CONCEITO: MANIPULAÇÃO NO INÍCIO DO ARRAY
- shift(): remove o PRIMEIRO elemento
- unshift(): adiciona elemento no INÍCIO
*/

console.log('Array antes do shift():', frutas);

// Removendo primeiro elemento com shift()
frutas.shift();
console.log('Após shift():', frutas);
console.log('  ✅ "uva" foi removida do início\n');

// Removendo último elemento com pop()
frutas.pop();
console.log('Após pop():', frutas);
console.log('  ✅ "laranja" foi removida do final');

console.log('\n═══════════════════════════════════════════════════════');
console.log('📖 SEÇÃO 4: ITERAÇÃO COM for');
console.log('═══════════════════════════════════════════════════════\n');

/* 
📌 CONCEITO: LOOP for TRADICIONAL
- for (inicialização; condição; incremento)
- Acessa cada elemento pelo índice
- Útil quando você precisa do índice
*/

console.log('Iterando com for tradicional:');
for (let i = 0; i < frutas.length; i++) {
    console.log(`  Índice ${i}: ${frutas[i]}`);
}

console.log('\n═══════════════════════════════════════════════════════');
console.log('📖 SEÇÃO 5: ITERAÇÃO COM for...of');
console.log('═══════════════════════════════════════════════════════\n');

/* 
📌 CONCEITO: LOOP for...of
- Sintaxe mais simples e moderna
- Itera diretamente sobre os valores
- Não fornece o índice diretamente
- Mais legível quando o índice não é necessário
*/

console.log('Iterando com for...of:');
for (let fruta of frutas) {
    console.log('  🍎', fruta);
}

console.log('\n═══════════════════════════════════════════════════════');
console.log('📖 SEÇÃO 6: OUTROS MÉTODOS ÚTEIS');
console.log('═══════════════════════════════════════════════════════\n');

/* 
📌 CONCEITO: MÉTODOS ADICIONAIS DE ARRAYS
- forEach(): executa função para cada elemento
- map(): cria novo array transformado
- filter(): cria novo array filtrado
- find(): encontra um elemento
- includes(): verifica se contém elemento
*/

console.log('Array atual:', frutas);

// forEach: itera executando uma função
console.log('\nUsando forEach():');
frutas.forEach((fruta, index) => {
    console.log(`  ${index + 1}º fruta: ${fruta}`);
});

// includes: verifica se existe
console.log('\nUsando includes():');
console.log('  Tem "maçã"?', frutas.includes('maçã'));
console.log('  Tem "melancia"?', frutas.includes('melancia'));

// indexOf: encontra a posição
console.log('\nUsando indexOf():');
console.log('  Posição de "banana":', frutas.indexOf('banana'));
console.log('  Posição de "kiwi":', frutas.indexOf('kiwi'), '(-1 significa não encontrado)');

console.log('\n═══════════════════════════════════════════════════════');
console.log('📖 SEÇÃO 7: EXEMPLO PRÁTICO');
console.log('═══════════════════════════════════════════════════════\n');

/* 
📌 CONCEITO: APLICAÇÃO PRÁTICA
Criar uma lista de compras e manipulá-la
*/

const listaCompras = [];

// Adicionando itens
listaCompras.push('Arroz');
listaCompras.push('Feijão');
listaCompras.push('Macarrão');
listaCompras.push('Café');

console.log('📝 Lista de compras criada:');
listaCompras.forEach((item, i) => {
    console.log(`  ${i + 1}. ${item}`);
});

// Removendo último item
const itemRemovido = listaCompras.pop();
console.log(`\n❌ Item removido: ${itemRemovido}`);

console.log('\n📝 Lista atualizada:');
listaCompras.forEach((item, i) => {
    console.log(`  ${i + 1}. ${item}`);
});

console.log('\n═══════════════════════════════════════════════════════');
console.log('📋 RESUMO - CONCEITOS APRENDIDOS');
console.log('═══════════════════════════════════════════════════════\n');

console.log(`
✅ Arrays Básicos:
   └─ Declaração: [elemento1, elemento2]
   └─ Acesso: array[indice]
   └─ Tamanho: array.length
   └─ Índices começam em 0

✅ Métodos de Manipulação:
   └─ push(item): adiciona no final
   └─ pop(): remove do final
   └─ shift(): remove do início
   └─ unshift(item): adiciona no início

✅ Métodos de Iteração:
   └─ for tradicional: com índice
   └─ for...of: mais simples
   └─ forEach(): com função callback

✅ Métodos de Busca:
   └─ includes(item): verifica presença
   └─ indexOf(item): encontra posição
   └─ find(): busca elemento

✅ Quando usar cada loop:
   └─ for: quando precisa do índice
   └─ for...of: quando só precisa do valor
   └─ forEach: quando precisa índice E valor

═══════════════════════════════════════════════════════
🎯 Continue praticando com arrays!
═══════════════════════════════════════════════════════
`);

