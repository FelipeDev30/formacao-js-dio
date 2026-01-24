/* 

═══════════════════════════════════════════════════════════════════════════
    📚 GUIA DE ESTUDO: ASSINCRONISMO COM PROMISES - MANIPULAÇÃO DE ARQUIVO COM PROMISES
═══════════════════════════════════════════════════════════════════════════
    Descrição: Manipulando arquivos de forma assíncrona usando Promises em JavaScript
    
    📖 TÓPICOS ABORDADOS:
    1. Leitura de arquivos com Promises
    2. Escrita de arquivos com Promises
    3. Tratamento de erros na manipulação de arquivos
    4. Uso de bibliotecas como 'fs/promises' no Node.js
    📌 FUNCIONALIDADES:
    • Operações assíncronas de leitura e escrita de arquivos
    • Tratamento de sucesso e falha em operações de arquivo
    • Encadeamento de operações de arquivo
    ⚠️ Este código roda no NODE.JS (usa módulo 'fs/promises')
═══════════════════════════════════════════════════════════════════════════

Manipular arquivos de forma assíncrona é uma tarefa comum em aplicações Node.js. 
Utilizando o módulo 'fs/promises', podemos realizar operações de leitura e escrita de arquivos utilizando Promises, o que facilita o tratamento de sucesso e falha dessas operações.

*/

console.log('\n═══ 📂 MANIPULAÇÃO DE ARQUIVO COM PROMISES EM NODE.JS ═══\n');

const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, 'tarefas.csv');


const promessaDaLeituraArquivo = fs.promises.readFile(filePath, 'utf8')

promessaDaLeituraArquivo
    .then((arquivo) => arquivo.toString('utf8'))
    .then((textoDoArquivo) => textoDoArquivo.split('\n').slice(1))
    .then((linhasSemCabecalho) => linhasSemCabecalho.map((linha) => {
        const [nome, feito] = linha.split(';');
        return { nome, feito: feito.trim() === 'true' };
    }))
    .then((listaDeTarefas) => console.log('Tarefas lidas do arquivo:', listaDeTarefas))
    .catch((error) => console.error('Deu ruim na leitura do arquivo:', error))
    .finally(() => console.log('Operação de leitura de arquivo finalizada.\n'));