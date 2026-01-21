/* 
═══════════════════════════════════════════════════════════════════════════════
👋 EXERCÍCIO: SAUDAÇÃO INTERATIVA NO NAVEGADOR 🌐
═══════════════════════════════════════════════════════════════════════════════

📌 OBJETIVO:
Criar uma interação simples com o usuário usando prompt e alert do navegador.
Aprender a capturar entrada do usuário e exibir mensagens personalizadas.

📌 CONCEITOS ABORDADOS:
- Funções com parâmetros
- prompt(): capturar dados do usuário
- alert(): exibir mensagens
- Template literals para concatenação

⚠️ IMPORTANTE:
Este código precisa rodar no NAVEGADOR (não no Node.js)
Use um arquivo HTML que importe este script!

═══════════════════════════════════════════════════════════════════════════════
*/

console.log('\n═══════════════════════════════════════════════════════');
console.log('👋 SISTEMA DE SAUDAÇÃO INTERATIVA');
console.log('═══════════════════════════════════════════════════════\n');

/* 
📌 CONCEITO: FUNÇÕES COM CAPTURA DE ENTRADA
- prompt(): exibe uma caixa de diálogo pedindo entrada
- alert(): exibe uma mensagem na tela
- Os parâmetros são opcionais inicialmente e preenchidos dentro da função
*/

function saudacao(nome, idade) {
    console.log('🔄 Iniciando captura de dados...');
    
    // Captura a idade do usuário
    idade = prompt("Digite sua idade: ");
    console.log('  Idade capturada:', idade);
    
    // Captura o nome do usuário
    nome = prompt("Digite seu nome: ");
    console.log('  Nome capturado:', nome);
    
    // Exibe mensagem de boas-vindas
    const mensagem = `Olá, ${nome}! Você tem ${idade} anos de idade! Seja bem-vindo(a)!`;
    alert(mensagem);
    console.log('✅ Mensagem exibida:', mensagem);
}

console.log('\n═══════════════════════════════════════════════════════');
console.log('📖 EXEMPLO: VERSÃO MELHORADA');
console.log('═══════════════════════════════════════════════════════\n');

/* 
📌 CONCEITO: VALIDAÇÃO E TRATAMENTO DE DADOS
- Validar se os dados foram preenchidos
- Converter tipos quando necessário
- Fornecer feedback adequado ao usuário
*/

function saudacaoMelhorada() {
    console.log('🔄 Versão melhorada - com validação');
    
    // Captura e valida o nome
    let nome = prompt("Digite seu nome: ");
    
    if (!nome || nome.trim() === '') {
        alert('❌ Nome não pode estar vazio!');
        console.log('❌ Validação falhou: nome vazio');
        return;
    }
    
    // Captura e valida a idade
    let idadeTexto = prompt("Digite sua idade: ");
    let idade = Number(idadeTexto);
    
    if (isNaN(idade) || idade <= 0 || idade > 150) {
        alert('❌ Idade inválida! Digite um número entre 1 e 150.');
        console.log('❌ Validação falhou: idade inválida -', idadeTexto);
        return;
    }
    
    // Mensagem personalizada baseada na idade
    let categoria;
    if (idade < 18) {
        categoria = "jovem";
    } else if (idade < 60) {
        categoria = "adulto(a)";
    } else {
        categoria = "experiente";
    }
    
    const mensagem = `Olá, ${nome}! Você tem ${idade} anos e é ${categoria}. Seja bem-vindo(a)!`;
    alert(mensagem);
    console.log('✅ Mensagem personalizada exibida:', mensagem);
}

console.log('\n═══════════════════════════════════════════════════════');
console.log('📖 EXEMPLO: VERSÃO COM MÚLTIPLAS INFORMAÇÕES');
console.log('═══════════════════════════════════════════════════════\n');

/* 
📌 CONCEITO: CAPTURA DE MÚLTIPLOS DADOS
- Coletar várias informações do usuário
- Organizar dados em um objeto
- Apresentar resumo completo
*/

function cadastroCompleto() {
    console.log('🔄 Cadastro completo iniciado');
    
    const usuario = {
        nome: prompt("Qual é o seu nome?") || "Anônimo",
        idade: Number(prompt("Qual é a sua idade?")) || 0,
        cidade: prompt("Em qual cidade você mora?") || "Não informada",
        profissao: prompt("Qual é a sua profissão?") || "Não informada"
    };
    
    console.log('📋 Dados coletados:', usuario);
    
    const resumo = `
    📋 DADOS CADASTRADOS:
    
    Nome: ${usuario.nome}
    Idade: ${usuario.idade} anos
    Cidade: ${usuario.cidade}
    Profissão: ${usuario.profissao}
    
    Obrigado por compartilhar suas informações!
    `;
    
    alert(resumo);
    console.log('✅ Cadastro finalizado');
    
    return usuario;
}

console.log('\n═══════════════════════════════════════════════════════');
console.log('🎯 INSTRUÇÕES DE USO');
console.log('═══════════════════════════════════════════════════════\n');

console.log(`
Para executar este código:

1. Crie um arquivo HTML (ex: index.html)
2. Adicione a tag <script src="saudacao-terminal.js"></script>
3. Abra o HTML no navegador
4. Chame a função desejada no console ou adicione ao HTML:

Exemplo de HTML:
<!DOCTYPE html>
<html>
<head>
    <title>Saudação</title>
</head>
<body>
    <h1>Sistema de Saudação</h1>
    <button onclick="saudacao()">Saudação Simples</button>
    <button onclick="saudacaoMelhorada()">Saudação Melhorada</button>
    <button onclick="cadastroCompleto()">Cadastro Completo</button>
    
    <script src="saudacao-terminal.js"></script>
</body>
</html>
`);

// Executa a função principal (descomente a linha abaixo)
// saudacao();

console.log('\n═══════════════════════════════════════════════════════');
console.log('📋 RESUMO - CONCEITOS APRENDIDOS');
console.log('═══════════════════════════════════════════════════════\n');

console.log(`
✅ Conceitos utilizados:
   └─ Funções com parâmetros
   └─ prompt() - captura de entrada do usuário
   └─ alert() - exibição de mensagens
   └─ Template literals (\`\${}\`)
   └─ Validação de dados de entrada
   └─ Conversão de tipos (Number)
   └─ Estruturas condicionais (if/else)
   └─ Objetos para organizar dados

⚠️ Limitações de prompt/alert:
   └─ Apenas funciona no navegador
   └─ Interface simples e limitada
   └─ Bloqueia a execução do código
   └─ Não é usado em aplicações modernas

🎯 Alternativas modernas:
   └─ Formulários HTML
   └─ Bibliotecas de UI (React, Vue)
   └─ APIs de entrada personalizadas

═══════════════════════════════════════════════════════
`);
