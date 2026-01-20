function funcao1() {
    console.log(this);
}

const funcao2 = () => {
    console.log(this); // Não cria seu próprio this, herda do contexto léxico, ou seja, do escopo onde foi definida
}

const felipe = {
    nome: 'Felipe',
    funcao1: funcao1,
    funcao2: funcao2,
    funcao3: function() {
        console.log(this.nome);
    }
}

felipe.funcao1(); // this aponta para o objeto felipe
felipe.funcao2(); // this aponta para o contexto léxico (neste caso, o objeto global)
felipe.funcao3(); // this aponta para o objeto felipe

funcao2();