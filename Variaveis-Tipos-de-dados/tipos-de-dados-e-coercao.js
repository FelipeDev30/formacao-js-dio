/* 

Vamos simplificar esses conceitos para você entender bem:

***

## ✅ **JavaScript é fracamente tipada**

Isso significa que **não precisamos declarar o tipo da variável** (como em Java ou C#). O JavaScript decide o tipo **automaticamente durante a execução**.

Exemplo:

```javascript
let x = 10;      // x é Number
x = "texto";     // agora x é String
```

***

## ✅ **Tipos de dados primitivos em JavaScript**

São os tipos básicos que não são objetos:

1.  **boolean** → valores lógicos: `true` ou `false`
    ```javascript
    let isActive = true;
    let hasPermission = false;
    ```

2.  **null** → representa **ausência intencional de valor**
    ```javascript
    let user = null; // significa "não tem usuário"
    ```

3.  **undefined** → significa que a variável **foi declarada, mas não tem valor**
    ```javascript
    let name;
    console.log(name); // undefined
    ```

4.  **number** → números (inteiros ou decimais)
    ```javascript
    let age = 29;
    let price = 19.99;
    ```

5.  **string** → texto
    ```javascript
    let message = "Olá, mundo!";
    ```

6.  **symbol** → identificador único (usado para propriedades únicas em objetos)
    ```javascript
    let id = Symbol("id");
    ```

***

## ✅ **Wrappers**

São objetos que envolvem tipos primitivos para dar métodos extras:

*   `String`, `Number`, `Boolean` são **construtores**.
*   Exemplo:
    ```javascript
    let text = "Olá";
    console.log(text.toUpperCase()); // usa métodos do objeto String
    ```

*(Internamente, o JS converte o primitivo em objeto temporário para usar métodos.)*

***

## ✅ **Coerção de tipos**

É quando o JavaScript **converte automaticamente** um tipo para outro:

*   Exemplo:
    ```javascript
    console.log("5" + 1); // "51" (string + número → tudo vira string)
    console.log("5" - 1); // 4 (string vira número)
    ```

Pode ser **implícita** (automática) ou **explícita** (quando usamos `Number()`, `String()`, etc.).

***

### Resumindo:

*   **boolean** → `true` / `false`
*   **null** → ausência intencional
*   **undefined** → não definido
*   **number** → números
*   **string** → texto
*   **symbol** → identificador único
*   **Wrappers** → objetos que dão métodos aos primitivos
*   **Coerção** → conversão automática ou manual de tipos

***

+Infinity -Infinity e NaN
Double Precision 64-bit binary format IEEE 754

*/