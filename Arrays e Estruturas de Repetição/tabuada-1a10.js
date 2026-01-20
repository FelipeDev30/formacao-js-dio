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


