/* 

═══════════════════════════════════════════════════════════════════════════
    📚 GUIA DE ESTUDO: ASSINCRONISMO COM PROMISES - FUNCIONAMENTO DAS PROMISES
═══════════════════════════════════════════════════════════════════════════
    Descrição: Entendendo o funcionamento das Promises em JavaScript
    
    📖 TÓPICOS ABORDADOS:
    1. O que são Promises
    2. Estados das Promises (pending, fulfilled, rejected)
    3. Sintaxe básica para criar uma Promise
    4. Métodos .then(), .catch() e .finally()
    5. Exemplos práticos de uso de Promises
    📌 FUNCIONALIDADES:
    • Gerenciamento de operações assíncronas
    • Tratamento de sucesso e falha em operações assíncronas
    • Encadeamento de operações assíncronas
    ⚠️ Este código roda no NAVEGADOR (usa console.log)
═══════════════════════════════════════════════════════════════════════════

As Promises em JavaScript são objetos que representam a eventual conclusão (ou falha) de uma operação assíncrona e seu valor resultante.

Estados das Promises:
1. Pending (Pendente): Estado inicial, a operação ainda não foi concluída.
2. Fulfilled (Cumprida): A operação foi concluída com sucesso.
3. Rejected (Rejeitada): A operação falhou.

*/

console.log('\n═══ ⏳ FUNCIONAMENTO DAS PROMISES EM JAVASCRIPT ═══\n');

// Criação de uma Promise que resolve com um número aleatório após 1 segundo

const promessaDeNumeroQualquer = new Promise((resolve, reject) => {
    const numero = Math.random() * 100;
    resolve(numero.toFixed(2));
});

promessaDeNumeroQualquer.then((value) => {
    console.log(value);
}).catch((error) => {
    console.error(error);
}).finally(() => {
    console.log('Promessa de número qualquer finalizada.');
});

// Função que retorna uma Promise simulando uma operação assíncrona
function operacaoAssincrona() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const sucesso = true; // Simula sucesso ou falha
            if (sucesso) {
                resolve('Operação concluída com sucesso!');
            } else {
                reject('Erro na operação.');
            }
        }, 2000);
    });
}

// Uso da Promise com .then() e .catch()
operacaoAssincrona()
    .then((mensagem) => {
        console.log('Sucesso:', mensagem);
    })
    .catch((erro) => {
        console.log('Falha:', erro);
    })
    .finally(() => {
        console.log('Operação assíncrona finalizada.');
    });

// Exemplo de encadeamento de Promises
function primeiraOperacao() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Primeira operação concluída.');
        }, 1000);
    });
}
function segundaOperacao(mensagemAnterior) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mensagemAnterior + ' Segunda operação concluída.');
        }, 1000);
    });
}

primeiraOperacao()