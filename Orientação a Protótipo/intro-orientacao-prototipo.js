/* 
═══════════════════════════════════════════════════════════════════════════
    📚 GUIA DE ESTUDO: ORIENTAÇÃO A PROTÓTIPO
═══════════════════════════════════════════════════════════════════════════
    Descrição: Introdução ao modelo de herança prototipada
    
    📖 O QUE É ORIENTAÇÃO A PROTÓTIPO?
    
    Orientação a protótipo (ou prototypal inheritance) em JavaScript
    é o modelo de objetos nativo da linguagem.
    
    📌 CONCEITOS-CHAVE:
    • Em vez de "classes" tradicionais (como Java/C#), o JavaScript
      usa objetos que herdam de outros objetos
    • Herança ocorre via cadeia de protótipos (prototype chain)
    • As "classes" modernas (class) são açúcar sintático sobre
      esse mesmo mecanismo
    
    📖 TÓPICOS ABORDADOS:
    • Objetos como coleções dinâmicas de chave-valor
    • Propriedade __proto__ para herança
    • Cadeia de protótipos
    • Herança de propriedades
═══════════════════════════════════════════════════════════════════════════
*/

console.log('\n═══ 🧱 HERANÇA PROTOTIPADA ═══\n');

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

