const { gets, print } = require("./auxiliares.js");


(function () {
  const nome = gets();
  if (!nome) return print("Nome não informado. Operação cancelada.");
  let soma = 0;
  for (let i = 1; i <= 3; i++) {
    let nota;
    do {
      nota = parseFloat(gets(`Digite a nota ${i} de ${nome} (0 a 10):`));
    } while (isNaN(nota) || nota < 0 || nota > 10);
    soma += nota;
  }

  const media = soma / 3;
  const status = media >= 7 ? "Aprovado" : media >= 5 ? "Recuperação" : "Reprovado";

  print(`${nome} — Média: ${media.toFixed(2)} — ${status}`);
})();


