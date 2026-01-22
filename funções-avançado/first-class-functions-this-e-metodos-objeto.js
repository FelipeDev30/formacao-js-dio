/* 
═══════════════════════════════════════════════════════════════════════════
    📚 GUIA DE ESTUDO: FIRST-CLASS FUNCTIONS E HOF
═══════════════════════════════════════════════════════════════════════════
    Descrição: Conceitos fundamentais de programação funcional em JavaScript
    
    📖 FIRST-CLASS FUNCTIONS (FUNÇÕES DE PRIMEIRA CLASSE)
    
    Em JavaScript, funções são tratadas como valores, isso significa que:
    
    ✓ Podem ser atribuídas a variáveis
    ✓ Podem ser passadas como argumento para outras funções
    ✓ Podem ser retornadas por funções
    ✓ Podem ser armazenadas em estruturas como arrays e objetos
    
    💡 CONCEITO-CHAVE:
    Uma função é apenas um tipo de dado, como um número ou uma string.
    
    ═══════════════════════════════════════════════════════════════════════
    
    📖 HIGHER-ORDER FUNCTIONS (FUNÇÕES DE ORDEM SUPERIOR)
    
    Uma Higher-Order Function (HOF) é uma função que:
    
    ✓ Recebe outra função como argumento, OU
    ✓ Retorna uma função como resultado, OU
    ✓ Ambos
    
    💡 POR QUE EXISTEM?
    Elas existem porque JavaScript possui First-Class Functions!
    
    🔧 EXEMPLOS COMUNS NO DIA A DIA:
    • .map()    - Transforma elementos de um array
    • .filter() - Filtra elementos de um array
    • .reduce() - Reduz array a um único valor
    
    ═══════════════════════════════════════════════════════════════════════
    
    🔗 COMO ESSES CONCEITOS SE CONECTAM?
    
    Higher-Order Functions só existem porque as funções são First-Class!
    
    Se funções não fossem tratadas como valores, não seria possível:
    • Passá-las como argumentos
    • Retorná-las de outras funções
    • Armazená-las em variáveis/estruturas
    
    ✨ RESUMO:
    • First-Class Functions → Conceito fundamental
    • Higher-Order Functions → Aplicação prática do conceito
    
    📊 TABELA COMPARATIVA:
    
    ┌─────────────────────────┬───────────────────────────────────────────┬─────────────────────────┐
    │ Conceito                │ Definição                                 │ Exemplo                 │
    ├─────────────────────────┼───────────────────────────────────────────┼─────────────────────────┤
    │ First-Class Functions   │ Funções tratadas como valores             │ Atribuir função a var   │
    │ Higher-Order Functions  │ Função que recebe/retorna outra função    │ .map(), .filter()       │
    └─────────────────────────┴───────────────────────────────────────────┴─────────────────────────┘
    
═══════════════════════════════════════════════════════════════════════════
*/

console.log('\n═══════════════════════════════════════════════════════');
console.log('🎯 FIRST-CLASS FUNCTIONS - EXEMPLOS PRÁTICOS');
console.log('═══════════════════════════════════════════════════════\n');

console.log('\n═══════════════════════════════════════════════════════');
console.log('🎯 FIRST-CLASS FUNCTIONS - EXEMPLOS PRÁTICOS');
console.log('═══════════════════════════════════════════════════════\n');

/* 
📌 EXEMPLO 1: Atribuindo função a uma variável
   Demonstra que funções podem ser tratadas como qualquer outro valor
*/

function saudacao(nome) {
    return `Olá, ${nome}!`;
}

// Atribuindo a função a uma variável
const cumprimentar = saudacao;

console.log('1️⃣ Função atribuída a variável:');
console.log(cumprimentar("Maria")); // Olá, Maria!
console.log(cumprimentar("João"));  // Olá, João!

/* 
📝 OBSERVAÇÃO:
   Note que não usamos saudacao() com parênteses ao atribuir.
   Usamos apenas saudacao para referenciar a função em si.
*/

console.log('\n═══════════════════════════════════════════════════════');
console.log('🔧 HIGHER-ORDER FUNCTIONS - RECEBENDO FUNÇÕES');
console.log('═══════════════════════════════════════════════════════\n');

/* 
📌 EXEMPLO 2: Função que recebe outra função como argumento
   Esta é uma Higher-Order Function (HOF) clássica
*/

function aplicarOperacao(arr, operacao) {
    const resultado = [];
    for (let i = 0; i < arr.length; i++) {
        resultado.push(operacao(arr[i]));
    }
    return resultado;
}

const numeros = [1, 2, 3, 4];
const dobrar = (x) => x * 2;
const triplicar = (x) => x * 3;

console.log('2️⃣ HOF aplicando diferentes operações:');
console.log('Array original:', numeros);

const numerosDobrados = aplicarOperacao(numeros, dobrar);
console.log('Dobrado:', numerosDobrados); // [2, 4, 6, 8]

const numerosTriplicados = aplicarOperacao(numeros, triplicar);
console.log('Triplicado:', numerosTriplicados); // [3, 6, 9, 12]

/* 
💡 INSIGHT:
   A função aplicarOperacao é uma HOF porque recebe outra função (operacao)
   como parâmetro. Isso permite reutilizar a lógica de iteração com
   diferentes comportamentos!
*/

console.log('\n═══════════════════════════════════════════════════════');
console.log('🎁 HIGHER-ORDER FUNCTIONS - RETORNANDO FUNÇÕES');
console.log('═══════════════════════════════════════════════════════\n');

/* 
📌 EXEMPLO 3: Função que retorna outra função (Closure + HOF)
   Esta é uma técnica poderosa chamada "função fábrica" ou "currying parcial"
*/

function criarMultiplicador(fator) {
    return function (numero) {
        return numero * fator;
    };
}

console.log('3️⃣ Criando funções especializadas:');

const multiplicarPor5 = criarMultiplicador(5);
const multiplicarPor10 = criarMultiplicador(10);

console.log('5 × 10 =', multiplicarPor5(10));   // 50
console.log('10 × 10 =', multiplicarPor10(10)); // 100
console.log('5 × 3 =', multiplicarPor5(3));     // 15

/* 
🔥 CONCEITO AVANÇADO:
   criarMultiplicador é uma HOF que retorna uma função.
   A função retornada "lembra" do valor de 'fator' (closure).
   Isso nos permite criar funções especializadas dinamicamente!
*/

console.log('\n═══════════════════════════════════════════════════════');
console.log('✨ EXEMPLOS COM MÉTODOS NATIVOS DO JAVASCRIPT');
console.log('═══════════════════════════════════════════════════════\n');

/* 
📌 EXEMPLO 4: Usando HOFs nativas do JavaScript
   .map(), .filter() e .reduce() são HOFs
*/

const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('4️⃣ Usando HOFs nativas:');
console.log('Array original:', numeros2);

// .map() - transforma cada elemento
const quadrados = numeros2.map(n => n * n);
console.log('Quadrados (.map):', quadrados);

// .filter() - filtra elementos
const pares = numeros2.filter(n => n % 2 === 0);
console.log('Apenas pares (.filter):', pares);

// .reduce() - reduz a um único valor
const soma = numeros2.reduce((acc, n) => acc + n, 0);
console.log('Soma total (.reduce):', soma);

/* 
🎯 POR QUE ISSO FUNCIONA?
   Porque funções são First-Class Citizens!
   Podemos passar (n => n * n) como argumento para .map()
*/

console.log('\n═══════════════════════════════════════════════════════');
console.log('🧪 EXEMPLO PRÁTICO COMBINADO');
console.log('═══════════════════════════════════════════════════════\n');

/* 
📌 EXEMPLO 5: Combinando os conceitos
   Pipeline de transformação de dados
*/

function criarPipeline(...funcoes) {
    return function (valor) {
        return funcoes.reduce((acc, fn) => fn(acc), valor);
    };
}

const adicionar5 = (x) => x + 5;
const multiplicarPor2 = (x) => x * 2;
const subtrair3 = (x) => x - 3;

const processamento = criarPipeline(adicionar5, multiplicarPor2, subtrair3);

console.log('5️⃣ Pipeline de transformações:');
console.log('Valor inicial: 10');
console.log('Pipeline: +5 → ×2 → -3');
console.log('Resultado:', processamento(10)); // ((10 + 5) * 2) - 3 = 27

/* 
🚀 PODER DAS HOFs:
   Criamos uma função que compõe outras funções!
   Isso é programação funcional em ação.
*/

console.log('\n═══════════════════════════════════════════════════════');
console.log('📚 RESUMO FINAL');
console.log('═══════════════════════════════════════════════════════\n');

console.log(`
✅ First-Class Functions:
   → Funções são valores que podem ser:
   • Atribuídas a variáveis
   • Passadas como argumentos
   • Retornadas de outras funções
   • Armazenadas em estruturas de dados

✅ Higher-Order Functions (HOF):
   → Funções que trabalham com outras funções:
   • Recebem funções como parâmetros
   • Retornam funções como resultado
   • Exemplos: .map(), .filter(), .reduce()

🎯 Relação entre os conceitos:
   HOFs existem PORQUE funções são First-Class!
   
💡 Use quando:
   • Precisar reutilizar lógica com comportamentos diferentes
   • Quiser criar funções especializadas
   • Trabalhar com transformações de dados
   • Aplicar programação funcional

🔗 Recursos relacionados:
   • Closures (funções lembram do escopo onde foram criadas)
   • Currying (transformar função multi-parâmetro em sequência)
   • Composition (combinar funções para criar novas)
`);

console.log('═══════════════════════════════════════════════════════\n');