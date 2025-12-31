/* 

Crie duas funçoes auxiliares uma para receber qualquer entrada do usuário e outra para imprimir no console essa entrada.

*/

const entradas = [10, 5, 50, 10, 98, 23, 33, 44, 100, 1, 107];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = { gets, print };