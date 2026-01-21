/* 
═══════════════════════════════════════════════════════════════════════════
    📚 GUIA DE ESTUDO: HOISTING EM JAVASCRIPT
═══════════════════════════════════════════════════════════════════════════
    Descrição: Comportamento de elevação de declarações no JavaScript
    
    📖 TÓPICOS ABORDADOS:
    1. O que é Hoisting
    2. Hoisting com var
    3. Hoisting com let e const (TDZ)
    4. Hoisting de Funções
    5. Hoisting de Expressões de Função
═══════════════════════════════════════════════════════════════════════════
*/

console.log('\n═══ 1️⃣ O QUE É HOISTING ═══\n');
/* 
📌 CONCEITO:
   - Hoisting = "içamento" ou "elevação"
   - Declarações de variáveis e funções são movidas para o topo do escopo
   - Acontece durante a fase de compilação (antes da execução)
   - IMPORTANTE: Apenas DECLARAÇÕES são hoisted, não as INICIALIZAÇÕES
*/

console.log('Hoisting = Declarações sobem, inicializações ficam no lugar');
console.log('✓ Comportamento automático do JavaScript\n');


console.log('\n═══ 2️⃣ HOISTING COM VAR ═══\n');
/* 
📌 CONCEITO:
   - var é hoisted com valor undefined
   - Pode ser acessada antes da declaração (retorna undefined)
   - NÃO gera erro, mas pode causar bugs
*/

console.log('Tentando acessar "num" antes da declaração:');
console.log('num =', num); // undefined (não dá erro!)

var num = 10;

console.log('Após declaração e atribuição:');
console.log('num =', num); // 10

console.log('\n✓ var é hoisted como undefined (evite usar var!)');


console.log('\n\n═══ 3️⃣ HOISTING COM LET E CONST (TDZ) ═══\n');
/* 
📌 CONCEITO:
   - let e const TAMBÉM são hoisted
   - MAS ficam na "Temporal Dead Zone" (TDZ)
   - TDZ = zona morta temporal (do início do escopo até a linha de declaração)
   - Acessar antes = ReferenceError
*/

console.log('--- Demonstração da TDZ ---');
// Se descomentar a linha abaixo, teremos ReferenceError:
// console.log(minhaVar); // ❌ ReferenceError: Cannot access 'minhaVar' before initialization

let minhaVar = 5;
console.log('minhaVar =', minhaVar); // ✅ 5

const minhaConst = 30;
console.log('minhaConst =', minhaConst); // ✅ 30

console.log('\n✓ let/const: use SEMPRE após a declaração');
console.log('✓ TDZ previne bugs e torna o código mais seguro\n');


console.log('\n═══ 4️⃣ HOISTING DE FUNÇÕES (Function Declaration) ═══\n');
/* 
📌 CONCEITO:
   - Function Declarations são TOTALMENTE hoisted
   - Declaração E corpo da função sobem
   - Podem ser chamadas ANTES da definição no código
*/

console.log('Chamando somar ANTES da declaração:');
console.log('somar(5, 10) =', somar(5, 10)); // ✅ 15 (funciona!)

// Declaração da função (está após a chamada, mas funciona!)
function somar(a, b) {
    return a + b;
}

console.log('Chamando DEPOIS da declaração:');
console.log('somar(20, 30) =', somar(20, 30)); // ✅ 50

console.log('\n✓ Function Declarations: podem ser chamadas em qualquer lugar\n');


console.log('\n═══ 5️⃣ EXPRESSÕES DE FUNÇÃO E ARROW FUNCTIONS ═══\n');
/* 
📌 CONCEITO:
   - NÃO são hoisted como funções completas
   - Seguem as regras da VARIÁVEL que as recebe
   - Com var: hoisted como undefined → TypeError ao chamar
   - Com let/const: TDZ → ReferenceError ao acessar
*/

console.log('--- Com var ---');
console.log('typeof funcaoVar:', typeof funcaoVar); // "undefined"
// funcaoVar(); // ❌ TypeError: funcaoVar is not a function

var funcaoVar = function() {
    return "Função com var";
};

console.log('Após declaração:', funcaoVar()); // ✅ "Função com var"


console.log('\n--- Com let/const ---');
// console.log(funcaoArrow); // ❌ ReferenceError (TDZ)

const funcaoArrow = () => "Arrow function";
console.log('funcaoArrow():', funcaoArrow()); // ✅ "Arrow function"

const funcaoConst = function() {
    return "Função const";
};
console.log('funcaoConst():', funcaoConst()); // ✅ "Função const"

console.log('\n✓ Function Expressions: declare ANTES de usar\n');


console.log('\n═══ 6️⃣ COMPARAÇÃO COMPLETA ═══\n');

console.log('┌─────────────────────────────────────────────────┐');
console.log('│ TIPO          │ HOISTED? │ VALOR INICIAL │ ERRO│');
console.log('├─────────────────────────────────────────────────┤');
console.log('│ var           │ SIM      │ undefined     │ NÃO │');
console.log('│ let           │ SIM      │ TDZ           │ SIM │');
console.log('│ const         │ SIM      │ TDZ           │ SIM │');
console.log('│ function      │ SIM      │ função        │ NÃO │');
console.log('│ func express  │ var      │ undefined     │ SIM │');
console.log('│ arrow func    │ let/const│ TDZ           │ SIM │');
console.log('└─────────────────────────────────────────────────┘\n');


/* 
═══════════════════════════════════════════════════════════════════════════
    📝 RESUMO PARA ESTUDO
═══════════════════════════════════════════════════════════════════════════

    ✅ HOISTING: Declarações sobem ao topo do escopo (compilação)
    
    ✅ VAR:
       • Hoisted com valor undefined
       • Acessível antes da declaração (retorna undefined)
       • ⚠️ Evite usar var!

    ✅ LET e CONST:
       • Hoisted mas em TDZ (Temporal Dead Zone)
       • ReferenceError se acessar antes da declaração
       • ✅ Use sempre let/const

    ✅ FUNCTION DECLARATION:
       • Totalmente hoisted (declaração + corpo)
       • Pode ser chamada antes da definição

    ✅ FUNCTION EXPRESSION e ARROW:
       • Seguem regras da variável (var/let/const)
       • Declare antes de usar

    💡 BOA PRÁTICA:
       • Use let/const ao invés de var
       • Declare variáveis no início do escopo
       • Declare funções antes de usar (exceto Function Declarations)

    🔧 Como executar: node guia-hoisting.js
═══════════════════════════════════════════════════════════════════════════
*/
