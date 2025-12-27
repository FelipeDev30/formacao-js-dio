let precoEtiqueta = 100;
let formaDePagamento = Number(prompt("Digite a forma de pagamento (1 - à vista dinheiro/cheque, 2 - à vista cartão, 3 - 2x no cartão, 4 - 3x ou mais no cartão):"));
function calcularPrecoFinal(preco, formaPagamento) {
    let precoFinal;
    switch (formaPagamento) {
        case 1:
            precoFinal = preco * 0.9; // 10% de desconto
            break;
        case 2:
            precoFinal = preco * 0.85; // 15% de desconto
            break;
        case 3:
            precoFinal = preco; // preço normal
            break;
        case 4:
            precoFinal = preco * 1.1; // 10% de juros
            break;
        default:
            alert("Forma de pagamento inválida.");
            return null;
    }
    return precoFinal;
}

let precoFinal = calcularPrecoFinal(precoEtiqueta, formaDePagamento);
if (precoFinal !== null) {
    alert("O preço final é R$ " + precoFinal.toFixed(2));
}

