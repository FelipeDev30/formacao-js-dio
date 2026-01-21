/* 
═══════════════════════════════════════════════════════════════════════════════
📊 ARRAYS: CÁLCULO DE MÉDIA COM ITERAÇÃO 🎯
═══════════════════════════════════════════════════════════════════════════════

📌 OBJETIVO:
Demonstrar como usar arrays para armazenar dados e calcular a média.
Praticar métodos push() e iteração com loops for.

📌 CONCEITOS ABORDADOS:
- Criação de array vazio
- Método push() para adicionar elementos
- Loop for para iteração
- Acumulação de valores
- Cálculo de média

═══════════════════════════════════════════════════════════════════════════════
*/

console.log('\n═══════════════════════════════════════════════════════');
console.log('📊 CALCULADORA DE MÉDIA COM ARRAYS');
console.log('═══════════════════════════════════════════════════════\n');

/* 
📌 CONCEITO: ARRAY VAZIO E push()
- let notas = []: cria array vazio
- push(): adiciona elementos ao final do array
- Array cresce dinamicamente
*/

let notas = [];

console.log('Array inicial (vazio):', notas);
console.log('Adicionando notas...\n');

notas.push(6);
console.log('Após push(6):', notas);

notas.push(8);
console.log('Após push(8):', notas);

notas.push(9);
console.log('Após push(9):', notas);

console.log('\n═══════════════════════════════════════════════════════');
console.log('📖 CÁLCULO DA MÉDIA');
console.log('═══════════════════════════════════════════════════════\n');

/* 
📌 CONCEITO: ACUMULAÇÃO COM LOOP
- Inicializar variável soma = 0
- Iterar sobre cada elemento do array
- Acumular valores: soma += notas[i]
- Calcular média: soma / quantidade
*/

let soma = 0;

console.log('Processo de soma:');
for (let i = 0; i < notas.length; i++) {
    console.log(`  Iteração ${i + 1}: soma = ${soma} + ${notas[i]} = ${soma + notas[i]}`);
    soma += notas[i];
}

let media = soma / notas.length;

console.log('\n📊 Resultado:');
console.log(`  Total de notas: ${notas.length}`);
console.log(`  Soma: ${soma}`);
console.log(`  Média das notas: ${media}`);

console.log('\n═══════════════════════════════════════════════════════');
console.log('📖 ITERAÇÃO E EXIBIÇÃO');
console.log('═══════════════════════════════════════════════════════\n');

/* 
📌 CONCEITO: EXIBIÇÃO FORMATADA
- Loop para exibir cada elemento
- Formatação com template literals
- Índice + 1 para mostrar posição humanizada
*/

console.log('📝 Lista de todas as notas:');
for (let indexi = 0; indexi < notas.length; indexi++) {
    const element = notas[indexi];
    console.log(`  Nota ${indexi + 1}: ${element}`);
}

console.log('\n═══════════════════════════════════════════════════════');
console.log('📖 EXEMPLO: VERSÃO MELHORADA');
console.log('═══════════════════════════════════════════════════════\n');

/* 
📌 CONCEITO: FUNÇÃO REUTILIZÁVEL
- Encapsular lógica em função
- Retornar objeto com resultados
- Mais fácil de testar e reutilizar
*/

function calcularEstatisticas(arrayNotas) {
    if (arrayNotas.length === 0) {
        return { soma: 0, media: 0, total: 0 };
    }
    
    let somaTotal = 0;
    for (let i = 0; i < arrayNotas.length; i++) {
        somaTotal += arrayNotas[i];
    }
    
    return {
        soma: somaTotal,
        media: somaTotal / arrayNotas.length,
        total: arrayNotas.length,
        maior: Math.max(...arrayNotas),
        menor: Math.min(...arrayNotas)
    };
}

const estatisticas = calcularEstatisticas(notas);

console.log('📊 Estatísticas completas:');
console.log(`  Total de notas: ${estatisticas.total}`);
console.log(`  Soma: ${estatisticas.soma}`);
console.log(`  Média: ${estatisticas.media.toFixed(2)}`);
console.log(`  Maior nota: ${estatisticas.maior}`);
console.log(`  Menor nota: ${estatisticas.menor}`);

console.log('\n═══════════════════════════════════════════════════════');
console.log('📖 OUTROS EXEMPLOS PRÁTICOS');
console.log('═══════════════════════════════════════════════════════\n');

// Exemplo 1: Notas de outro aluno
const notasAluno2 = [7.5, 8.0, 6.5, 9.0];
const stats2 = calcularEstatisticas(notasAluno2);
console.log('📚 Aluno 2:');
console.log(`  Notas: ${notasAluno2.join(', ')}`);
console.log(`  Média: ${stats2.media.toFixed(2)}`);

// Exemplo 2: Temperaturas da semana
const temperaturas = [25, 28, 26, 30, 27, 29, 31];
let somaTemp = 0;
for (let temp of temperaturas) {
    somaTemp += temp;
}
const mediaTemp = somaTemp / temperaturas.length;

console.log('\n🌡️ Temperaturas da semana:');
console.log(`  Temperaturas: ${temperaturas.join('°C, ')}°C`);
console.log(`  Média: ${mediaTemp.toFixed(1)}°C`);

console.log('\n═══════════════════════════════════════════════════════');
console.log('📋 RESUMO - CONCEITOS APRENDIDOS');
console.log('═══════════════════════════════════════════════════════\n');

console.log(`
✅ Manipulação de Arrays:
   └─ Criar array vazio: let arr = []
   └─ Adicionar elementos: arr.push(valor)
   └─ Acessar tamanho: arr.length

✅ Iteração com for:
   └─ for (let i = 0; i < arr.length; i++)
   └─ Acesso por índice: arr[i]
   └─ Útil para acumular valores

✅ Cálculo de Média:
   └─ Somar todos os valores
   └─ Dividir pela quantidade
   └─ média = soma / quantidade

✅ Operador +=:
   └─ soma += valor
   └─ Equivale a: soma = soma + valor
   └─ Usado para acumular

✅ Boas Práticas:
   └─ Inicializar acumuladores (soma = 0)
   └─ Verificar array vazio
   └─ Usar nomes descritivos
   └─ Encapsular em funções

═══════════════════════════════════════════════════════
🎯 Pratique com outros arrays e cálculos!
═══════════════════════════════════════════════════════
`);
