# 🚀 Formação JavaScript DIO

> Repositório de estudos completo sobre **JavaScript Fundamentals** - Do zero à proficiência em desenvolvimento web com JavaScript.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
![JavaScript](https://img.shields.io/badge/Language-JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-brightgreen)

---

## 📚 Sobre este Repositório

Este repositório contém uma **formação completa em JavaScript**, desenvolvida durante o curso da [DIO (Digital Innovation One)](https://www.dio.me/). Aqui você encontrará aulas, exercícios práticos e projetos que cobrem desde os conceitos básicos até tópicos mais avançados da linguagem.

O objetivo é criar um **portfólio vivo** que demonstre a evolução no aprendizado de JavaScript e boas práticas de desenvolvimento web.

---

## 📖 Estrutura do Curso

### 1️⃣ **Conceitos Básicos** 📍 `./Conceitos Basicos/`
Fundação sólida para iniciantes:
- **Variáveis e tipos de dados**: `let`, `const`, `var`
- **Operadores**: aritméticos, lógicos, de comparação
- **Estruturas condicionais**: `if/else`, `switch`
- **Interação com usuário**: `prompt()`, `alert()`
- **Validações e manipulação de dados**

**Projetos práticos:**
- 🧮 Calculadora de IMC com classificação
- 📊 Cálculo de média de alunos
- 💰 Sistema de preço com desconto

---

### 2️⃣ **Arrays e Estruturas de Repetição** 📍 `./Arrays e Estruturas de Repetição/`
Manipulação de coleções de dados e loops:
- **Arrays**: criação, acesso, métodos (`map`, `filter`, `reduce`)
- **Loops**: `for`, `while`, `do/while`, `for...of`, `for...in`
- **Iteração de dados**: processamento e transformação
- **Algoritmos básicos**: ordenação, busca, filtragem

---

### 3️⃣ **Funções** 📍 `./funções/`
Core do desenvolvimento JavaScript:
- **Declaração de funções**: `function`, arrow functions `=>`
- **Parâmetros e retorno**: valores e referências
- **Escopo e closure**: variáveis locais e globais
- **Callbacks e funções de ordem superior**
- **IIFE** (Immediately Invoked Function Expression)

**Exemplo prático:**
```javascript
// Arrow function com validação
const calcularIMC = (peso, altura) => {
    if (!Number.isFinite(peso) || peso <= 0) return null;
    return peso / (altura * altura);
}
```

---

### 4️⃣ **Objetos** 📍 `./Objetos/`
Programação orientada a objetos:
- **Criação de objetos**: object literals, construtores
- **Propriedades e métodos**: acesso e manipulação
- **This**: contexto de execução
- **Encapsulamento e abstração**
- **Manipulação dinâmica de propriedades**

**Exemplo prático:**
```javascript
const pessoa = {
    nome: "Felipe",
    idade: 31,
    profissao: "Desenvolvedor Full Stack",
    
    descrever() {
        return `Meu nome é ${this.nome}, tenho ${this.idade} anos.`;
    }
};
```

---

### 5️⃣ **Importação e Exportação com JavaScript** 📍 `./Importação e Exportação com JavaScript/`
Modularização e reutilização de código:
- **CommonJS**: `require()` e `module.exports`
- **ES6 Modules**: `import` e `export`
- **Estrutura de módulos**: separação de responsabilidades
- **Boas práticas de organização**

**Exemplo prático:**
```javascript
// functions-auxiliares.js
module.exports = {
    print: (msg) => console.log(msg),
    gets: () => // captura entrada
};

// aula01.js
const funcoes = require('./functions-auxiliares.js');
funcoes.print("Olá, módulos!");
```

---

## 💡 Conceitos-Chave Abordados

| Conceito | Descrição |
|----------|-----------|
| **Variáveis** | Armazenamento de dados com `let`, `const`, `var` |
| **Tipos de Dados** | String, Number, Boolean, Object, Array, null, undefined |
| **Operadores** | Aritméticos, lógicos, de comparação, atribuição |
| **Condicionais** | if/else, switch/case, ternário |
| **Loops** | for, while, do/while, for...of, for...in |
| **Funções** | Declaração, arrow functions, callbacks, closures |
| **Arrays** | Criação, métodos (map, filter, reduce, etc) |
| **Objetos** | Propriedades, métodos, protótipos, this |
| **DOM** | Seleção e manipulação de elementos HTML |
| **Módulos** | Importação/exportação, reutilização de código |

---

## 🎯 Recursos de Aprendizado

Cada seção contém:
- 📝 **Aulas teóricas** (`aula*.js`): conceitos explicados
- 🔨 **Exercícios práticos** (`ex*.js`): aplicação dos conceitos
- 💻 **Desafios** (`desafio.js`): problemas para resolver
- 🎨 **Interfaces HTML** (`*.html`): visualização e interação
- 📚 **Documentação inline**: comentários explicativos

---

## 🚀 Como Usar

### 1. Clone o repositório
```bash
git clone https://github.com/FelipeDev30/formacao-js-dio.git
cd formacao-js-dio
```

### 2. Explore os arquivos
```bash
# Visualizar estrutura
tree /F

# Ou navegar pelos arquivos no seu editor favorito
code .
```

### 3. Execute os exemplos

**No Node.js:**
```bash
node "Conceitos Basicos/aula00/aula.js"
node "funções/aula01.js"
```

**No navegador:**
- Abra os arquivos `.html` no seu navegador
- Verifique o console (F12) para ver os logs

---

## 📊 Progresso de Aprendizado

```
✅ Conceitos Básicos
├── Variáveis e tipos de dados
├── Operadores
├── Condicionais
└── Interação com usuário

✅ Arrays e Estruturas de Repetição
├── Arrays e métodos
├── Loops (for, while, etc)
└── Processamento de dados

✅ Funções
├── Declaração e arrow functions
├── Callbacks e closures
└── Funções de ordem superior

✅ Objetos
├── Object literals
├── Métodos e this
└── Manipulação dinâmica

✅ Importação e Exportação
├── CommonJS (require/exports)
└── Modularização
```

---

## 📁 Estrutura do Projeto

```
formacao-js-dio/
├── Conceitos Basicos/
│   ├── aula00/
│   ├── aula01/
│   └── praticando-variaveis-condicionais/
├── Arrays e Estruturas de Repetição/
├── funções/
├── Objetos/
├── Importação e Exportação com JavaScript/
├── README.md
└── LICENSE
```

---

## 🔗 Tecnologias Utilizadas

- **JavaScript (ES6+)** - Linguagem principal
- **Node.js** - Ambiente de execução
- **HTML5** - Markup para interfaces
- **CSS** - Estilização (quando necessário)
- **Git & GitHub** - Controle de versão

---

## 📈 Próximos Passos (Roadmap)

- [ ] Async/Await e Promises
- [ ] DOM avançado
- [ ] APIs e fetch
- [ ] Web Storage
- [ ] Frameworks (React, Vue, etc)
- [ ] TypeScript
- [ ] Testes unitários

---

## ✨ Destaques do Aprendizado

### 💪 Competências Desenvolvidas
- ✔️ Lógica de programação sólida
- ✔️ Manipulação de dados com Arrays
- ✔️ Criação e uso de Funções
- ✔️ Programação orientada a objetos básica
- ✔️ Organização e modularização de código
- ✔️ Boas práticas e padrões de código
- ✔️ Resolução de problemas práticos

### 🎓 Casos de Uso Implementados
- Cálculo de IMC com classificação
- Sistema de média de alunos
- Cálculo dinâmico de preços
- Manipulação de dados de usuários
- Reutilização de código via módulos

---

## 📞 Contato

**Felipe** - Desenvolvedor em formação
- 🐙 GitHub: [FelipeDev30](https://github.com/FelipeDev30)
- 💼 LinkedIn: [Felipe Lamas](www.linkedin.com/in/luiz-felipe-lamas-da-rosa)

---

## 📄 Licença

Este projeto está licenciado sob a **Licença MIT** - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

## 🙏 Agradecimentos

- [DIO - Digital Innovation One](https://www.dio.me/) pelo excelente programa de formação
- A comunidade JavaScript e todos os recursos educacionais disponíveis
- Você, por estar estudando e se desenvolvendo! 🌟

---

<div align="center">

**Feito com ❤️ durante a formação JavaScript DIO**

⭐ Se este repositório foi útil, considere deixar uma estrela!

</div>