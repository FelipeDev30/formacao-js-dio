/* 
═══════════════════════════════════════════════════════════════════════════
    📚 GUIA DE ESTUDO: CLOSURES (FECHAMENTOS)
═══════════════════════════════════════════════════════════════════════════
    Descrição: Funções que "lembram" do escopo onde foram criadas
    
    📖 TÓPICOS ABORDADOS:
    1. O que são Closures
    2. Como Closures Funcionam
    3. Closures com Parâmetros
    4. Variáveis Privadas com Closures
    5. Casos de Uso Práticos
═══════════════════════════════════════════════════════════════════════════
*/

console.log('\n═══ 1️⃣ O QUE SÃO CLOSURES? ═══\n');
/* 
📌 CONCEITO:
   - Closure = "fechamento" ou "clausura"
   - Função que "lembra" das variáveis do escopo onde foi criada
   - Mesmo quando executada fora desse escopo original
   - Permite criar "variáveis privadas" em JavaScript
   
   DEFINIÇÃO TÉCNICA:
   "Um closure é a combinação de uma função com o ambiente léxico 
    (escopo) no qual ela foi declarada"
*/

console.log('Closure: função + memória do escopo onde foi criada');
console.log('✓ Permite acesso a variáveis externas mesmo após a função externa terminar\n');


console.log('\n═══ 2️⃣ EXEMPLO BÁSICO DE CLOSURE ═══\n');
/* 
📌 CONCEITO:
   - função externa cria uma variável
   - função interna acessa essa variável
   - função interna é retornada
   - closure mantém referência à variável externa
*/

function criarSaudacao(saudacao) {
    // Esta variável é "lembrada" pela função interna
    return function(nome) {
        return `${saudacao}, ${nome}!`;
    };
}

const saudarBomDia = criarSaudacao('Bom dia');
const saudarBoaNoite = criarSaudacao('Boa noite');

console.log(saudarBomDia('João'));    // "Bom dia, João!"
console.log(saudarBomDia('Maria'));   // "Bom dia, Maria!"
console.log(saudarBoaNoite('Carlos')); // "Boa noite, Carlos!"

console.log('\n✓ Cada closure mantém sua própria cópia da variável "saudacao"\n');


console.log('\n═══ 3️⃣ CLOSURE COM SOMA PARCIAL ═══\n');
/* 
📌 CONCEITO:
   - Curry: transformar função de múltiplos parâmetros em funções aninhadas
   - Cada função retorna outra função até o resultado final
   - Útil para criar funções especializadas
*/

function soma(x) {
    // Retorna uma função que "lembra" de x
    return (y) => {
        return x + y;
    };
}

const somaCom10 = soma(10);  // Cria closure com x = 10
const somaCom5 = soma(5);    // Cria closure com x = 5

console.log('somaCom10(20):', somaCom10(20)); // 10 + 20 = 30
console.log('somaCom10(15):', somaCom10(15)); // 10 + 15 = 25
console.log('somaCom5(8):', somaCom5(8));      // 5 + 8 = 13

// Pode chamar diretamente também
console.log('soma(100)(50):', soma(100)(50)); // 100 + 50 = 150

console.log('\n✓ Closure permite "aplicação parcial" de funções\n');


console.log('\n═══ 4️⃣ VARIÁVEIS PRIVADAS COM CLOSURES ═══\n');
/* 
📌 CONCEITO:
   - JavaScript não tem modificadores de acesso (private, public)
   - Closures simulam variáveis privadas
   - Só a função interna acessa a variável externa
*/

function criarContador() {
    let contador = 0; // Variável "privada"
    
    return {
        incrementar: function() {
            contador++;
            return contador;
        },
        decrementar: function() {
            contador--;
            return contador;
        },
        obterValor: function() {
            return contador;
        }
    };
}

const meuContador = criarContador();
console.log('Incrementar:', meuContador.incrementar()); // 1
console.log('Incrementar:', meuContador.incrementar()); // 2
console.log('Incrementar:', meuContador.incrementar()); // 3
console.log('Decrementar:', meuContador.decrementar()); // 2
console.log('Valor atual:', meuContador.obterValor());  // 2

// Tentando acessar contador diretamente (não funciona!)
console.log('meuContador.contador:', meuContador.contador); // undefined

console.log('\n✓ Closure protege "contador" - só acessível via métodos\n');


console.log('\n═══ 5️⃣ CLOSURE COM MÚLTIPLAS VARIÁVEIS ═══\n');
/* 
📌 CONCEITO:
   - Closure pode lembrar de múltiplas variáveis
   - Cada instância tem suas próprias cópias
*/

function criarConta(nomeCliente, saldoInicial) {
    let saldo = saldoInicial; // Variável privada
    const nome = nomeCliente;  // Constante privada
    
    return {
        depositar: function(valor) {
            saldo += valor;
            return `${nome}: Depositou R$${valor}. Saldo: R$${saldo}`;
        },
        sacar: function(valor) {
            if (valor > saldo) {
                return `${nome}: Saldo insuficiente!`;
            }
            saldo -= valor;
            return `${nome}: Sacou R$${valor}. Saldo: R$${saldo}`;
        },
        consultarSaldo: function() {
            return `${nome}: Saldo atual: R$${saldo}`;
        }
    };
}

const contaJoao = criarConta('João', 100);
const contaMaria = criarConta('Maria', 500);

console.log(contaJoao.depositar(50));      // João: Depositou R$50. Saldo: R$150
console.log(contaMaria.depositar(200));    // Maria: Depositou R$200. Saldo: R$700
console.log(contaJoao.sacar(30));          // João: Sacou R$30. Saldo: R$120
console.log(contaJoao.consultarSaldo());   // João: Saldo atual: R$120
console.log(contaMaria.consultarSaldo());  // Maria: Saldo atual: R$700

console.log('\n✓ Cada conta é independente, com seus próprios dados privados\n');


console.log('\n═══ 6️⃣ CLOSURE EM LOOPS (CUIDADO!) ═══\n');
/* 
📌 CONCEITO:
   - Problema clássico com var em loops
   - Solução: usar let (escopo de bloco) ou IIFE
*/

// ❌ PROBLEMA: com var (não cria closure adequado)
console.log('--- Com var (PROBLEMA) ---');
var funcoes = [];
for (var i = 0; i < 3; i++) {
    funcoes.push(function() { return i; });
}
console.log('funcoes[0]():', funcoes[0]()); // 3 (esperávamos 0!)
console.log('funcoes[1]():', funcoes[1]()); // 3 (esperávamos 1!)
console.log('funcoes[2]():', funcoes[2]()); // 3 (esperávamos 2!)
console.log('  ⚠️ Todas retornam 3! var tem escopo de função\n');

// ✅ SOLUÇÃO 1: usar let (escopo de bloco)
console.log('--- Com let (SOLUÇÃO 1) ---');
let funcoes2 = [];
for (let j = 0; j < 3; j++) {
    funcoes2.push(function() { return j; });
}
console.log('funcoes2[0]():', funcoes2[0]()); // 0 ✓
console.log('funcoes2[1]():', funcoes2[1]()); // 1 ✓
console.log('funcoes2[2]():', funcoes2[2]()); // 2 ✓
console.log('  ✅ let cria novo escopo em cada iteração\n');

// ✅ SOLUÇÃO 2: IIFE (função imediatamente invocada)
console.log('--- Com IIFE (SOLUÇÃO 2) ---');
var funcoes3 = [];
for (var k = 0; k < 3; k++) {
    funcoes3.push((function(valor) {
        return function() { return valor; };
    })(k));
}
console.log('funcoes3[0]():', funcoes3[0]()); // 0 ✓
console.log('funcoes3[1]():', funcoes3[1]()); // 1 ✓
console.log('funcoes3[2]():', funcoes3[2]()); // 2 ✓
console.log('  ✅ IIFE captura valor em cada iteração\n');


/* 
═══════════════════════════════════════════════════════════════════════════
    📝 RESUMO PARA ESTUDO
═══════════════════════════════════════════════════════════════════════════

    ✅ CLOSURE = função + memória do escopo externo
    
    ✅ CARACTERÍSTICAS:
       • Função interna acessa variáveis da externa
       • Mantém referência mesmo após função externa terminar
       • Cada closure tem sua própria cópia das variáveis
       
    ✅ CASOS DE USO:
       • Variáveis privadas (encapsulamento)
       • Aplicação parcial de funções (currying)
       • Factory functions (criar objetos com estado)
       • Event handlers e callbacks
       
    ✅ CUIDADOS:
       • var em loops não cria closures adequados
       • Use let (escopo de bloco) ou IIFE
       • Closures consomem memória (variáveis não são liberadas)
       
    ✅ VANTAGENS:
       • Encapsulamento de dados
       • Código mais modular e reutilizável
       • Padrão fundamental em JavaScript

    💡 BOA PRÁTICA:
       • Use closures para criar APIs privadas
       • Prefira let em loops
       • Entenda o escopo léxico
       • Closures são a base de muitos padrões JavaScript

    🔧 Como executar: node clousures-ou-fechamentos.js
═══════════════════════════════════════════════════════════════════════════
*/

