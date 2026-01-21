/* 
═══════════════════════════════════════════════════════════════════════════
    📚 GUIA DE ESTUDO: TIPOS DE DADOS E COERÇÃO
═══════════════════════════════════════════════════════════════════════════
    Descrição: Tipos primitivos e conversão de tipos em JavaScript
    
    📖 TÓPICOS ABORDADOS:
    1. Tipagem Dinâmica do JavaScript
    2. Tipos Primitivos (Boolean, Null, Undefined, Number, String, Symbol)
    3. Wrappers de Objetos
    4. Coerção de Tipos (Implícita e Explícita)
═══════════════════════════════════════════════════════════════════════════
*/

console.log('\n═══ 1️⃣ JAVASCRIPT É FRACAMENTE TIPADA ═══\n');
/* 
📌 CONCEITO:
   - Não precisamos declarar o tipo da variável
   - O tipo é determinado automaticamente durante a execução
   - Variáveis podem mudar de tipo (reatribuição)
*/

let x = 10;      // x é Number
console.log('x =', x, '| Tipo:', typeof x);
x = "texto";     // agora x é String
console.log('x =', x, '| Tipo:', typeof x);
console.log('✓ JavaScript permite mudança dinâmica de tipos\n')


console.log('\n═══ 2️⃣ TIPOS DE DADOS PRIMITIVOS ═══\n');
/* 
📌 CONCEITO:
   - São os tipos básicos que NÃO são objetos
   - Imutáveis (não podem ser alterados, apenas substituídos)
   - JavaScript tem 7 tipos primitivos
*/

// 1. BOOLEAN - Valores lógicos
let isActive = true;
let hasPermission = false;
console.log('Boolean:', isActive, typeof isActive);

// 2. NULL - Ausência intencional de valor
let user = null; // Significa "não tem usuário"
console.log('Null:', user, typeof user); // Bug histórico: typeof null = "object"

// 3. UNDEFINED - Variável declarada mas sem valor
let name;
console.log('Undefined:', name, typeof name);

// 4. NUMBER - Números (inteiros e decimais)
let age = 29;
let price = 19.99;
let infinity = Infinity;
let notANumber = NaN;
console.log('Number:', age, price, typeof age);

// 5. STRING - Texto
let message = "Olá, mundo!";
let templateString = `Idade: ${age}`;
console.log('String:', message, typeof message);

// 6. SYMBOL - Identificador único
let id1 = Symbol("id");
let id2 = Symbol("id");
console.log('Symbol:', id1 === id2); // false - cada Symbol é único

// 7. BIGINT - Números inteiros muito grandes (ES2020)
let bigNumber = 9007199254740991n;
console.log('BigInt:', bigNumber, typeof bigNumber);
console.log('✓ Total de 7 tipos primitivos em JavaScript\n')


console.log('\n═══ 3️⃣ WRAPPERS DE OBJETOS ═══\n');
/* 
📌 CONCEITO:
   - Objetos que "envolvem" tipos primitivos
   - Permitem usar métodos em valores primitivos
   - JavaScript faz conversão automática (autoboxing)
*/

let text = "Olá";
console.log('Primitivo:', text, typeof text);
console.log('Com método:', text.toUpperCase()); // Wrapper String temporário

let num = 42.567;
console.log('Número:', num.toFixed(2)); // Wrapper Number temporário

let bool = true;
console.log('Boolean:', bool.toString()); // Wrapper Boolean temporário

// Diferença entre primitivo e objeto wrapper
let primitivoStr = "hello";
let objetoStr = new String("hello");
console.log('\nPrimitivo:', typeof primitivoStr);  // "string"
console.log('Objeto:', typeof objetoStr);          // "object"
console.log('São iguais?', primitivoStr == objetoStr);   // true (coerção)
console.log('São idênticos?', primitivoStr === objetoStr); // false (tipos diferentes)
console.log('✓ Use primitivos, não wrappers (new String, new Number, etc.)\n');


console.log('\n═══ 4️⃣ COERÇÃO DE TIPOS ═══\n');
/* 
📌 CONCEITO:
   - Conversão automática (implícita) ou manual (explícita) de tipos
   - JavaScript tenta converter tipos para completar operações
   - Pode gerar resultados inesperados - cuidado!
*/

// COERÇÃO IMPLÍCITA (automática)
console.log('--- Coerção Implícita ---');
console.log('"5" + 1 =', "5" + 1);        // "51" (number → string)
console.log('"5" - 1 =', "5" - 1);        // 4 (string → number)
console.log('"5" * "2" =', "5" * "2");   // 10 (ambos → number)
console.log('true + 1 =', true + 1);       // 2 (true → 1)
console.log('false + 1 =', false + 1);     // 1 (false → 0)
console.log('"5" == 5:', "5" == 5);       // true (coerção no ==)
console.log('"5" === 5:', "5" === 5);     // false (=== não faz coerção)

// COERÇÃO EXPLÍCITA (manual)
console.log('\n--- Coerção Explícita ---');
let strNum = "123";
console.log('String "123" → Number:', Number(strNum), typeof Number(strNum));
console.log('Number 456 → String:', String(456), typeof String(456));
console.log('Boolean(1):', Boolean(1));           // true
console.log('Boolean(0):', Boolean(0));           // false
console.log('Boolean(""):', Boolean(""));       // false
console.log('Boolean("texto"):', Boolean("texto")); // true

// VALORES FALSY (se tornam false em contexto booleano)
console.log('\n--- Valores Falsy (8 valores) ---');
const falsyValues = [false, 0, -0, 0n, "", null, undefined, NaN];
falsyValues.forEach(val => {
    console.log(`Boolean(${typeof val === 'string' ? '""' : val}):`, Boolean(val));
});

console.log('✓ Tudo que não é falsy é truthy (verdadeiro)');

// NÚMEROS ESPECIAIS
console.log('\n--- Números Especiais ---');
console.log('+Infinity:', +Infinity, typeof Infinity);
console.log('-Infinity:', -Infinity);
console.log('NaN (Not a Number):', NaN, typeof NaN);
console.log('0 / 0 =', 0 / 0);        // NaN
console.log('10 / 0 =', 10 / 0);      // Infinity
console.log('NaN === NaN:', NaN === NaN); // false (único valor que não é igual a si mesmo!)
console.log('isNaN("abc"):', isNaN("abc")); // true
console.log('Number.isNaN("abc"):', Number.isNaN("abc")); // false (mais rigoroso)

console.log('\n💡 Number é Double Precision 64-bit binary format IEEE 754\n');

/* 
═══════════════════════════════════════════════════════════════════════════
    📝 RESUMO PARA ESTUDO
═══════════════════════════════════════════════════════════════════════════

    ✅ TIPOS PRIMITIVOS:
       • boolean → true/false
       • null → ausência intencional
       • undefined → não definido
       • number → números (incluindo NaN, Infinity)
       • string → texto
       • symbol → identificador único
       • bigint → inteiros muito grandes

    ✅ WRAPPERS: String, Number, Boolean (permitem métodos em primitivos)
    
    ✅ COERÇÃO:
       • Implícita: automática ("5" + 1 → "51")
       • Explícita: manual (Number("5") → 5)
       • Use === ao invés de == para evitar coerção inesperada
       
    ✅ VALORES FALSY (8): false, 0, -0, 0n, "", null, undefined, NaN

    💡 DICA: Execute com: node tipos-de-dados-e-coercao.js
═══════════════════════════════════════════════════════════════════════════
*/