/* 

Orientação a Protótipo JS: Orientação a protótipo (ou prototypal inheritance) em JavaScript é o modelo de objetos nativo da linguagem. 
Em vez de “classes” tradicionais (como em Java ou C#), o JavaScript usa objetos que herdam de outros objetos por meio de uma cadeia de protótipos (prototype chain). 
As “classes” do JS moderno (class) são açúcar sintático em cima desse mesmo mecanismo.

*/

// Um objeto é uma coleção dinâmica de chave e valor

const Pessoa = {
    genero: 'masculino'
}

const renan = {
    nome: 'Renan',
    idade: 30,
    _proto_: Pessoa
}

console.log(renan); // Herdando do protótipo o genero

