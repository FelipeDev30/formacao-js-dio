/* 
═══════════════════════════════════════════════════════════════════════════
    📚 GUIA DE ESTUDO: FUNÇÃO CONSTRUTORA E PROTOTYPE
═══════════════════════════════════════════════════════════════════════════
    Descrição: Criando objetos com funções construtoras
    
    📖 TÓPICOS ABORDADOS:
    • Funções construtoras (Constructor Functions)
    • Palavra-chave this
    • Operador new
    • Prototype (protótipo)
    • Compartilhamento de métodos via prototype
    
    📌 CONCEITO:
    Funções construtoras são usadas para criar múltiplos objetos
    com a mesma estrutura. Métodos adicionados ao prototype são
    compartilhados entre todas as instâncias.
    
    💡 VANTAGEM:
    Métodos no prototype economizam memória, pois não são duplicados
    para cada instância.
═══════════════════════════════════════════════════════════════════════════
*/

console.log('\n═══ 🔨 FUNÇÃO CONSTRUTORA COM PROTOTYPE ═══\n');

function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade 
}

Pessoa.prototype.falar = function() {
    console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} anos de idade!`);
}

const felipe = {
    genero: 'masculino'
}

const p1 = new Pessoa('Felipe', 31)
p1.falar();