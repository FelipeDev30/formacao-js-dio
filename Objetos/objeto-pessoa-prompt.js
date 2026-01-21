/* 
═══════════════════════════════════════════════════════════════════════════
    📚 GUIA DE ESTUDO: OBJETOS LITERAIS E MÉTODOS
═══════════════════════════════════════════════════════════════════════════
    Descrição: Criando e manipulando objetos com entrada do usuário
    
    📖 TÓPICOS ABORDADOS:
    1. Objetos literais
    2. Propriedades de objetos
    3. Métodos (funções dentro de objetos)
    4. Notação de colchetes para acesso/modificação
    5. Palavra-chave this
    6. Captura de entrada com prompt
    
    📌 FUNCIONALIDADES:
    • Definir objeto pessoa com propriedades iniciais
    • Modificar propriedades via entrada do usuário
    • Método para descrever a pessoa
    • Exibir resultado via alert e console
    
    ⚠️ Este código roda no NAVEGADOR (usa prompt/alert)
═══════════════════════════════════════════════════════════════════════════
*/

console.log('\n═══ 🔄 ATUALIZAÇÃO DE DADOS PESSOAIS ═══\n');

const pessoa = {
    nome: "Felipe",
    idade: 31,
    profissao: "Desenvolvedor Full Stack",

    descrever() {
        return `Meu nome é ${this.nome}, tenho ${this.idade} anos e trabalho como ${this.profissao}.`;
    }
}

pessoa['nome'] = prompt("Digite o novo nome:");
pessoa['idade'] = Number(prompt("Digite a nova idade:"));
pessoa['profissao'] = prompt("Digite a nova profissão:");
alert(pessoa.descrever());
console.log(pessoa.descrever());

