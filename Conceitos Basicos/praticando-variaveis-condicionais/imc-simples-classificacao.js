/* 
═══════════════════════════════════════════════════════════════════════════════
⚖️ CALCULADORA DE IMC COM CLASSIFICAÇÃO 📊
═══════════════════════════════════════════════════════════════════════════════

📌 OBJETIVO:
Calcular o Índice de Massa Corporal (IMC) e classificar o resultado de acordo
com os padrões da Organização Mundial da Saúde (OMS).

📌 FÓRMULA:
IMC = peso (kg) ÷ altura² (m²)

📌 CLASSIFICAÇÃO OMS:
• Abaixo de 18,5    → Abaixo do peso
• 18,5 a 24,9       → Peso normal
• 25,0 a 29,9       → Sobrepeso
• 30,0 a 34,9       → Obesidade grau 1
• 35,0 a 39,9       → Obesidade grau 2
• 40,0 ou mais      → Obesidade grau 3

⚠️ Este código roda no NAVEGADOR (usa prompt/alert)

═══════════════════════════════════════════════════════════════════════════════
*/

console.log('\n═══════════════════════════════════════════════════════');
console.log('⚖️ CALCULADORA DE IMC COM CLASSIFICAÇÃO');
console.log('═══════════════════════════════════════════════════════\n');

/* 
📌 CONCEITO: CAPTURA DE DADOS NUMÉRICOS
- prompt(): captura entrada como string
- Number(): converte string para número
- Importante validar os dados capturados
*/

console.log('🔄 Capturando dados do usuário...');

peso = Number(prompt("Digite seu peso em kg:"));
altura = Number(prompt("Digite sua altura em metros:"));

console.log('📊 Dados capturados:');
console.log('  Peso:', peso, 'kg');
console.log('  Altura:', altura, 'm');

/* 
📌 CONCEITO: CÁLCULO DE IMC
- Math.pow(base, expoente): eleva um número a uma potência
- altura² = altura × altura
- Alternativamente: altura ** 2
*/

imc = peso / Math.pow(altura, 2);
// Ou: imc = peso / (altura ** 2);

console.log('\n💡 IMC calculado:', imc);

/* 
📌 CONCEITO: FUNÇÃO DE ARREDONDAMENTO
- Math.pow(10, casas): cria o fator multiplicador
- Math.round(): arredonda para o inteiro mais próximo
- Multiplica → arredonda → divide: técnica padrão de arredondamento
*/

function arredondar(valor, casasDecimais) {
    const fator = Math.pow(10, casasDecimais);
    return Math.round(valor * fator) / fator;
}

imc = arredondar(imc, 2);
console.log('📊 IMC arredondado:', imc);

alert("Seu IMC é: " + imc);

console.log('\n═══════════════════════════════════════════════════════');
console.log('📖 CLASSIFICAÇÃO DO IMC');
console.log('═══════════════════════════════════════════════════════\n');

/* 
📌 CONCEITO: ESTRUTURA CONDICIONAL ENCADEADA
- if/else if/else: testa múltiplas condições em sequência
- Ordem importa: testa da menor para a maior
- Cada faixa de IMC tem uma classificação específica
- Baseado nos padrões da OMS
*/

function classificarIMC(imc) {
    console.log('🔍 Classificando IMC:', imc);
    
    if (imc < 18.5) {
        console.log('  Resultado: Abaixo do peso');
        alert("📉 Abaixo do peso");
    } else if (imc >= 18.5 && imc < 24.9) {
        console.log('  Resultado: Peso normal');
        alert("✅ Peso normal");
    } else if (imc >= 25 && imc < 29.9) {
        console.log('  Resultado: Sobrepeso');
        alert("⚠️ Sobrepeso");
    } else if (imc >= 30 && imc < 34.9) {
        console.log('  Resultado: Obesidade grau 1');
        alert("🔴 Obesidade grau 1");
    } else if (imc >= 35 && imc < 39.9) {
        console.log('  Resultado: Obesidade grau 2');
        alert("🔴 Obesidade grau 2");
    } else {
        console.log('  Resultado: Obesidade grau 3');
        alert("🔴 Obesidade grau 3");
    }
}

classificarIMC(imc);

console.log('\n═══════════════════════════════════════════════════════');
console.log('📋 RESUMO - CONCEITOS APRENDIDOS');
console.log('═══════════════════════════════════════════════════════\n');

console.log(`
✅ Conceitos utilizados:
   └─ Captura de entrada com prompt()
   └─ Conversão de tipos (Number)
   └─ Operações matemáticas (divisão, potência)
   └─ Math.pow() para exponenciação
   └─ Funções personalizadas (arredondar)
   └─ Estruturas condicionais encadeadas
   └─ Comparações numéricas
   └─ Classificação por faixas

📊 Tabela de Classificação IMC:
   • < 18,5    → Abaixo do peso
   • 18,5-24,9 → Peso normal
   • 25,0-29,9 → Sobrepeso
   • 30,0-34,9 → Obesidade I
   • 35,0-39,9 → Obesidade II
   • ≥ 40,0    → Obesidade III

🎯 Melhorias possíveis:
   └─ Adicionar validação de dados
   └─ Calcular peso ideal
   └─ Mostrar recomendações
   └─ Gráfico visual

═══════════════════════════════════════════════════════
`);

console.log('✅ Cálculo concluído!');