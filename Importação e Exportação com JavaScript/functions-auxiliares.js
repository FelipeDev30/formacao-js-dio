/* 

Crie duas funçoes auxiliares uma para receber qualquer entrada do usuário e outra para imprimir no console essa entrada.

*/

const dados = [5, 50, 10, 98, 23];
let i = 0;

function gets() {
    const valor = dados[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = { gets, print };