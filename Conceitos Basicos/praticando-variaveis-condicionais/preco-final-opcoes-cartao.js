const precoEtiqueta = 119.90;
const formaDePagamento = Number(prompt("Digite a forma de pagamento:\n1 - À vista em debito\n2 - À vista no dinheiro ou pix\n3 - Em 2x no cartão\n4 - 3x ou mais no cartão"));
let precoFinal;

function calcularPrecoFinal(preco, formaPagamento) {

    if (formaPagamento === 1) {
        precoFinal = preco - (preco * 0.1); // 10% de desconto
    } else if (formaPagamento === 2) {
        precoFinal = preco - (preco * 0.15); // 15% de desconto
    } else if (formaPagamento === 3) {
        precoFinal = preco; // Sem desconto
    } else if (formaPagamento === 4) {
        precoFinal = preco + (preco * 0.1); // 10% de acréscimo
    }
}

calcularPrecoFinal(precoEtiqueta, formaDePagamento);

alert(`O preço final a pagar é R$ ${precoFinal.toFixed(2)}`);