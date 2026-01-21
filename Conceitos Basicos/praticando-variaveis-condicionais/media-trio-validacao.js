/* 
═══════════════════════════════════════════════════════════════════════════════
📝 CALCULADORA DE MÉDIA ESCOLAR COM VALIDAÇÃO ✅
═══════════════════════════════════════════════════════════════════════════════

📌 OBJETIVO:
Calcular a média de três notas e determinar a situação do aluno.
Incluir validação completa dos dados de entrada.

📌 REGRAS DE APROVAÇÃO:
• Média < 5,0        → Reprovado ❌
• Média 5,0 a 6,9    → Recuperação ⚠️
• Média ≥ 7,0        → Aprovado ✅

📌 VALIDAÇÕES:
• Verificar se é um número válido
• Nota deve estar entre 0 e 10
• Interromper se houver dados inválidos

⚠️ Este código roda no NAVEGADOR (usa prompt/alert)

═══════════════════════════════════════════════════════════════════════════════
*/

console.log('\n═══════════════════════════════════════════════════════');
console.log('📝 CALCULADORA DE MÉDIA ESCOLAR');
console.log('═══════════════════════════════════════════════════════\n');

/* 
📌 CONCEITO: CAPTURA DE MÚLTIPLOS VALORES
- parseFloat(): converte string para número decimal
- Aceita valores com vírgula ou ponto
- Importante: verificar se a conversão foi bem-sucedida
*/

console.log('🔄 Capturando notas do aluno...');

let n1 = parseFloat(prompt("Digite a primeira nota:"));
let n2 = parseFloat(prompt("Digite a segunda nota:"));
let n3 = parseFloat(prompt("Digite a terceira nota:"));
notas = [n1, n2, n3];

console.log('📊 Notas capturadas:', notas);

console.log('\n═══════════════════════════════════════════════════════');
console.log('✅ VALIDAÇÃO DAS NOTAS');
console.log('═══════════════════════════════════════════════════════\n');

/* 
📌 CONCEITO: VALIDAÇÃO COM LOOP
- for: itera sobre cada nota do array
- isNaN(): verifica se não é um número (is Not a Number)
- Múltiplas condições: número inválido OU fora do intervalo
- throw: lança erro e interrompe a execução
*/

console.log('🔍 Validando notas...');

for (let i = 0; i < notas.length; i++) {
    console.log(`  Nota ${i + 1}: ${notas[i]}`);
    
    if (isNaN(notas[i]) || notas[i] < 0 || notas[i] > 10) {
        console.log(`  ❌ ERRO: Nota ${i + 1} inválida!`);
        alert("❌ Nota inválida! Por favor, insira uma nota entre 0 e 10.");
        throw new Error("Nota inválida");
    }
}

console.log('✅ Todas as notas são válidas!');

console.log('\n═══════════════════════════════════════════════════════');
console.log('📊 CÁLCULO DA MÉDIA');
console.log('═══════════════════════════════════════════════════════\n');

/* 
📌 CONCEITO: CÁLCULO DE MÉDIA ARITMÉTICA
- Soma de todos os valores dividido pela quantidade
- toFixed(2): formata com 2 casas decimais
- Acesso aos elementos do array por índice [0], [1], [2]
*/

let media = (notas[0] + notas[1] + notas[2]) / 3;

console.log('Cálculo:', notas.join(' + '), '÷ 3 =', media.toFixed(2));

console.log('\n═══════════════════════════════════════════════════════');
console.log('🎯 RESULTADO FINAL');
console.log('═══════════════════════════════════════════════════════\n');

/* 
📌 CONCEITO: CLASSIFICAÇÃO POR FAIXAS
- if/else if/else: verifica a média e determina a situação
- Ordem das condições é importante
- Template literals (`${}`) para mensagem dinâmica
*/

if (isNaN(media)) {
    console.log('❌ Erro no cálculo da média');
    alert("Por favor, insira valores numéricos válidos para as notas.");
} else if (media < 5) {
    console.log('📊 Média:', media.toFixed(2));
    console.log('📛 Situação: REPROVADO');
    alert(`Média: ${media.toFixed(2)} - ❌ Reprovado`);
} else if (media >= 5 && media < 7) {
    console.log('📊 Média:', media.toFixed(2));
    console.log('⚠️ Situação: RECUPERAÇÃO');
    alert(`Média: ${media.toFixed(2)} - ⚠️ Recuperação`);
} else {
    console.log('📊 Média:', media.toFixed(2));
    console.log('✅ Situação: APROVADO');
    alert(`Média: ${media.toFixed(2)} - ✅ Aprovado`);
}

console.log('\n═══════════════════════════════════════════════════════');
console.log('📋 RESUMO - CONCEITOS APRENDIDOS');
console.log('═══════════════════════════════════════════════════════\n');

console.log(`
✅ Conceitos utilizados:
   └─ Arrays para armazenar múltiplos valores
   └─ parseFloat() para conversão
   └─ Loop for para iteração
   └─ Validação com isNaN()
   └─ Validação de intervalo (0-10)
   └─ Tratamento de erros (throw)
   └─ Cálculo de média aritmética
   └─ Estruturas condicionais encadeadas
   └─ Formatação com toFixed()
   └─ Template literals

📊 Regras de Classificação:
   • Média < 5,0     → Reprovado
   • Média 5,0-6,9   → Recuperação
   • Média ≥ 7,0     → Aprovado

🎯 Melhorias possíveis:
   └─ Permitir mais de 3 notas
   └─ Calcular nota necessária para aprovação
   └─ Adicionar peso diferente para cada nota
   └─ Salvar histórico de notas

═══════════════════════════════════════════════════════
`);

console.log('✅ Análise concluída!');

