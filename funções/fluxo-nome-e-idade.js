/* 
═══════════════════════════════════════════════════════════════════════════
    📚 GUIA DE ESTUDO: FUNÇÕES E FLUXO DE EXECUÇÃO
═══════════════════════════════════════════════════════════════════════════
    Descrição: Captura de dados e verificação de idade
    
    📖 TÓPICOS ABORDADOS:
    1. Declaração de funções
    2. Captura de entrada com prompt
    3. Conversão de tipos (Number)
    4. Estruturas condicionais (if/else)
    5. IIFE (Immediately Invoked Function Expression)
    
    📌 FUNCIONALIDADES:
    • Capturar nome do usuário
    • Verificar maioridade (idade >= 18)
    • Exibir mensagens personalizadas
    
    ⚠️ Este código roda no NAVEGADOR (usa prompt/alert)
═══════════════════════════════════════════════════════════════════════════
*/

console.log('\n═══ 👤 SISTEMA DE CADASTRO E VERIFICAÇÃO ═══\n');

function meuNomeEh(nome) {
    nome = prompt("Qual o seu nome?");
    alert("Meu nome é " + nome);
}

function verificarIdade(idade) {
    idade = Number(prompt("Qual a sua idade?"));
    if (idade >= 18) {
        alert("Você é maior de idade.");
    } else {
        alert("Você é menor de idade.");
    }
}

// IIFE - Função autoinvocada que inicia o programa
(function main() {
    meuNomeEh();
    verificarIdade();
})();
