/* 

Em JavaScript, **escopo de variáveis** define onde uma variável pode ser acessada no código. Existem três tipos principais de escopo:

***

## ✅ 1. **Escopo Global**

*   Variáveis declaradas **fora de qualquer função ou bloco** pertencem ao escopo global.
*   Podem ser acessadas de **qualquer parte do código**.

```javascript
var globalVar = "Sou global";

function teste() {
    console.log(globalVar); // Acessa normalmente
}
teste();
```

> **Atenção:** Variáveis globais podem causar conflitos e dificultar manutenção.

***

## ✅ 2. **Escopo de Função**

*   Criado quando você declara uma variável **dentro de uma função**.
*   Só pode ser acessada **dentro dessa função**.

```javascript
function exemplo() {
    var localVar = "Sou local";
    console.log(localVar); // OK
}
exemplo();
// console.log(localVar); // Erro: localVar não está definida
```

> `var` tem **escopo de função**, não de bloco.

***

## ✅ 3. **Escopo de Bloco**

*   Criado por estruturas como `{}`, `if`, `for`, `while`.
*   Variáveis declaradas com **`let` ou `const`** respeitam escopo de bloco.
*   `var` **ignora** escopo de bloco (fica no escopo da função ou global).

```javascript
{
    let x = 10;
    const y = 20;
    var z = 30;
    console.log(x, y, z); // OK
}
// console.log(x); // Erro
// console.log(y); // Erro
console.log(z); // OK (var ignorou o bloco)
```

***

## ✅ 4. **Escopo Léxico**

*   Determinado pela **posição do código**.
*   Funções internas têm acesso às variáveis do escopo externo (closure).

```javascript
function externa() {
    let msg = "Olá";
    function interna() {
        console.log(msg); // Acessa variável da função externa
    }
    interna();
}
externa();
```

***

### 🔍 Diferenças importantes:

*   `var` → escopo **global ou de função**.
*   `let` e `const` → escopo **de bloco**.
*   Funções → criam **escopo próprio**.
*   Closures → permitem acessar variáveis externas mesmo após a função externa terminar.

***

*/