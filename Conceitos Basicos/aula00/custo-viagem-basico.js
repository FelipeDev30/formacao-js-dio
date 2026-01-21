/* 
═══════════════════════════════════════════════════════════════════════════════
🚗 EXERCÍCIO: CALCULADORA DE CUSTO DE VIAGEM (BÁSICO) 💰
═══════════════════════════════════════════════════════════════════════════════

📌 OBJETIVO:
Calcular o valor que será gasto de combustível em uma viagem.

📌 DADOS NECESSÁRIOS:
1. Preço do combustível por litro (R$)
2. Gasto médio de combustível do carro (KM por litro)
3. Distância total da viagem (KM)

📌 FÓRMULA:
Litros Necessários = Distância ÷ Consumo Médio
Custo Total = Litros Necessários × Preço por Litro

═══════════════════════════════════════════════════════════════════════════════
*/

console.log('\n═══════════════════════════════════════════════════════');
console.log('🚗 CALCULADORA DE CUSTO DE VIAGEM');
console.log('═══════════════════════════════════════════════════════\n');

/* 
📌 CONCEITO: VARIÁVEIS E CONSTANTES
- const: valor que NÃO muda durante a execução
- Usamos const para os dados de entrada do problema
- Nomes descritivos ajudam a entender o código
*/

// Dados de entrada
const precoCombustivelPorLitro = 5.50; // Preço do combustível por litro em reais
const gastoMedioPorKM = 10; // Consumo: o carro faz 10 KM com 1 litro
const distanciaEmKM = 50; // Distância total da viagem

console.log('📊 DADOS DA VIAGEM:');
console.log('  Preço do combustível: R$', precoCombustivelPorLitro, 'por litro');
console.log('  Consumo médio:', gastoMedioPorKM, 'KM por litro');
console.log('  Distância da viagem:', distanciaEmKM, 'KM');

/* 
📌 CONCEITO: ARROW FUNCTIONS
- Sintaxe moderna do JavaScript (ES6+)
- Forma concisa de criar funções
- (parametros) => { código }
*/

const calcularCustoViagem = (precoCombustivel, gastoMedio, distancia) => {
    // Passo 1: Calcular quantos litros serão necessários
    const litrosNecessarios = distancia / gastoMedio; 
    
    // Passo 2: Calcular o custo total
    const custoTotal = litrosNecessarios * precoCombustivel;
    
    return custoTotal;
}

/* 
📌 CONCEITO: CHAMADA DE FUNÇÃO E FORMATAÇÃO
- Chamamos a função passando os parâmetros
- toFixed(2): formata número com 2 casas decimais
- Template literals (`${}`): forma moderna de concatenar strings
*/

const custoViagem = calcularCustoViagem(precoCombustivelPorLitro, gastoMedioPorKM, distanciaEmKM);

console.log('\n💰 RESULTADO:');
console.log(`  O custo total da viagem será de R$ ${custoViagem.toFixed(2)}`);

// Mostrando cálculo detalhado
const litros = distanciaEmKM / gastoMedioPorKM;
console.log('\n📝 CÁLCULO DETALHADO:');
console.log('  Litros necessários:', litros.toFixed(2), 'litros');
console.log('  Custo:', litros.toFixed(2), '× R$', precoCombustivelPorLitro, '= R$', custoViagem.toFixed(2));

console.log('\n═══════════════════════════════════════════════════════');
console.log('📖 EXEMPLO COM OUTRAS DISTÂNCIAS');
console.log('═══════════════════════════════════════════════════════\n');

// Testando com outras distâncias
const distancias = [100, 200, 500];

console.log('Custos para diferentes distâncias:');
distancias.forEach(dist => {
    const custo = calcularCustoViagem(precoCombustivelPorLitro, gastoMedioPorKM, dist);
    console.log(`  ${dist} KM → R$ ${custo.toFixed(2)}`);
});

console.log('\n═══════════════════════════════════════════════════════');
console.log('📋 RESUMO - CONCEITOS APRENDIDOS');
console.log('═══════════════════════════════════════════════════════\n');

console.log(`
✅ Conceitos utilizados:
   └─ Declaração de constantes (const)
   └─ Arrow functions (=>)
   └─ Parâmetros de função
   └─ Operações matemáticas básicas
   └─ Template literals (\`\${}\`)
   └─ Formatação de números (toFixed)
   └─ Organização de código em funções

🎯 Próximos passos:
   └─ Adicionar validação de dados
   └─ Permitir diferentes tipos de combustível
   └─ Calcular tempo de viagem
   └─ Adicionar pedágios e outros custos

═══════════════════════════════════════════════════════
`);