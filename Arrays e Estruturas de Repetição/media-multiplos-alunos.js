/* 
═══════════════════════════════════════════════════════════════════════════
    📚 GUIA DE ESTUDO: SISTEMA DE NOTAS DE MÚLTIPLOS ALUNOS
═══════════════════════════════════════════════════════════════════════════
    Descrição: Calculadora de médias escolares para vários alunos
    
    📖 TÓPICOS ABORDADOS:
    1. Arrays de objetos
    2. Estrutura de repetição while
    3. Coleta de dados via prompt
    4. Cálculo e classificação de médias
    5. Estruturas condicionais aninhadas
    
    📌 CRITÉRIOS DE APROVAÇÃO:
    • Média >= 7.0  → Aprovado ✅
    • Média >= 5.0  → Recuperação ⚠️
    • Média < 5.0   → Reprovado ❌
    
    ⚠️ Este código roda no NAVEGADOR (usa prompt/alert)
═══════════════════════════════════════════════════════════════════════════
*/

/* 
═══ 💡 VERSÃO SIMPLIFICADA (COMENTADA) ═══

const notas = [];
notas.push(Number(prompt("Digite a primeira nota: ")));
notas.push(Number(prompt("Digite a segunda nota: ")));
notas.push(Number(prompt("Digite a terceira nota: ")));

let soma = 0;
for (let i = 0; i < notas.length; i++) {
  soma += notas[i];
}

const media = soma / notas.length;

if (media >= 7) {
  alert("Aprovado com média: " + media.toFixed(2));
} else if (media >= 5) {
  alert("Recuperação com média: " + media.toFixed(2));
} else {
  alert("Reprovado com média: " + media.toFixed(2));
}
*/

console.log('\n═══ 📊 SISTEMA DE NOTAS - MÚLTIPLOS ALUNOS ═══\n');

const alunos = [];

while (true) {
  const nome = prompt("Digite o nome do aluno (ou '0' para encerrar): ");
  if (!nome) continue; // caso usuário apenas aperte Enter/Cancel
  if (nome == "0") break;

  const notasDoAluno = [];
  notasDoAluno.push(Number(prompt("Digite a primeira nota de " + nome + ": ")));
  notasDoAluno.push(Number(prompt("Digite a segunda nota de " + nome + ": ")));
  notasDoAluno.push(Number(prompt("Digite a terceira nota de " + nome + ": ")));
  notasDoAluno.push(Number(prompt("Digite a quarta nota de " + nome + ": ")));

  const soma = notasDoAluno[0] + notasDoAluno[1] + notasDoAluno[2] + notasDoAluno[3];
  const mediaAluno = soma / 4;

  alunos.push({ nome, media: mediaAluno });
}

console.log('\n═══ 📋 RESULTADO DAS AVALIAÇÕES ═══\n');

for (let i = 0; i < alunos.length; i++) {
  const aluno = alunos[i];
  const media = aluno.media;

  if (media >= 7) {
    alert(`${aluno.nome} está Aprovado com média: ${media.toFixed(2)}`);
  } else if (media >= 5) {
    alert(`${aluno.nome} está em Recuperação com média: ${media.toFixed(2)}`);
  } else {
    alert(`${aluno.nome} está Reprovado com média: ${media.toFixed(2)}`);
  }
}


