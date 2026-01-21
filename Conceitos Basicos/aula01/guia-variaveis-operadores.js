/* 
═══════════════════════════════════════════════════════════════════════════════
📚 GUIA COMPLETO: VARIÁVEIS E OPERADORES EM JAVASCRIPT 🎯
═══════════════════════════════════════════════════════════════════════════════

📌 O QUE SÃO VARIÁVEIS?
Variáveis são "caixinhas" (ou containers) onde podemos guardar informações 
para serem usadas posteriormente no código. Elas possuem um NOME (identificador) 
e um VALOR associado.

Exemplo conceitual:
┌─────────────┐
│ nome = João │  ← Variável "nome" guarda o valor "João"
└─────────────┘

═══════════════════════════════════════════════════════════════════════════════
*/

console.log('\n═══════════════════════════════════════════════════════');
console.log('📖 SEÇÃO 1: TIPOS DE VARIÁVEIS (var, let, const)');
console.log('═══════════════════════════════════════════════════════\n');

/* 
📌 CONCEITO: TRÊS FORMAS DE DECLARAR VARIÁVEIS

1. var (LEGADO - evitar)
   • Escopo: global ou de função
   • Pode ser redeclarada e reatribuída
   • Sujeito a hoisting (içamento)
   • Problemas de escopo inesperados

2. let (MODERNO - preferir para valores que mudam)
   • Escopo: de bloco {}
   • Não pode ser redeclarada no mesmo escopo
   • Pode ser reatribuída
   • Introduzido no ES6 (2015)

3. const (MODERNO - preferir para valores constantes)
   • Escopo: de bloco {}
   • Não pode ser redeclarada nem reatribuída
   • DEVE ser inicializada na declaração
   • Use por padrão!
*/

// Exemplos de declaração
var cidadeVar = "São Paulo";      // ❌ Evite var
let idadeLet = 25;                // ✅ Use let para valores que mudam
const piConst = 3.14159;          // ✅ Use const por padrão

console.log('Variáveis declaradas:');
console.log('  var cidadeVar =', cidadeVar);
console.log('  let idadeLet =', idadeLet);
console.log('  const piConst =', piConst);

// Demonstrando diferenças
console.log('\n📊 Diferenças entre var, let e const:');

// var - pode ser redeclarado
var x = 10;
var x = 20; // ✅ Funciona (mas não é ideal!)
console.log('  var redeclarado:', x);

// let - não pode ser redeclarado, mas pode ser reatribuído
let y = 10;
// let y = 20; // ❌ Erro: já foi declarado
y = 20; // ✅ Reatribuição funciona
console.log('  let reatribuído:', y);

// const - não pode ser redeclarado nem reatribuído
const z = 10;
// const z = 20; // ❌ Erro: já foi declarado
// z = 20; // ❌ Erro: não pode reatribuir
console.log('  const (imutável):', z);

console.log('\n═══════════════════════════════════════════════════════');
console.log('📖 SEÇÃO 2: TIPOS DE DADOS PRIMITIVOS');
console.log('═══════════════════════════════════════════════════════\n');

/* 
📌 CONCEITO: TIPOS DE DADOS EM JAVASCRIPT

Primitivos:
1. String - texto entre aspas
2. Number - números (inteiros e decimais)
3. Boolean - true ou false
4. Undefined - variável declarada mas sem valor
5. Null - ausência intencional de valor
6. Symbol - identificador único (ES6)
7. BigInt - números muito grandes (ES2020)
*/

const texto = "Olá, JavaScript!";        // String
const numero = 42;                       // Number (inteiro)
const decimal = 3.14;                    // Number (decimal)
const verdadeiro = true;                 // Boolean
const falso = false;                     // Boolean
let indefinido;                          // Undefined (sem valor atribuído)
const nulo = null;                       // Null (ausência de valor)

console.log('Exemplos de tipos primitivos:');
console.log('  String:', typeof texto, '→', texto);
console.log('  Number (int):', typeof numero, '→', numero);
console.log('  Number (float):', typeof decimal, '→', decimal);
console.log('  Boolean:', typeof verdadeiro, '→', verdadeiro);
console.log('  Undefined:', typeof indefinido, '→', indefinido);
console.log('  Null:', typeof nulo, '→', nulo, '(bug histórico: typeof null retorna "object")');

console.log('\n═══════════════════════════════════════════════════════');
console.log('📖 SEÇÃO 3: OPERADORES ARITMÉTICOS');
console.log('═══════════════════════════════════════════════════════\n');

/* 
📌 CONCEITO: OPERADORES ARITMÉTICOS
Realizam operações matemáticas com números.

+ → Adição
- → Subtração
* → Multiplicação
/ → Divisão
% → Módulo (resto da divisão)
** → Exponenciação
++ → Incremento (adiciona 1)
-- → Decremento (subtrai 1)
*/

const a = 10;
const b = 3;

console.log('Operações com a =', a, 'e b =', b);
console.log('  Adição: a + b =', a + b);
console.log('  Subtração: a - b =', a - b);
console.log('  Multiplicação: a * b =', a * b);
console.log('  Divisão: a / b =', a / b);
console.log('  Módulo: a % b =', a % b, '(resto da divisão)');
console.log('  Exponenciação: a ** b =', a ** b, '(10³)');

// Incremento e decremento
let contador = 5;
console.log('\nContador inicial:', contador);
contador++;
console.log('  Após contador++:', contador);
contador--;
console.log('  Após contador--:', contador);

console.log('\n═══════════════════════════════════════════════════════');
console.log('📖 SEÇÃO 4: OPERADORES DE ATRIBUIÇÃO');
console.log('═══════════════════════════════════════════════════════\n');

/* 
📌 CONCEITO: OPERADORES DE ATRIBUIÇÃO
Atribuem valores às variáveis de forma simplificada.

=   → Atribuição simples
+=  → Adiciona e atribui (x += 5 é igual a x = x + 5)
-=  → Subtrai e atribui
*=  → Multiplica e atribui
/=  → Divide e atribui
%=  → Módulo e atribui
**= → Exponenciação e atribui
*/

let valor = 10;
console.log('Valor inicial:', valor);

valor += 5; // valor = valor + 5
console.log('  Após valor += 5:', valor);

valor -= 3; // valor = valor - 3
console.log('  Após valor -= 3:', valor);

valor *= 2; // valor = valor * 2
console.log('  Após valor *= 2:', valor);

valor /= 4; // valor = valor / 4
console.log('  Após valor /= 4:', valor);

console.log('\n═══════════════════════════════════════════════════════');
console.log('📖 SEÇÃO 5: OPERADORES DE COMPARAÇÃO');
console.log('═══════════════════════════════════════════════════════\n');

/* 
📌 CONCEITO: OPERADORES DE COMPARAÇÃO
Comparam valores e retornam true ou false.

==  → Igual (com conversão de tipo)
=== → Estritamente igual (sem conversão)
!=  → Diferente (com conversão)
!== → Estritamente diferente (sem conversão)
>   → Maior que
<   → Menor que
>=  → Maior ou igual
<=  → Menor ou igual

⚠️ SEMPRE prefira === e !== para evitar bugs!
*/

console.log('Comparações:');
console.log('  5 == "5" →', 5 == "5");    // true (conversão de tipo)
console.log('  5 === "5" →', 5 === "5");  // false (tipos diferentes)
console.log('  10 > 5 →', 10 > 5);
console.log('  10 < 5 →', 10 < 5);
console.log('  10 >= 10 →', 10 >= 10);
console.log('  10 <= 9 →', 10 <= 9);
console.log('  10 != "10" →', 10 != "10");  // false (conversão)
console.log('  10 !== "10" →', 10 !== "10"); // true (tipos diferentes)

console.log('\n═══════════════════════════════════════════════════════');
console.log('📖 SEÇÃO 6: OPERADORES LÓGICOS');
console.log('═══════════════════════════════════════════════════════\n');

/* 
📌 CONCEITO: OPERADORES LÓGICOS
Combinam expressões booleanas.

&& → E lógico (AND) - ambos devem ser true
|| → OU lógico (OR) - pelo menos um deve ser true
!  → NÃO lógico (NOT) - inverte o valor

Tabela verdade:
true && true = true
true && false = false
true || false = true
false || false = false
!true = false
!false = true
*/

const maiorDeIdade = true;
const temCarteira = false;

console.log('Operadores lógicos:');
console.log('  maiorDeIdade =', maiorDeIdade);
console.log('  temCarteira =', temCarteira);
console.log('\n  maiorDeIdade && temCarteira →', maiorDeIdade && temCarteira);
console.log('  (Pode dirigir? Precisa ser maior E ter carteira)');
console.log('\n  maiorDeIdade || temCarteira →', maiorDeIdade || temCarteira);
console.log('  (Tem pelo menos uma qualificação?)');
console.log('\n  !temCarteira →', !temCarteira);
console.log('  (Não tem carteira?)');

// Exemplo prático
const idade = 20;
const possuiCNH = true;

const podeDirigir = idade >= 18 && possuiCNH;
console.log(`\n🚗 Pessoa com ${idade} anos e CNH: ${possuiCNH}`);
console.log('  Pode dirigir?', podeDirigir);

console.log('\n═══════════════════════════════════════════════════════');
console.log('📖 SEÇÃO 7: OPERADORES DE STRING');
console.log('═══════════════════════════════════════════════════════\n');

/* 
📌 CONCEITO: CONCATENAÇÃO DE STRINGS
+ → Une (concatena) strings
Template literals (`${}`) → Forma moderna de concatenar
*/

const nome = "João";
const sobrenome = "Silva";

// Concatenação com +
const nomeCompleto1 = nome + " " + sobrenome;
console.log('Concatenação com +:', nomeCompleto1);

// Template literals (forma moderna)
const nomeCompleto2 = `${nome} ${sobrenome}`;
console.log('Template literals:', nomeCompleto2);

// Exemplo mais complexo
const idadePessoa = 30;
const mensagem = `Olá, meu nome é ${nome} ${sobrenome} e tenho ${idadePessoa} anos.`;
console.log('Mensagem completa:', mensagem);

console.log('\n═══════════════════════════════════════════════════════');
console.log('📖 SEÇÃO 8: PRECEDÊNCIA DE OPERADORES');
console.log('═══════════════════════════════════════════════════════\n');

/* 
📌 CONCEITO: ORDEM DE EXECUÇÃO
Alguns operadores têm prioridade sobre outros.

Ordem de precedência (do maior para o menor):
1. () - Parênteses
2. ** - Exponenciação
3. *, /, % - Multiplicação, Divisão, Módulo
4. +, - - Adição, Subtração
5. <, >, <=, >= - Comparações
6. ==, === - Igualdade
7. && - E lógico
8. || - OU lógico
*/

console.log('Precedência de operadores:');
console.log('  2 + 3 * 4 =', 2 + 3 * 4);        // 14 (multiplicação primeiro)
console.log('  (2 + 3) * 4 =', (2 + 3) * 4);    // 20 (parênteses primeiro)
console.log('  10 / 2 + 3 =', 10 / 2 + 3);      // 8 (divisão, depois soma)
console.log('  2 ** 3 * 2 =', 2 ** 3 * 2);      // 16 (exponenciação, depois mult)

console.log('\n═══════════════════════════════════════════════════════');
console.log('📖 SEÇÃO 9: EXEMPLOS PRÁTICOS');
console.log('═══════════════════════════════════════════════════════\n');

// Exemplo 1: Calculadora de IMC
const peso = 70;
const altura = 1.75;
const imc = peso / (altura ** 2);
console.log(`📊 IMC: ${imc.toFixed(2)}`);

// Exemplo 2: Cálculo de desconto
const precoOriginal = 100;
const percentualDesconto = 15;
const valorDesconto = precoOriginal * (percentualDesconto / 100);
const precoFinal = precoOriginal - valorDesconto;
console.log(`💰 Preço: R$ ${precoOriginal} - ${percentualDesconto}% = R$ ${precoFinal}`);

// Exemplo 3: Verificação de maioridade
const idadeUsuario = 18;
const ehMaior = idadeUsuario >= 18;
console.log(`👤 Idade: ${idadeUsuario} → Maior de idade: ${ehMaior}`);

console.log('\n═══════════════════════════════════════════════════════');
console.log('📋 RESUMO - CHECKLIST COMPLETO');
console.log('═══════════════════════════════════════════════════════\n');

console.log(`
✅ VARIÁVEIS:
   └─ var: escopo global/função (evitar)
   └─ let: escopo de bloco, pode reatribuir
   └─ const: escopo de bloco, não pode reatribuir (preferir)

✅ TIPOS PRIMITIVOS:
   └─ String: "texto"
   └─ Number: 42, 3.14
   └─ Boolean: true, false
   └─ Undefined: sem valor
   └─ Null: ausência de valor

✅ OPERADORES ARITMÉTICOS:
   └─ +, -, *, /, %, **, ++, --

✅ OPERADORES DE ATRIBUIÇÃO:
   └─ =, +=, -=, *=, /=, %=

✅ OPERADORES DE COMPARAÇÃO:
   └─ ==, ===, !=, !==, >, <, >=, <=
   └─ Sempre prefira === e !==

✅ OPERADORES LÓGICOS:
   └─ && (E), || (OU), ! (NÃO)

✅ CONCATENAÇÃO:
   └─ + para strings
   └─ Template literals: \`\${variavel}\`

✅ BOAS PRÁTICAS:
   └─ Use const por padrão
   └─ Use let quando precisar reatribuir
   └─ Evite var
   └─ Use === em vez de ==
   └─ Nomes descritivos para variáveis

═══════════════════════════════════════════════════════
🎓 Pratique esses conceitos para dominar JavaScript!
═══════════════════════════════════════════════════════
`);