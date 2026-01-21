/* 

# Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
1 - Preço da gasolina;
2 - Preço do etanol;
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem.

*/


const precoGasolina = 5.79;
const precoEtanol = 4.58;

// Protege caso o usuário cancele o prompt
const entradaTipo = prompt('Digite o tipo de combustível do seu carro (gasolina/etanol): ');
if (!entradaTipo) {
  alert("Operação cancelada.");
} else {
  const tipoCombustivel = entradaTipo.trim().toLowerCase();

  const consumoKmPorLitro = Number(prompt('Digite o consumo médio de combustível do seu carro (km por litro): '));
  const distanciaKm = Number(prompt('Digite a distância em KM da viagem: '));

  let precoCombustivel;

  if (tipoCombustivel === "gasolina") {
    precoCombustivel = precoGasolina;
  } else if (tipoCombustivel === "etanol") {
    precoCombustivel = precoEtanol;
  } else {
    alert("Tipo de combustível inválido. Use 'gasolina' ou 'etanol'.");
    throw new Error("Tipo de combustível inválido.");
  }

  const litrosConsumidos = distanciaKm / consumoKmPorLitro;
  const custoTotal = litrosConsumidos * precoCombustivel;

  const formatadorBRL = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
  alert(`O custo total da viagem é ${formatadorBRL.format(custoTotal)}`);
}


