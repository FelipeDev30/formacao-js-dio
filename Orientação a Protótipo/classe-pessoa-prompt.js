/* 
═══════════════════════════════════════════════════════════════════════════
    📚 GUIA DE ESTUDO: CLASSE COM ENTRADA DO USUÁRIO
═══════════════════════════════════════════════════════════════════════════
    Descrição: Classe Pessoa com captura de dados via prompt
    
    📖 TÓPICOS ABORDADOS:
    • Classes ES6
    • Constructor com prompt
    • Métodos de instância
    • Captura de entrada do usuário
    • Exibição com alert
    • Múltiplas instâncias de objetos
    
    📌 FUNCIONALIDADE:
    Cria objetos Pessoa coletando nome e idade diretamente
    do usuário no momento da instanciação.
    
    ⚠️ Este código roda no NAVEGADOR (usa prompt/alert)
═══════════════════════════════════════════════════════════════════════════
*/

console.log('\n═══ 👤 CLASSE PESSOA INTERATIVA ═══\n');

class Pessoa {
    constructor(nome, idade) {
        nome = prompt('Informe seu nome: ')
        idade = Number(prompt('Informe sua idade: '))
        this.nome = nome
        this.idade = idade
    }

    falar(msg) {
        msg = alert(`Seu nome é: ${this.nome} e você tem ${this.idade} anos de idade!`)
        return msg
    }
}


/* 

Pessoa.prototype.falar = function () {
    function Pessoa() {
        this.nome = prompt('Informe seu nome: ');
        this.idade = Number(prompt('Informe sua idade: '));
    }
    alert(`Seu nome é: ${pessoa1.nome} e você tem ${pessoa1.idade} anos de idade!`)
}

*/

const pessoa1 = new Pessoa()
const pessoa2 = new Pessoa()

pessoa1.falar();
pessoa2.falar();
