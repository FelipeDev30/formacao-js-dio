/* 
═══════════════════════════════════════════════════════════════════════════
    📚 GUIA DE ESTUDO: TABUADA DE UM NÚMERO
═══════════════════════════════════════════════════════════════════════════
    Descrição: Gerar e exibir a tabuada de multiplicação
    
    📖 TÓPICOS ABORDADOS:
    1. Estrutura de repetição for
    2. Operações matemáticas (multiplicação)
    3. Validação de entrada
    4. Template strings
    
    📌 FUNCIONALIDADE:
    • Recebe um número do usuário
    • Gera a tabuada de 1 a 10
    • Exibe os resultados via alert
    
    ⚠️ Este código roda no NAVEGADOR (usa prompt/alert)
═══════════════════════════════════════════════════════════════════════════
*/

console.log('\n═══ ✖️ GERADOR DE TABUADA ═══\n');

/* 
1) Crie um programa que dado um número imprima a sua tabuada.
*/

const numero = Number(prompt("Digite um número para ver sua tabuada:"));

for(let i = 1; i <= 10; i++){
    if(isNaN(numero)) {
        alert("Por favor, digite um número válido.");
        break;
    }
    const resultado = numero * i;
    alert(`${numero} x ${i} = ${resultado}`);
}


