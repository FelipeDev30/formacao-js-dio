/* 

    Closures ou Fechamentos
    -----------------------
    Closures são uma característica poderosa do JavaScript que permite que uma função "lembre" do escopo em que foi criada, mesmo quando é executada fora desse escopo. Isso significa que uma função pode acessar variáveis de seu escopo pai, mesmo após esse escopo ter sido encerrado.

    Exemplo de Closure:
    
*/

function soma(x) {
    return (y) => {
        return x + y;
    }
}

const somaParcial = soma(10);

console.log(somaParcial(20));
