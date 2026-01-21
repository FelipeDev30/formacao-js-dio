/* 
═══════════════════════════════════════════════════════════════════════════
    📚 GUIA DE ESTUDO: MÓDULOS COMMONJS
═══════════════════════════════════════════════════════════════════════════
    Descrição: Importação e exportação de módulos em JavaScript
    
    📖 TÓPICOS ABORDADOS:
    • Sistema de módulos CommonJS
    • Função require() para importar
    • Desestruturação de objetos importados
    • Organização de código em arquivos separados
    
    📌 CONCEITO:
    Módulos permitem dividir o código em arquivos separados,
    facilitando a organização e reutilização.
    
    🔧 USO:
    • require() - importa módulos
    • module.exports - exporta funcionalidades
═══════════════════════════════════════════════════════════════════════════
*/

const funcoes = require('./funcoes-auxiliares-gets-print.js');

const print = funcoes.print;
const gets = funcoes.gets;

print(`O número recebido dentro da função gets é: ${gets()} `)

