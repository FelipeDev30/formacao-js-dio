/* 
═══════════════════════════════════════════════════════════════════════════
    📚 GUIA DE ESTUDO: CÁLCULO DE MÉDIA COM ARRAYS
═══════════════════════════════════════════════════════════════════════════
    Descrição: Trabalhando com arrays para calcular médias
    
    📖 TÓPICOS ABORDADOS:
    1. Criação e manipulação de arrays
    2. Método push para adicionar elementos
    3. Iteração para somar valores
    4. Cálculo de média aritmética
═══════════════════════════════════════════════════════════════════════════
*/

console.log('\n═══ 📊 CÁLCULO DE MÉDIA COM ARRAYS ═══\n');

let notas = [];

notas.push(6);
notas.push(8);
notas.push(9);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}

let media = soma / notas.length;

console.log('Média das notas:', media); // Saída: Média das notas: 7

console.log('\n═══ 📋 LISTAGEM DAS NOTAS ═══\n');

for (let indexi = 0; indexi < notas.length; indexi++) {
    const element = notas[indexi];
    console.log(`Nota ${indexi + 1}:`, element);
}
