peso = Number(prompt("Digite seu peso em kg:"));
altura = Number(prompt("Digite sua altura em metros:"));
imc = peso / (altura * altura);

function arredondar(valor, casasDecimais) {
    const fator = Math.pow(10, casasDecimais);
    return Math.round(valor * fator) / fator;
}

imc = arredondar(imc, 2);
alert("Seu IMC é: " + imc);

function classificarIMC(imc) {
    if (imc < 18.5) {
        alert("Abaixo do peso");
    } else if (imc >= 18.5 && imc < 24.9) {
        alert("Peso normal");
    } else if (imc >= 25 && imc < 29.9) {
        alert("Sobrepeso");
    } else if (imc >= 30 && imc < 34.9) {
        alert("Obesidade grau 1");
    } else if (imc >= 35 && imc < 39.9) {
        alert("Obesidade grau 2");
    } else {
        alert("Obesidade grau 3");
    }
}

classificarIMC(imc);