/* 
═══════════════════════════════════════════════════════════════════════════
    📚 PROJETO: CALCULADORA SIMPLES
═══════════════════════════════════════════════════════════════════════════
    Descrição: Lógica da calculadora com display
    
    📖 TÓPICOS ABORDADOS:
    • Manipulação do DOM (querySelector)
    • Atualização de valores de input
    • Função eval() para cálculos
    • Tratamento de casos especiais
    • Concatenação de strings
    
    📌 FUNCIONALIDADES:
    • showDisplay() - Adiciona valores ao display
    • clearAll() - Limpa o display
    • result() - Calcula e exibe o resultado
    
    ⚠️ NOTA: eval() deve ser usado com cuidado em produção
═══════════════════════════════════════════════════════════════════════════
*/

let display = document.querySelector('#display');

function showDisplay(value) {
    if(value == ".") {
        display.value = "0";
    }
    display.value += value;
}

function clearAll() {
    display.value = "";
}

function result() {
    let y = eval(display.value);
    display.value = y;

    if(display.value == "undefined") {
        display.value = "";
    }
}