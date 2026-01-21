/* 
═══════════════════════════════════════════════════════════════════════════
    📚 GUIA DE ESTUDO: CLASSES E MÉTODOS EM JAVASCRIPT
═══════════════════════════════════════════════════════════════════════════
    Descrição: Criando classes com métodos de apresentação
    
    📖 TÓPICOS ABORDADOS:
    1. Declaração de classes
    2. Constructor (construtor)
    3. Propriedades de instância
    4. Métodos de instância
    5. Instanciação de objetos
    6. Template strings
    
    📌 CONCEITOS:
    • Classes são moldes para criar objetos
    • Constructor inicializa as propriedades
    • Métodos definem comportamentos
    • this referencia a instância atual
═══════════════════════════════════════════════════════════════════════════
*/

console.log('\n═══ 👤 SISTEMA DE APRESENTAÇÃO DE PESSOAS ═══\n');

class Pessoa {
    constructor(nome, idade, profissao) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.profissao}.`);
    }
}

const pessoa1 = new Pessoa("Ana", 25, "desenvolvedora");
pessoa1.apresentar(); // Olá, meu nome é Ana, tenho 25 anos e sou desenvolvedora.

const pessoa2 = new Pessoa("Bruno", 30, "designer");
pessoa2.apresentar(); // Olá, meu nome é Bruno, tenho 30 anos e sou designer.