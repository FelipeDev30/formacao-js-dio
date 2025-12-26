/* 

Faça um programa para calcular o valor de uma viagem.

Você terá 3 variaveis. Sendo elas:
1 - Preço do combustível por litro;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.

*/

const precoCombustivelPorLitro = 5.50; // Preço do combustível por litro em reais
const gastoMedioPorKM = 10; // Consumo em litros por KM
const distanciaEmKM = 50;

const calcularCustoViagem = (precoCombustivel, gastoMedio, distancia) => {
    const litrosNecessarios = distancia / gastoMedio; 
    const custoTotal = litrosNecessarios * precoCombustivel;
    return custoTotal;
}

const custoViagem = calcularCustoViagem(precoCombustivelPorLitro, gastoMedioPorKM, distanciaEmKM);
console.log(`O custo total da viagem será de R$ ${custoViagem.toFixed(2)}`);

