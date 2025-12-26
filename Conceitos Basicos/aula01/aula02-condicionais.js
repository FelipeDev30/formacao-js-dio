/* 

O que são condicionais?

Condicionais são estruturas de controle que permitem executar diferentes blocos de código com base em certas condições. Elas são fundamentais na programação, pois possibilitam a tomada de decisões dentro do código.
Existem várias formas de implementar condicionais em JavaScript, sendo as mais comuns o "if", "else if", "else" e o "switch".
Exemplo de uso do "if", "else if" e "else":


*/

const  eNumeroPar = (numero) => {
    if (numero % 2 == 0) {
        console.log(`O número ${numero} é par.`);
    } else if (numero % 2 != 0) {
        console.log(`O número ${numero} é impar.`);
    } else {
        console.log(`O valor ${numero} não é um número valido.`);
    }
}

eNumeroPar(5);

