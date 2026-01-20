/* 

First Class Functions - Em JavaScript, funções são tratadas como valores, isso significa que elas podem:

    - Ser atribuídas a variáveis
    - Ser passadas como argumento para outras funções
    - Ser retornadas por funções
    - Ser armazenadas em estruturas como arrys e objetos.

Ou seja: uma função é apenas um tipo de dado, como um número ou uma string.

Exemplo simples:

functionsayHello() {
    console.log("Olá")
}

// Atribuindo função a uma variável.
const great = sayHello;

// Chamando a função via variável.
great();

-------------------------------------------------------------------------------------------------------------------

Higher Order Functions - Uma Higher-Order Function é uma função que:

    - Recebe outra função como argumento, ou
    - retorna uma função como resultado, ou ambos.

Elas existem porque JavaScript possui First-Class Functions
Essas funções são muito usadas em programação funcional e no dia a dia com métodos como:

.map()
.filter()
.reduce()

Exemplo: função recebendo outra função

function execute(fn) {
    fn();
}

execute(() => console.log("Executando outra função!"));

Exemplo: de função retornando outra função

function multiplier(x) {
  return function (y) {
    return x * y;
  };
}

const multiplyBy3 = multiplier(3);
console.log(multiplyBy3(10)); // 30

Como esses conceitos se conectam?

Higher-Order Functions só existem porque as funções são First Class
Se as funções não fossem tratadas como valores, não seria possível:
    - Passá-las como argumentos,
    - retorná-las
    - armazená-las

Portanto:
    First-Class Functions é o conceito; Higher-Order Functions é a aplicação prática desse conceito. 

Resumo para memorização:

Conceito                |   Definição                                   |   Exemplo   
First-Class Functions   |   Funções tratadas como valores               |   Atribuir função a variável
Higher-Order Functions  |   Função que recebe e/ou retorna outra função |   .map(), .filter(), funções que retornam funções

*/

// Exemplo prático de First-Class Function
function saudacao(nome) {
    return `Olá, ${nome}!`;
}

const cumprimentar = saudacao;
console.log(cumprimentar("Maria")); // Olá, Maria!

// Exemplo prático de Higher-Order Function
function aplicarOperacao(arr, operacao) {
    const resultado = [];
    for (let i = 0; i < arr.length; i++) {
        resultado.push(operacao(arr[i]));
    }
    return resultado;
}

const numeros = [1, 2, 3, 4];
const dobrar = (x) => x * 2;
const numerosDobrados = aplicarOperacao(numeros, dobrar);
console.log(numerosDobrados); // [2, 4, 6, 8]

// Exemplo de Higher-Order Function retornando outra função
function criarMultiplicador(fator) {
    return function (numero) {
        return numero * fator;
    };
}

const multiplicarPor5 = criarMultiplicador(5);
console.log(multiplicarPor5(10)); // 50