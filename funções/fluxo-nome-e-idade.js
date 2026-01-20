function meuNomeEh(nome) {
    nome = prompt("Qual o seu nome?");
    alert("Meu nome é " + nome);
}

function verificarIdade(idade) {
    idade = Number(prompt("Qual a sua idade?"));
    if (idade >= 18) {
        alert("Você é maior de idade.");
    } else {
        alert("Você é menor de idade.");
    }
}

(function main() {
    meuNomeEh();
    verificarIdade();
})();
