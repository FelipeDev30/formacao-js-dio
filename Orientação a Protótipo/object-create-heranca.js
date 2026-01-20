/* 

Formas de criação de objetos literais com Protótipos

*/


const user = {
  ola() { return `Olá, eu sou ${this.nome}`; }
};


console.log(Object.getPrototypeOf(user) === Object.prototype);

const p1 = Object.create(user, {
    nome: { value: 'Felipe', writable: true, enumerable: true, configurable: true}
});

console.log(p1.ola())


const p2 = Object.create(user);
p2.nome = 'Luiz';
console.log(p2.ola());
