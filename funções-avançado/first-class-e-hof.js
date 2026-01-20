const hello = () => {
    console.log('Hello World!');
}

function funcao() {
    console.log(this);
}

const renan = {
    nome: "Renan",
    funcao,
    hello,
}

renan.funcao()
renan.hello()