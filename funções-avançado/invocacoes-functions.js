/* 
═══════════════════════════════════════════════════════════════════════════
    📚 GUIA DE ESTUDO: INVOCAÇÕES DE FUNÇÕES EM JAVASCRIPT
═══════════════════════════════════════════════════════════════════════════
    Autor: Luiz Felipe Lamas da Silva
    Data: 2026-01-21
    Descrição: Exemplos práticos de diferentes formas de invocar funções
    
    📖 TÓPICOS ABORDADOS:
    1. Funções Nomeadas (Function Declaration)
    2. Funções Anônimas (Function Expression)
    3. IIFE (Immediately Invoked Function Expression)
    4. Parâmetros Padrão (Default Parameters)
    5. Arrow Functions
    6. Recursão
    7. Callbacks
    8. Retorno de Objetos
    9. Spread Operator (Rest Parameters)
    10. Destructuring de Parâmetros
    11. Closures
═══════════════════════════════════════════════════════════════════════════
*/

console.log('\n═══ 1️⃣ FUNÇÃO NOMEADA (Function Declaration) ═══\n');
/* 
📌 CONCEITO:
   - Forma clássica de declarar funções
   - São "hoisted" (elevadas ao topo do escopo)
   - Podem ser chamadas antes de serem declaradas no código
*/

function saudacao(nome) {
    return `Olá, ${nome}!`;
}

// Invocação: nome_da_função(argumentos)
const mensagem = saudacao('João Pedro');
console.log(mensagem); // Saída: Olá, João Pedro!
console.log('✓ A função foi declarada e pode ser reutilizada múltiplas vezes');
console.log(saudacao('Maria')); // Saída: Olá, Maria!


console.log('\n═══ 2️⃣ FUNÇÃO ANÔNIMA (Function Expression) ═══\n');
/* 
📌 CONCEITO:
   - Função sem nome atribuída a uma variável
   - NÃO são "hoisted" - só podem ser chamadas após a declaração
   - Útil para passar funções como valores
*/

const soma = function(a, b) {
    return a + b;
};

// Invocação: igual a função normal, usando o nome da variável
const resultadoSoma = soma(5, 7);
console.log(resultadoSoma); // Saída: 12
console.log('✓ A função está armazenada na variável "soma"');


console.log('\n═══ 3️⃣ IIFE (Immediately Invoked Function Expression) ═══\n');
/* 
📌 CONCEITO:
   - Função executada imediatamente após ser criada
   - Sintaxe: (function() { código })();
   - Útil para criar escopo isolado e evitar poluição do escopo global
   - Variáveis dentro da IIFE não vazam para fora
*/

(function() {
    const mensagemPrivada = 'Esta função foi invocada imediatamente!';
    console.log(mensagemPrivada);
})();
console.log('✓ IIFE executou automaticamente sem precisar ser chamada');
// console.log(mensagemPrivada); // ❌ ERRO: mensagemPrivada não existe fora da IIFE


console.log('\n═══ 4️⃣ PARÂMETROS PADRÃO (Default Parameters) ═══\n');
/* 
📌 CONCEITO:
   - Permite definir valores padrão para parâmetros
   - Se o argumento não for passado, usa o valor padrão
   - Sintaxe: function nome(param1, param2 = valorPadrao)
*/

function multiplicar(a, b = 2) {
    return a * b;
}

console.log(multiplicar(5));      // Saída: 10 (usa b = 2)
console.log(multiplicar(5, 3));   // Saída: 15 (usa b = 3)
console.log('✓ Quando b não é fornecido, usa o valor padrão 2');


console.log('\n═══ 5️⃣ ARROW FUNCTIONS (Funções Seta) ═══\n');
/* 
📌 CONCEITO:
   - Sintaxe mais curta: (params) => expressão
   - Retorno implícito quando não usa chaves {}
   - Não tem seu próprio "this"
   - Ideal para funções simples e callbacks
*/

const dividir = (a, b) => a / b;

console.log(dividir(10, 2)); // Saída: 5
console.log(dividir(9, 3));  // Saída: 3
console.log('✓ Arrow function com retorno implícito (sem "return")');

// Exemplos de variações:
const quadrado = x => x * x;              // Um parâmetro: parênteses opcionais
const saudar = () => 'Olá!';              // Sem parâmetros: parênteses obrigatórios
const somar = (a, b) => { return a + b }; // Com chaves: precisa de "return"
console.log('Exemplos:', quadrado(4), saudar(), somar(2, 3));


console.log('\n═══ 6️⃣ RECURSÃO (Recursive Function) ═══\n');
/* 
📌 CONCEITO:
   - Função que chama a si mesma
   - Deve ter uma condição de parada (caso base)
   - Útil para problemas que podem ser divididos em subproblemas menores
   - Exemplo clássico: fatorial de n = n × fatorial(n-1)
*/

function fatorial(n) {
    // Caso base: quando n <= 1, retorna 1
    if (n <= 1) return 1;
    // Caso recursivo: n × fatorial(n-1)
    return n * fatorial(n - 1);
}

console.log('fatorial(5) =', fatorial(5)); // 5 × 4 × 3 × 2 × 1 = 120
console.log('fatorial(3) =', fatorial(3)); // 3 × 2 × 1 = 6
console.log('fatorial(0) =', fatorial(0)); // Caso base = 1
console.log('✓ Recursão: fatorial(5) → 5 × fatorial(4) → 5 × 4 × fatorial(3)...');


console.log('\n═══ 7️⃣ CALLBACKS (Funções de Retorno) ═══\n');
/* 
📌 CONCEITO:
   - Função passada como argumento para outra função
   - A função receptora decide quando executar o callback
   - Muito usado em programação assíncrona e event listeners
*/

function executarCallback(callback) {
    console.log('Preparando para executar o callback...');
    callback(); // Executa a função recebida
}

// Passando uma função anônima como callback
executarCallback(function() {
    console.log('Callback executado!');
});

// Também funciona com arrow functions
executarCallback(() => console.log('Callback com arrow function!'));
console.log('✓ Callbacks são fundamentais para JavaScript assíncrono');


console.log('\n═══ 8️⃣ RETORNO DE OBJETOS (Object Return) ═══\n');
/* 
📌 CONCEITO:
   - Funções podem retornar qualquer tipo de dado, inclusive objetos
   - Útil para criar "factories" (fábricas de objetos)
   - Permite agrupar dados relacionados
*/

function criarPessoa(nome, idade) {
    return {
        nome: nome,        // Poderia usar shorthand: nome,
        idade: idade,      // Poderia usar shorthand: idade,
        apresentar: function() {
            return `Olá, sou ${this.nome} e tenho ${this.idade} anos`;
        }
    };
}

const pessoa = criarPessoa('Ana', 30);
console.log(pessoa);               // Objeto completo
console.log('Nome:', pessoa.nome); // Acessando propriedade
console.log('Idade:', pessoa.idade);
console.log(pessoa.apresentar());  // Chamando método do objeto
console.log('✓ Factory function: cria objetos personalizados');


console.log('\n═══ 9️⃣ SPREAD OPERATOR / REST PARAMETERS (...) ═══\n');
/* 
📌 CONCEITO:
   - (...nomes) captura todos os argumentos em um array
   - Permite número variável de parâmetros
   - "Rest" porque coleta o "resto" dos argumentos
*/

function listarNomes(...nomes) {
    console.log('Array recebido:', nomes);
    return nomes.join(', ');
}

console.log(listarNomes('João', 'Maria', 'Pedro')); // 3 argumentos
console.log(listarNomes('Ana', 'Lucas'));           // 2 argumentos
console.log(listarNomes());                         // 0 argumentos = array vazio
console.log('✓ Rest parameters: aceita qualquer quantidade de argumentos');


console.log('\n═══ 🔟 DESTRUCTURING DE PARÂMETROS ═══\n');
/* 
📌 CONCEITO:
   - Extrai propriedades de objetos diretamente nos parâmetros
   - Sintaxe: function nome({ prop1, prop2 })
   - Torna o código mais limpo e legível
   - Útil quando só precisa de algumas propriedades do objeto
*/

function exibirInfo({ nome, idade }) {
    return `Nome: ${nome}, Idade: ${idade}`;
}

const info = { nome: 'Carlos', idade: 28, cidade: 'São Paulo' };
console.log(exibirInfo(info));
console.log(exibirInfo({ nome: 'Beatriz', idade: 22 }));
console.log(exibirInfo({ nome: 'Daniel', idade: 35 }));
console.log('✓ Destructuring: extrai apenas as propriedades necessárias');


console.log('\n═══ 1️⃣1️⃣ CLOSURES (Fechamentos) ═══\n');
/* 
📌 CONCEITO:
   - Função interna que "lembra" do escopo da função externa
   - Mesmo após a função externa terminar, a interna mantém acesso às variáveis
   - Permite criar variáveis "privadas" em JavaScript
   - Cada closure tem sua própria cópia das variáveis
*/

function criarContador() {
    let contador = 0; // Variável "privada" - só acessível via closure
    
    return function() {
        contador++; // Acessa e modifica a variável da função externa
        return contador;
    }
}

// Cada chamada de criarContador() cria um novo closure independente
const contador1 = criarContador();
console.log('contador1:', contador1()); // Saída: 1
console.log('contador1:', contador1()); // Saída: 2

const contador2 = criarContador(); // Novo closure, novo contador
console.log('contador2:', contador2()); // Saída: 1 (independente de contador1)
console.log('contador1:', contador1()); // Saída: 3 (continua de onde parou)

console.log('✓ Closures: cada contador mantém seu próprio estado privado');
console.log('✓ contador1 e contador2 são independentes entre si\n');


/* 
═══════════════════════════════════════════════════════════════════════════
    📝 RESUMO PARA ESTUDO
═══════════════════════════════════════════════════════════════════════════

    ✅ Function Declaration → Funções nomeadas, com hoisting
    ✅ Function Expression → Funções anônimas em variáveis
    ✅ IIFE → Execução imediata, escopo isolado
    ✅ Default Parameters → Valores padrão para parâmetros
    ✅ Arrow Functions → Sintaxe moderna e concisa
    ✅ Recursão → Função que chama a si mesma
    ✅ Callbacks → Funções passadas como argumentos
    ✅ Object Return → Retornar objetos complexos
    ✅ Rest Parameters → Número variável de argumentos
    ✅ Destructuring → Extrair propriedades nos parâmetros
    ✅ Closures → Funções que "lembram" do escopo externo

    💡 DICA: Execute este arquivo no Node.js ou navegador para ver
       todos os exemplos em ação!
       
    🔧 Como executar: node invocacoes-functions.js
═══════════════════════════════════════════════════════════════════════════
*/