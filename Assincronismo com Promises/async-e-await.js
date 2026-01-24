/* 

═══════════════════════════════════════════════════════════════════════════
    📚 GUIA DE ESTUDO: ASSINCRONISMO COM PROMISES - ASYNC E AWAIT
═══════════════════════════════════════════════════════════════════════════

    Descrição: Utilizando async e await para lidar com Promises em JavaScript
    
    📖 TÓPICOS ABORDADOS:
    1. Introdução ao async e await
    2. Sintaxe de funções assíncronas
    3. Uso do await para esperar Promises
    4. Tratamento de erros com try...catch
    5. Exemplos práticos de uso de async/await
    📌 FUNCIONALIDADES:
    • Simplificação do código assíncrono
    • Melhor legibilidade e manutenção
    • Tratamento de erros mais intuitivo
    ⚠️ Este código roda no NAVEGADOR (usa console.log)
═══════════════════════════════════════════════════════════════════════════
As palavras-chave async e await em JavaScript são usadas para trabalhar com Promises de uma maneira mais simples e legível.

- async: Declara uma função como assíncrona, permitindo o uso de await dentro dela.
- await: Pausa a execução da função assíncrona até que a Promise seja resolvida ou rejeitada.

*/
console.log('\n═══ ⏳ USANDO ASYNC E AWAIT EM JAVASCRIPT ═══\n');

// Função para simular leitura de arquivo (Node.js) com async/await

const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, 'tarefas.csv');


async function buscarArquivo() {
    try {
        const arquivo = await fs.promises.readFile(filePath);
        const textoDoArquivo = arquivo.toString('utf-8');
        console.log(textoDoArquivo);
    } catch(error) {
        console.error('Erro ao ler o arquivo:', error);
    } finally {
        console.log('Leitura do arquivo finalizada.');
    }
}

buscarArquivo()

const promessaDeNumeroAleatorio = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const numero = Math.random() * 100;
            resolve(numero.toFixed(2));
        }, 1000);
    });
}

// Função assíncrona usando async/await

async function obterNumeroAleatorio() {
    try {
        const numero = await promessaDeNumeroAleatorio();
        console.log(`Número aleatório obtido: ${numero}`);
    } catch (error) {
        console.error('Erro ao obter número aleatório:', error);
    }
}

obterNumeroAleatorio(); 