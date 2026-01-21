/* 
═══════════════════════════════════════════════════════════════════════════════
📚 GUIA COMPLETO: ESCOPOS EM JAVASCRIPT 🎯
═══════════════════════════════════════════════════════════════════════════════

📌 CONCEITO:
Em JavaScript, **escopo de variáveis** define onde uma variável pode ser 
acessada no código. O entendimento correto de escopos é fundamental para 
evitar bugs e escrever código mais organizado e previsível.

Existem quatro tipos principais de escopo:
1. Escopo Global
2. Escopo de Função
3. Escopo de Bloco
4. Escopo Léxico (Closures)

═══════════════════════════════════════════════════════════════════════════════
*/

console.log('\n═══════════════════════════════════════════════════════');
console.log('📖 SEÇÃO 1: ESCOPO GLOBAL');
console.log('═══════════════════════════════════════════════════════\n');

/* 
📌 CONCEITO: ESCOPO GLOBAL
- Variáveis declaradas FORA de qualquer função ou bloco pertencem ao escopo global
- Podem ser acessadas de QUALQUER parte do código
- ⚠️ ATENÇÃO: Variáveis globais podem causar conflitos e dificultar manutenção
- Evite usar sempre que possível!
*/

var globalVar = "Sou uma variável global";
const globalConst = "Sou uma constante global";

function testeGlobal() {
    console.log('Acessando variável global dentro da função:', globalVar);
    console.log('Acessando constante global dentro da função:', globalConst);
}

testeGlobal();
console.log('Acessando variável global fora da função:', globalVar);

console.log('\n═══════════════════════════════════════════════════════');
console.log('📖 SEÇÃO 2: ESCOPO DE FUNÇÃO');
console.log('═══════════════════════════════════════════════════════\n');

/* 
📌 CONCEITO: ESCOPO DE FUNÇÃO
- Criado quando você declara uma variável DENTRO de uma função
- A variável só pode ser acessada DENTRO dessa função
- var tem ESCOPO DE FUNÇÃO, não de bloco
- Cada função cria seu próprio escopo isolado
*/

function exemploEscopoFuncao() {
    var localVar = "Sou local da função";
    let localLet = "Também sou local";
    const localConst = "Eu também!";
    
    console.log('Dentro da função:');
    console.log('  localVar:', localVar);
    console.log('  localLet:', localLet);
    console.log('  localConst:', localConst);
}

exemploEscopoFuncao();
console.log('Tentando acessar fora da função:');
// console.log(localVar); // ❌ Erro: localVar não está definida
// console.log(localLet); // ❌ Erro: localLet não está definida
// console.log(localConst); // ❌ Erro: localConst não está definida
console.log('  (As variáveis locais não estão acessíveis aqui!)');

console.log('\n═══════════════════════════════════════════════════════');
console.log('📖 SEÇÃO 3: ESCOPO DE BLOCO');
console.log('═══════════════════════════════════════════════════════\n');

/* 
📌 CONCEITO: ESCOPO DE BLOCO
- Criado por estruturas como {}, if, for, while
- Variáveis declaradas com LET ou CONST respeitam escopo de bloco
- var IGNORA escopo de bloco (fica no escopo da função ou global)
- Esta é uma das principais diferenças entre var e let/const
*/

console.log('Exemplo 1: Bloco simples');
{
    let blocoLet = 10;
    const blocoConst = 20;
    var blocoVar = 30;
    
    console.log('  Dentro do bloco:');
    console.log('    blocoLet:', blocoLet);
    console.log('    blocoConst:', blocoConst);
    console.log('    blocoVar:', blocoVar);
}

console.log('  Fora do bloco:');
// console.log(blocoLet); // ❌ Erro: blocoLet não está definida
// console.log(blocoConst); // ❌ Erro: blocoConst não está definida
console.log('    blocoVar:', blocoVar); // ✅ OK! var ignora o bloco

console.log('\nExemplo 2: Escopo em estrutura if');
if (true) {
    let dentroIf = "let no if";
    var varNoIf = "var no if";
    console.log('  Dentro do if:', dentroIf);
}
// console.log(dentroIf); // ❌ Erro
console.log('  Fora do if, var funciona:', varNoIf); // ✅ OK

console.log('\nExemplo 3: Escopo em loop for');
for (let i = 0; i < 3; i++) {
    let dentroFor = "let no for";
    var varNoFor = "var no for";
    if (i === 0) {
        console.log('  Primeira iteração:', dentroFor);
    }
}
// console.log(i); // ❌ Erro: i não está definida
// console.log(dentroFor); // ❌ Erro
console.log('  Fora do for, var funciona:', varNoFor); // ✅ OK

console.log('\n═══════════════════════════════════════════════════════');
console.log('📖 SEÇÃO 4: ESCOPO LÉXICO (CLOSURES)');
console.log('═══════════════════════════════════════════════════════\n');

/* 
📌 CONCEITO: ESCOPO LÉXICO
- Determinado pela POSIÇÃO do código no momento da definição
- Funções internas têm acesso às variáveis do escopo externo
- Cria "closures" - funções que "lembram" do ambiente onde foram criadas
- Permite criar variáveis privadas e padrões avançados
*/

console.log('Exemplo 1: Função aninhada');
function externa() {
    let msgExterna = "Olá do escopo externo";
    
    function interna() {
        console.log('  Função interna acessa:', msgExterna);
    }
    
    interna();
}
externa();

console.log('\nExemplo 2: Closure retornando função');
function criarContador() {
    let contador = 0; // Variável "privada"
    
    return function() {
        contador++;
        return contador;
    };
}

const contador1 = criarContador();
const contador2 = criarContador();

console.log('  Contador 1 - chamada 1:', contador1()); // 1
console.log('  Contador 1 - chamada 2:', contador1()); // 2
console.log('  Contador 1 - chamada 3:', contador1()); // 3
console.log('  Contador 2 - chamada 1:', contador2()); // 1 (independente!)

console.log('\nExemplo 3: Closure com parâmetros');
function multiplicadorPor(fator) {
    return function(numero) {
        return numero * fator;
    };
}

const multiplicarPor2 = multiplicadorPor(2);
const multiplicarPor10 = multiplicadorPor(10);

console.log('  5 × 2 =', multiplicarPor2(5));
console.log('  5 × 10 =', multiplicarPor10(5));

console.log('\n═══════════════════════════════════════════════════════');
console.log('📖 SEÇÃO 5: COMPARAÇÃO VAR vs LET vs CONST');
console.log('═══════════════════════════════════════════════════════\n');

/* 
📌 CONCEITO: DIFERENÇAS PRINCIPAIS
┌──────────┬───────────────────┬──────────────┬─────────────┐
│ Palavra  │ Escopo            │ Redeclaração │ Reatribuição│
├──────────┼───────────────────┼──────────────┼─────────────┤
│ var      │ Função ou Global  │ ✅ Sim       │ ✅ Sim      │
│ let      │ Bloco             │ ❌ Não       │ ✅ Sim      │
│ const    │ Bloco             │ ❌ Não       │ ❌ Não      │
└──────────┴───────────────────┴──────────────┴─────────────┘
*/

console.log('Demonstração de reatribuição:');
var varVariavel = 10;
let letVariavel = 20;
const constVariavel = 30;

console.log('  Valores iniciais:', { varVariavel, letVariavel, constVariavel });

varVariavel = 15;
letVariavel = 25;
// constVariavel = 35; // ❌ Erro: não pode reatribuir const

console.log('  Após reatribuição:', { varVariavel, letVariavel, constVariavel });

console.log('\n═══════════════════════════════════════════════════════');
console.log('📖 SEÇÃO 6: BOAS PRÁTICAS');
console.log('═══════════════════════════════════════════════════════\n');

/* 
📌 CONCEITO: RECOMENDAÇÕES
1. ✅ Prefira const por padrão
2. ✅ Use let quando precisar reatribuir
3. ❌ Evite var (legado, comportamento confuso)
4. ✅ Declare variáveis no topo do escopo
5. ✅ Minimize o uso de variáveis globais
6. ✅ Use closures para criar variáveis privadas
*/

console.log('Exemplo de código bem estruturado:');

function calcularPrecoTotal(preco, quantidade) {
    const TAXA_IMPOSTO = 0.15; // Constante, não muda
    let subtotal = preco * quantidade; // Pode mudar
    let imposto = subtotal * TAXA_IMPOSTO;
    const total = subtotal + imposto; // Valor final, não muda
    
    return {
        subtotal: subtotal.toFixed(2),
        imposto: imposto.toFixed(2),
        total: total.toFixed(2)
    };
}

const resultado = calcularPrecoTotal(100, 3);
console.log('  Resultado:', resultado);

console.log('\n═══════════════════════════════════════════════════════');
console.log('📋 RESUMO FINAL - CHECKLIST DE ESCOPOS');
console.log('═══════════════════════════════════════════════════════\n');

console.log(`
✅ Escopo Global
   └─ Variáveis acessíveis de qualquer lugar
   └─ Evitar ao máximo para prevenir conflitos

✅ Escopo de Função
   └─ Variáveis só existem dentro da função
   └─ var tem escopo de função

✅ Escopo de Bloco
   └─ Criado por {}, if, for, while
   └─ let e const respeitam escopo de bloco
   └─ var IGNORA escopo de bloco

✅ Escopo Léxico (Closures)
   └─ Funções internas acessam variáveis externas
   └─ Permite criar variáveis "privadas"
   └─ Base para padrões avançados

✅ Boas Práticas
   └─ Use const por padrão
   └─ Use let quando precisar reatribuir
   └─ Evite var
   └─ Minimize variáveis globais

═══════════════════════════════════════════════════════
🎓 Continue praticando escopos para dominar JavaScript!
═══════════════════════════════════════════════════════
`);