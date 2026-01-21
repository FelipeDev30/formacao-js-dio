/* 
═══════════════════════════════════════════════════════════════════════════
    📚 GUIA DE ESTUDO: CLOSURES (FECHAMENTOS)
═══════════════════════════════════════════════════════════════════════════
    Descrição: Entendendo closures em JavaScript
    
    📖 O QUE SÃO CLOSURES?
    
    Closures são uma característica poderosa do JavaScript que permite
    que uma função "lembre" do escopo em que foi criada, mesmo quando é
    executada fora desse escopo.
    
    📌 CONCEITO-CHAVE:
    Uma função pode acessar variáveis de seu escopo pai, mesmo após
    esse escopo ter sido encerrado.
    
    📖 TÓPICOS ABORDADOS:
    • Escopo léxico
    • Funções aninhadas
    • Memória de contexto
    • Arrow functions retornando funções
    • Curry (aplicação parcial de funções)
    
    📌 EXEMPLO PRÁTICO:
    Soma parcial - onde fixamos um valor e retornamos uma função
    que completa a operação
═══════════════════════════════════════════════════════════════════════════
*/

console.log('\n═══ 🔒 CLOSURES EM AÇÃO ═══\n');

function soma(x) {
    return (y) => {
        return x + y;
    }
}

const somaParcial = soma(10);

console.log(somaParcial(20));
