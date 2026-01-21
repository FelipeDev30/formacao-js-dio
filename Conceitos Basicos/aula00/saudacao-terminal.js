/* 
═══════════════════════════════════════════════════════════════════════════
    📚 GUIA DE ESTUDO: INTERAÇÃO COM O USUÁRIO
═══════════════════════════════════════════════════════════════════════════
    Descrição: Como conversar com o terminal usando JavaScript
    
    📖 TÓPICOS ABORDADOS:
    1. Arrow functions
    2. Captura de entrada com prompt
    3. Template strings
    4. Exibição de mensagens com alert
    
    ⚠️ Este código roda no NAVEGADOR (usa prompt/alert)
═══════════════════════════════════════════════════════════════════════════
*/

console.log('\n═══ 👋 SISTEMA DE SAUDAÇÃO ═══\n');

let saudacao = (nome, idade) => {
    idade = prompt("Digite sua idade: ");
    nome = prompt("Digite seu nome: ");
    alert(`Olá, ${nome} você tem ${idade} anos de idade! Seja bem-vindo(a)!`);
}

saudacao();
