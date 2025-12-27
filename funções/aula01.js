function classificarImc(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        return "Peso normal";
    } else if (imc >= 25 && imc <= 29.9) {
        return "Sobrepeso";
    } else if (imc >= 30 && imc <= 34.9) {
        return "Obesidade (Grau I)";
    } else if (imc >= 35 && imc <= 39.9) {
        return "Obesidade (Grau II)";
    } else {
        return "Obesidade (Grau III)";
    }
}

function main() {
    const peso = Number(prompt("Digite seu peso em kg:").replace(",", "."));
    const altura = Number(prompt("Digite sua altura em metros:").replace(",", "."));

    // Validações básicas
    if (!Number.isFinite(peso) || peso <= 0) {
        alert("Peso inválido. Digite um número maior que zero.");
        return null;
    }
    if (!Number.isFinite(altura) || altura <= 0) {
        alert("Altura inválida. Digite um número maior que zero.");
        return null;
    }

    const imc = peso / (altura * altura);
    alert("Seu IMC é: " + imc.toFixed(2));
    return imc; // Retorna o IMC para uso posterior
}

// Fluxo principal
const imcValue = main();
if (imcValue !== null) {
    const classificacao = classificarImc(imcValue);
    alert("Classificação do IMC: " + classificacao);
}

