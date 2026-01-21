/* 
═══════════════════════════════════════════════════════════════════════════════
💳 CALCULADORA DE PREÇO COM FORMAS DE PAGAMENTO 💰
═══════════════════════════════════════════════════════════════════════════════

📌 OBJETIVO:
Calcular o preço final de um produto baseado na forma de pagamento escolhida.
Aplicar descontos ou acréscimos conforme a opção selecionada.

📌 FORMAS DE PAGAMENTO:
1. À vista em débito     → 10% de desconto 💚
2. À vista (dinheiro/PIX) → 15% de desconto 💚💚
3. Parcelado em 2x       → Preço normal (sem juros) 💛
4. Parcelado 3x ou mais  → 10% de acréscimo (juros) 🔴

📌 CONCEITOS:
- Estruturas condicionais
- Cálculo de porcentagens
- Funções com parâmetros
- Formatação de valores monetários

⚠️ Este código roda no NAVEGADOR (usa prompt/alert)

═══════════════════════════════════════════════════════════════════════════════
*/

console.log('\n═══════════════════════════════════════════════════════');
console.log('💳 CALCULADORA DE PREÇO FINAL');
console.log('═══════════════════════════════════════════════════════\n');

/* 
📌 CONCEITO: VALOR BASE E OPÇÕES
- const: valor que não muda (preço da etiqueta)
- \n: quebra de linha no prompt para melhor legibilidade
- Number(): converte a escolha do usuário para número
*/

const precoEtiqueta = 119.90;

console.log('💰 Preço da etiqueta: R$', precoEtiqueta.toFixed(2));
console.log('\n🔄 Solicitando forma de pagamento...');

const formaDePagamento = Number(prompt(
    "Digite a forma de pagamento:\n" +
    "1 - À vista em débito (10% desconto)\n" +
    "2 - À vista no dinheiro ou PIX (15% desconto)\n" +
    "3 - Em 2x no cartão (sem juros)\n" +
    "4 - 3x ou mais no cartão (10% juros)"
));

console.log('✅ Opção selecionada:', formaDePagamento);

let precoFinal;

console.log('\n═══════════════════════════════════════════════════════');
console.log('📊 CÁLCULO DO PREÇO FINAL');
console.log('═══════════════════════════════════════════════════════\n');

/* 
📌 CONCEITO: FUNÇÃO DE CÁLCULO COM CONDICIONAIS
- Recebe preço base e forma de pagamento
- Aplica o desconto ou acréscimo apropriado
- Cálculo de porcentagem: valor * (percentual / 100)
- Desconto: preço - (preço * taxa)
- Acréscimo: preço + (preço * taxa)
*/

function calcularPrecoFinal(preco, formaPagamento) {
    console.log('🔍 Processando pagamento tipo:', formaPagamento);
    
    if (formaPagamento === 1) {
        // Débito à vista: 10% de desconto
        const desconto = preco * 0.1;
        precoFinal = preco - desconto;
        console.log('  💚 Débito à vista');
        console.log('  Desconto: R$', desconto.toFixed(2), '(10%)');
        console.log('  Preço final: R$', precoFinal.toFixed(2));
    } else if (formaPagamento === 2) {
        // Dinheiro/PIX: 15% de desconto
        const desconto = preco * 0.15;
        precoFinal = preco - desconto;
        console.log('  💚💚 Dinheiro/PIX');
        console.log('  Desconto: R$', desconto.toFixed(2), '(15%)');
        console.log('  Preço final: R$', precoFinal.toFixed(2));
    } else if (formaPagamento === 3) {
        // 2x no cartão: sem desconto nem juros
        precoFinal = preco;
        console.log('  💛 Parcelado em 2x (sem juros)');
        console.log('  Preço final: R$', precoFinal.toFixed(2));
        console.log('  Parcelas: 2x de R$', (precoFinal / 2).toFixed(2));
    } else if (formaPagamento === 4) {
        // 3x ou mais: 10% de acréscimo (juros)
        const juros = preco * 0.1;
        precoFinal = preco + juros;
        console.log('  🔴 Parcelado em 3x ou mais (com juros)');
        console.log('  Juros: R$', juros.toFixed(2), '(10%)');
        console.log('  Preço final: R$', precoFinal.toFixed(2));
        console.log('  Exemplo 3x: 3x de R$', (precoFinal / 3).toFixed(2));
    } else {
        console.log('  ❌ Opção inválida!');
        alert('❌ Forma de pagamento inválida!');
        return;
    }
}

calcularPrecoFinal(precoEtiqueta, formaDePagamento);

if (precoFinal !== undefined) {
    console.log('\n✅ Cálculo concluído!');
    alert(`💰 O preço final a pagar é R$ ${precoFinal.toFixed(2)}`);
}

console.log('\n═══════════════════════════════════════════════════════');
console.log('📖 EXEMPLO: COMPARAÇÃO DE TODAS AS OPÇÕES');
console.log('═══════════════════════════════════════════════════════\n');

/* 
📌 CONCEITO: ANÁLISE COMPARATIVA
- Mostrar o preço final em cada forma de pagamento
- Ajuda o cliente a tomar a melhor decisão
*/

function compararFormasPagamento(preco) {
    console.log(`\n💡 Comparando todas as formas de pagamento para R$ ${preco.toFixed(2)}:\n`);
    
    const opcoes = [
        { nome: 'Débito à vista', desconto: 0.10, tipo: 'desconto' },
        { nome: 'Dinheiro/PIX', desconto: 0.15, tipo: 'desconto' },
        { nome: '2x sem juros', desconto: 0, tipo: 'normal' },
        { nome: '3x ou mais', desconto: 0.10, tipo: 'juros' }
    ];
    
    opcoes.forEach((opcao, index) => {
        let valorFinal;
        
        if (opcao.tipo === 'desconto') {
            valorFinal = preco - (preco * opcao.desconto);
            const economia = preco - valorFinal;
            console.log(`${index + 1}. ${opcao.nome}:`);
            console.log(`   R$ ${valorFinal.toFixed(2)} (economize R$ ${economia.toFixed(2)})`);
        } else if (opcao.tipo === 'juros') {
            valorFinal = preco + (preco * opcao.desconto);
            const acrescimo = valorFinal - preco;
            console.log(`${index + 1}. ${opcao.nome}:`);
            console.log(`   R$ ${valorFinal.toFixed(2)} (+ R$ ${acrescimo.toFixed(2)} de juros)`);
        } else {
            valorFinal = preco;
            console.log(`${index + 1}. ${opcao.nome}:`);
            console.log(`   R$ ${valorFinal.toFixed(2)}`);
        }
    });
}

compararFormasPagamento(precoEtiqueta);

console.log('\n═══════════════════════════════════════════════════════');
console.log('📋 RESUMO - CONCEITOS APRENDIDOS');
console.log('═══════════════════════════════════════════════════════\n');

console.log(`
✅ Conceitos utilizados:
   └─ Constantes (const) para valores fixos
   └─ Estruturas condicionais (if/else if)
   └─ Funções com parâmetros
   └─ Cálculo de porcentagens
   └─ Operações matemáticas (soma, subtração, multiplicação)
   └─ Formatação com toFixed()
   └─ Template literals
   └─ Validação de entrada

💰 Tabela de Descontos/Acréscimos:
   1. Débito      → -10% (desconto)
   2. Dinheiro/PIX → -15% (maior desconto!)
   3. 2x cartão   → 0% (sem alteração)
   4. 3x+ cartão  → +10% (juros)

💡 Dica: Para calcular porcentagem:
   Desconto: valor - (valor * taxa)
   Acréscimo: valor + (valor * taxa)

🎯 Melhorias possíveis:
   └─ Adicionar mais formas de pagamento
   └─ Permitir escolher número de parcelas
   └─ Calcular juros compostos
   └─ Mostrar comparação automática
   └─ Validar entrada do usuário

═══════════════════════════════════════════════════════
`);

console.log('✅ Programa finalizado!');