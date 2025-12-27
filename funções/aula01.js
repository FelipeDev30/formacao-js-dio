function calcularImc(peso,  altura) {
    peso = Number(prompt("Digite seu peso em kg:"));
    altura = Number(prompt("Digite sua altura em metros:"));
    const imc = peso / (altura * altura);
    alert("Seu IMC é: " + imc.toFixed(2));
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        return "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        return "Sobrepeso";
    } else if (imc >= 30 && imc < 34.9) {
        return "Obesidade";
    } else if (imc >= 35 && imc < 39.9) {
        return "Obesidade severa";
    } else {
        return "Obesidade mórbida";
    }
}

const imcValue = calcularImc();
const classificacao = classificarImc(imcValue);
alert("Classificação do IMC: " + classificacao);

