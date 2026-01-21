/* 
═══════════════════════════════════════════════════════════════════════════════
🚗 CALCULADORA DE VIAGEM COM MÚLTIPLOS COMBUSTÍVEIS ⛽
═══════════════════════════════════════════════════════════════════════════════

📌 OBJETIVO:
Calcular o custo de uma viagem considerando diferentes tipos de combustível.
O programa deve permitir escolher entre gasolina e etanol.

📌 DADOS NECESSÁRIOS:
1. Preço da gasolina (R$)
2. Preço do etanol (R$)
3. Tipo de combustível do carro (gasolina/etanol)
4. Consumo médio do carro (KM por litro)
5. Distância da viagem (KM)

📌 CONCEITOS ABORDADOS:
- Estruturas condicionais (if/else)
- Validação de entrada
- Tratamento de erros
- Formatação de valores monetários
- Interação com usuário (prompt/alert)

⚠️ IMPORTANTE: Este código roda no NAVEGADOR (usa prompt/alert)

═══════════════════════════════════════════════════════════════════════════════
*/

console.log('\n═══════════════════════════════════════════════════════');
console.log('🚗 CALCULADORA DE VIAGEM - FLEX');
console.log('═══════════════════════════════════════════════════════\n');

/* 
📌 CONCEITO: CONSTANTES DE CONFIGURAÇÃO
- Preços fixos definidos no início
- Facilita manutenção (um único lugar para atualizar)
- const: valor não muda durante a execução
*/

const precoGasolina = 5.79;
const precoEtanol = 4.58;

console.log('💰 Preços do combustível:');
console.log('  Gasolina: R$', precoGasolina);
console.log('  Etanol: R$', precoEtanol);

/* 
📌 CONCEITO: VALIDAÇÃO DE ENTRADA DO USUÁRIO
- Verificar se o usuário cancelou o prompt (!entradaTipo)
- trim(): remove espaços em branco das pontas
- toLowerCase(): converte para minúsculas (facilita comparação)
- Previne erros e melhora experiência do usuário
*/

console.log('\n🔄 Iniciando captura de dados...');

// Captura o tipo de combustível
const entradaTipo = prompt('Digite o tipo de combustível do seu carro (gasolina/etanol): ');

// Validação: verifica se o usuário cancelou
if (!entradaTipo) {
    alert("⚠️ Operação cancelada.");
    console.log('❌ Usuário cancelou a operação');
} else {
    // Normaliza a entrada: remove espaços e converte para minúsculas
    const tipoCombustivel = entradaTipo.trim().toLowerCase();
    console.log('  Tipo de combustível:', tipoCombustivel);
    
    // Captura consumo do carro
    const consumoKmPorLitro = Number(prompt('Digite o consumo médio de combustível do seu carro (km por litro): '));
    console.log('  Consumo:', consumoKmPorLitro, 'km/l');
    
    // Captura distância da viagem
    const distanciaKm = Number(prompt('Digite a distância em KM da viagem: '));
    console.log('  Distância:', distanciaKm, 'km');
    
    /* 
    📌 CONCEITO: ESTRUTURAS CONDICIONAIS
    - if/else if/else: escolhe qual código executar
    - Determina o preço baseado no tipo de combustível
    - throw: lança um erro e interrompe a execução
    */
    
    let precoCombustivel;
    
    if (tipoCombustivel === "gasolina") {
        precoCombustivel = precoGasolina;
        console.log('  ✅ Combustível selecionado: GASOLINA');
    } else if (tipoCombustivel === "etanol") {
        precoCombustivel = precoEtanol;
        console.log('  ✅ Combustível selecionado: ETANOL');
    } else {
        alert("❌ Tipo de combustível inválido. Use 'gasolina' ou 'etanol'.");
        console.log('  ❌ Erro: tipo inválido -', tipoCombustivel);
        throw new Error("Tipo de combustível inválido.");
    }
    
    /* 
    📌 CONCEITO: CÁLCULO DO CUSTO
    - Litros = Distância ÷ Consumo
    - Custo = Litros × Preço por Litro
    */
    
    const litrosConsumidos = distanciaKm / consumoKmPorLitro;
    const custoTotal = litrosConsumidos * precoCombustivel;
    
    console.log('\n📊 CÁLCULO:');
    console.log('  Litros necessários:', litrosConsumidos.toFixed(2), 'L');
    console.log('  Preço do combustível: R$', precoCombustivel);
    console.log('  Custo total: R$', custoTotal.toFixed(2));
    
    /* 
    📌 CONCEITO: FORMATAÇÃO DE MOEDA
    - Intl.NumberFormat: API de internacionalização do JavaScript
    - 'pt-BR': formato brasileiro (vírgula e ponto)
    - currency: 'BRL': moeda Real brasileiro
    - Resultado: R$ 1.234,56
    */
    
    const formatadorBRL = new Intl.NumberFormat('pt-BR', { 
        style: 'currency', 
        currency: 'BRL' 
    });
    
    const mensagemFinal = `
    💰 RESULTADO DA VIAGEM
    
    📍 Distância: ${distanciaKm} km
    ⛽ Combustível: ${tipoCombustivel}
    🚗 Consumo: ${consumoKmPorLitro} km/l
    📊 Litros: ${litrosConsumidos.toFixed(2)} L
    
    💵 CUSTO TOTAL: ${formatadorBRL.format(custoTotal)}
    `;
    
    alert(mensagemFinal);
    console.log('\n✅ Cálculo concluído com sucesso!');
}

console.log('\n═══════════════════════════════════════════════════════');
console.log('📖 EXEMPLO: VERSÃO MELHORADA COM MAIS VALIDAÇÕES');
console.log('═══════════════════════════════════════════════════════\n');

/* 
📌 CONCEITO: FUNÇÃO COMPLETA COM VALIDAÇÕES
- Validar todos os dados de entrada
- Fornecer mensagens de erro claras
- Calcular e exibir resultados detalhados
*/

function calcularCustoViagem() {
    const precos = {
        gasolina: 5.79,
        etanol: 4.58,
        diesel: 4.99
    };
    
    // Captura e valida tipo de combustível
    const tipo = prompt('Tipo de combustível (gasolina/etanol/diesel):');
    if (!tipo) {
        alert('❌ Operação cancelada!');
        return;
    }
    
    const tipoNormalizado = tipo.trim().toLowerCase();
    
    if (!precos[tipoNormalizado]) {
        alert('❌ Tipo inválido! Use: gasolina, etanol ou diesel');
        return;
    }
    
    // Captura e valida consumo
    const consumoStr = prompt('Consumo médio (km/litro):');
    const consumo = Number(consumoStr);
    
    if (isNaN(consumo) || consumo <= 0) {
        alert('❌ Consumo inválido! Digite um número maior que zero.');
        return;
    }
    
    // Captura e valida distância
    const distanciaStr = prompt('Distância da viagem (km):');
    const distancia = Number(distanciaStr);
    
    if (isNaN(distancia) || distancia <= 0) {
        alert('❌ Distância inválida! Digite um número maior que zero.');
        return;
    }
    
    // Cálculos
    const preco = precos[tipoNormalizado];
    const litros = distancia / consumo;
    const custo = litros * preco;
    
    // Formatação
    const formatador = new Intl.NumberFormat('pt-BR', { 
        style: 'currency', 
        currency: 'BRL' 
    });
    
    // Resultado
    const resultado = `
    ✅ CÁLCULO CONCLUÍDO
    
    🚗 Viagem de ${distancia} km
    ⛽ Combustível: ${tipoNormalizado.toUpperCase()}
    📊 Consumo: ${consumo} km/l
    
    📈 Análise:
    • Litros necessários: ${litros.toFixed(2)} L
    • Preço por litro: ${formatador.format(preco)}
    • Custo total: ${formatador.format(custo)}
    `;
    
    alert(resultado);
    console.log('✅ Função calcularCustoViagem() executada');
}

// Para testar a função melhorada, descomente a linha abaixo:
// calcularCustoViagem();

console.log('\n═══════════════════════════════════════════════════════');
console.log('📖 EXEMPLO: COMPARAÇÃO ENTRE COMBUSTÍVEIS');
console.log('═══════════════════════════════════════════════════════\n');

/* 
📌 CONCEITO: ANÁLISE COMPARATIVA
- Calcular custo para diferentes combustíveis
- Mostrar qual é mais econômico
- Calcular economia potencial
*/

function compararCombustiveis(distancia, consumo) {
    console.log(`\n🔍 Comparando combustíveis para ${distancia}km (consumo: ${consumo}km/l)\n`);
    
    const precos = {
        'Gasolina': 5.79,
        'Etanol': 4.58,
        'Diesel': 4.99
    };
    
    const resultados = [];
    
    for (let [tipo, preco] of Object.entries(precos)) {
        const litros = distancia / consumo;
        const custo = litros * preco;
        resultados.push({ tipo, custo, litros });
        
        console.log(`${tipo}:`);
        console.log(`  Litros: ${litros.toFixed(2)} L`);
        console.log(`  Custo: R$ ${custo.toFixed(2)}`);
    }
    
    // Encontra o mais barato
    const maisBarato = resultados.reduce((min, atual) => 
        atual.custo < min.custo ? atual : min
    );
    
    console.log(`\n✅ Mais econômico: ${maisBarato.tipo} - R$ ${maisBarato.custo.toFixed(2)}`);
}

compararCombustiveis(100, 12);
compararCombustiveis(500, 10);

console.log('\n═══════════════════════════════════════════════════════');
console.log('📋 RESUMO - CONCEITOS APRENDIDOS');
console.log('═══════════════════════════════════════════════════════\n');

console.log(`
✅ Validação de Entrada:
   └─ Verificar se usuário cancelou (!valor)
   └─ trim(): remover espaços
   └─ toLowerCase(): normalizar texto
   └─ Validar tipos numéricos (isNaN)

✅ Estruturas Condicionais:
   └─ if/else if/else para múltiplas opções
   └─ Comparações com === (recomendado)
   └─ Tratamento de erros com throw

✅ Formatação de Moeda:
   └─ Intl.NumberFormat para formato brasileiro
   └─ style: 'currency', currency: 'BRL'
   └─ Resultado: R$ 1.234,56

✅ Boas Práticas:
   └─ Constantes para valores fixos
   └─ Validação completa de dados
   └─ Mensagens claras de erro
   └─ Código organizado e legível

═══════════════════════════════════════════════════════
🎯 Experimente adicionar mais tipos de combustível!
═══════════════════════════════════════════════════════
`);


