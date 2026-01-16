/* 

# ✅ Hoisting em JavaScript

**Hoisting** é o comportamento do mecanismo de execução do JavaScript que **move as declarações** de variáveis e funções para o topo do seu escopo (global ou de função) **durante a fase de compilação**, antes da execução do código.

> **Importante:** Somente as **declarações** são içadas (hoisted). As **atribuições/inicializações não são**.

***

## 🔹 Exemplo com `var`

```javascript
console.log(num); // undefined (declaração hoisted, mas sem valor atribuído)

var num = 10;

console.log(num); // 10
```

***

## 🔹 `let` e `const`

*   São **hoisted**, mas **não inicializados**.
*   Ficam na **Temporal Dead Zone (TDZ)** desde o início do escopo até a linha da declaração.
*   Acessar antes da declaração **lança erro**.

```javascript
// console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 5;

// console.log(c); // ReferenceError
const c = 30;
```

***

## 🔹 Funções (Function Declarations)

*   **São totalmente hoisted** (declaração e corpo).
*   Podem ser chamadas **antes da definição**.

```javascript
console.log(somar(5, 10)); // 15

function somar(a, b) {
    return a + b;
}
```

***

## 🔹 Expressões de Função e Arrow Functions

*   **Não são hoisted como funções**; seguem as regras da variável que as recebe:
    *   Com `var`: variável hoisted com `undefined` → chamar antes dá **TypeError**.
    *   Com `let` ou `const`: TDZ → **ReferenceError**.

```javascript
console.log(fn); // undefined
// console.log(fn()); // TypeError: fn is not a function
var fn = function() { return "ok"; };

console.log(g); // ReferenceError
const g = () => "ok";
```

***

## 🔹 Resumo Rápido

*   **Hoisting** iça **declarações** (não inicializações) ao topo do escopo.
*   `var` → hoisted com `undefined`.
*   `let`, `const` e `class` → hoisted, mas em **TDZ** (ReferenceError antes da linha).
*   **Function Declaration** → totalmente hoisted (pode chamar antes).
*   **Function/Arrow Expressions** → seguem a regra da variável (`var` → undefined, `let/const` → TDZ).

***

### ✅ Melhorias aplicadas:

✔ Estrutura clara com títulos e seções.  
✔ Exemplos comentados e organizados.  
✔ Explicações curtas e diretas.  
✔ Destaque para pontos importantes (TDZ, diferenças entre var/let/const).

***

*/