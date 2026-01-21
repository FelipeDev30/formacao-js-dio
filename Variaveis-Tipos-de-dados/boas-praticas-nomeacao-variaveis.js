/* 
═══════════════════════════════════════════════════════════════════════════════
📚 GUIA COMPLETO: BOAS PRÁTICAS DE NOMEAÇÃO DE VARIÁVEIS 📝
═══════════════════════════════════════════════════════════════════════════════

📌 CONCEITO:
A nomeação de variáveis é uma das habilidades mais importantes na programação.
Nomes bem escolhidos tornam o código mais legível, mantível e profissional.
Código é lido muito mais vezes do que é escrito!

"Programas devem ser escritos para pessoas lerem, e apenas incidentalmente 
para máquinas executarem." - Harold Abelson

═══════════════════════════════════════════════════════════════════════════════
*/

console.log('\n═══════════════════════════════════════════════════════');
console.log('📖 PRÁTICA 1: USE NOMES DESCRITIVOS');
console.log('═══════════════════════════════════════════════════════\n');

/* 
📌 CONCEITO: NOMES DESCRITIVOS
- O nome deve indicar claramente o que a variável representa
- Evite nomes genéricos como: data, info, temp, x, y
- Prefira nomes que expressem a INTENÇÃO
- Pergunte-se: "Outra pessoa entenderia esse nome?"
*/

// ❌ RUIM - Nomes vagos e genéricos
let x = "Luiz";
let d = new Date();
let temp = 100;

console.log('❌ Nomes ruins (vagos e genéricos):');
console.log('  x =', x);
console.log('  d =', d);
console.log('  temp =', temp);

// ✅ BOM - Nomes descritivos e claros
let userName = "Luiz";
let orderDate = new Date();
let totalPrice = 100;

console.log('\n✅ Nomes bons (descritivos e claros):');
console.log('  userName =', userName);
console.log('  orderDate =', orderDate.toLocaleDateString('pt-BR'));
console.log('  totalPrice = R$', totalPrice);

console.log('\n═══════════════════════════════════════════════════════');
console.log('📖 PRÁTICA 2: SIGA O PADRÃO camelCase');
console.log('═══════════════════════════════════════════════════════\n');

/* 
📌 CONCEITO: camelCase
- Padrão mais comum em JavaScript
- Primeira palavra minúscula, próximas com inicial maiúscula
- Usado para: variáveis, funções, métodos
- Classes usam PascalCase (primeira letra maiúscula)
*/

// ✅ BOM - camelCase para variáveis e funções
let firstName = "João";
let lastName = "Silva";
let isLoggedIn = true;
let totalItemsInCart = 5;

function calculateTotalPrice(items) {
    return items.reduce((sum, item) => sum + item.price, 0);
}

console.log('✅ Exemplos de camelCase:');
console.log('  firstName:', firstName);
console.log('  lastName:', lastName);
console.log('  isLoggedIn:', isLoggedIn);
console.log('  totalItemsInCart:', totalItemsInCart);

// ✅ PascalCase para classes
class UserProfile {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

const user = new UserProfile('Maria', 'maria@email.com');
console.log('  UserProfile (classe):', user);

// ❌ EVITE - snake_case (não é o padrão JavaScript)
let user_name = "Pedro"; // Funciona, mas não é idiomático
console.log('\n❌ snake_case (evite em JavaScript):', user_name);

// ✅ CONSTANTES - UPPER_SNAKE_CASE
const MAX_LOGIN_ATTEMPTS = 3;
const API_BASE_URL = "https://api.exemplo.com";
const TAX_RATE = 0.15;

console.log('\n✅ Constantes (UPPER_SNAKE_CASE):');
console.log('  MAX_LOGIN_ATTEMPTS:', MAX_LOGIN_ATTEMPTS);
console.log('  API_BASE_URL:', API_BASE_URL);
console.log('  TAX_RATE:', TAX_RATE);

console.log('\n═══════════════════════════════════════════════════════');
console.log('📖 PRÁTICA 3: EVITE ABREVIAÇÕES DESNECESSÁRIAS');
console.log('═══════════════════════════════════════════════════════\n');

/* 
📌 CONCEITO: ABREVIAÇÕES
- Abreviações podem confundir quem lê o código
- Prefira nomes completos e claros
- Exceções: abreviações universalmente conhecidas (id, url, html, etc)
- Lembre-se: código é lido mais vezes do que escrito!
*/

// ❌ RUIM - Abreviações confusas
let custEm = "cliente@email.com";
let usrNm = "João";
let qnt = 10;
let prc = 99.90;

console.log('❌ Abreviações confusas:');
console.log('  custEm =', custEm);
console.log('  usrNm =', usrNm);
console.log('  qnt =', qnt);
console.log('  prc = R$', prc);

// ✅ BOM - Nomes completos e claros
let customerEmail = "cliente@email.com";
let userName2 = "João";
let quantity = 10;
let price = 99.90;

console.log('\n✅ Nomes completos:');
console.log('  customerEmail =', customerEmail);
console.log('  userName =', userName2);
console.log('  quantity =', quantity);
console.log('  price = R$', price);

// ✅ ACEITO - Abreviações conhecidas
let userId = 123;
let apiUrl = "https://api.exemplo.com";
let htmlContent = "<div>Conteúdo</div>";

console.log('\n✅ Abreviações universalmente conhecidas:');
console.log('  userId:', userId);
console.log('  apiUrl:', apiUrl);
console.log('  htmlContent:', htmlContent);

console.log('\n═══════════════════════════════════════════════════════');
console.log('📖 PRÁTICA 4: SUBSTANTIVOS vs VERBOS');
console.log('═══════════════════════════════════════════════════════\n');

/* 
📌 CONCEITO: SUBSTANTIVOS E VERBOS
- Variáveis (coisas) → SUBSTANTIVOS
- Funções (ações) → VERBOS
- Booleanos → is, has, can, should + adjetivo
- Arrays → plural
*/

// ✅ Variáveis - Substantivos
let userAge = 25;
let productName = "Notebook";
let orderTotal = 1500.00;
let shoppingCart = [];

console.log('✅ Variáveis (substantivos):');
console.log('  userAge:', userAge);
console.log('  productName:', productName);
console.log('  orderTotal:', orderTotal);

// ✅ Booleanos - is, has, can, should
let isActive = true;
let hasPermission = false;
let canEdit = true;
let shouldUpdate = false;

console.log('\n✅ Booleanos (is/has/can/should):');
console.log('  isActive:', isActive);
console.log('  hasPermission:', hasPermission);
console.log('  canEdit:', canEdit);
console.log('  shouldUpdate:', shouldUpdate);

// ✅ Funções - Verbos
function calculateTotal(items) {
    return items.reduce((sum, item) => sum + item, 0);
}

function validateEmail(email) {
    return email.includes('@');
}

function saveUserData(data) {
    console.log('  Salvando dados:', data);
}

console.log('\n✅ Funções (verbos):');
calculateTotal([10, 20, 30]);
validateEmail('user@email.com');
saveUserData({ name: 'João' });

// ✅ Arrays - Plural
let users = ['João', 'Maria', 'Pedro'];
let products = ['Notebook', 'Mouse', 'Teclado'];
let orders = [{ id: 1 }, { id: 2 }];

console.log('\n✅ Arrays (plural):');
console.log('  users:', users);
console.log('  products:', products);
console.log('  orders.length:', orders.length);

console.log('\n═══════════════════════════════════════════════════════');
console.log('📖 PRÁTICA 5: EVITE PALAVRAS RESERVADAS');
console.log('═══════════════════════════════════════════════════════\n');

/* 
📌 CONCEITO: PALAVRAS RESERVADAS
- JavaScript tem palavras reservadas que não podem ser usadas
- Exemplos: if, for, while, class, const, let, function, return, etc
- Use alternativas ou adicione contexto
*/

// ❌ EVITE - Palavras reservadas (causam erros)
// let class = "Math"; // ❌ Erro: class é palavra reservada
// let function = "test"; // ❌ Erro: function é palavra reservada
// let return = 10; // ❌ Erro: return é palavra reservada

console.log('❌ Palavras reservadas que NÃO podem ser usadas:');
console.log('  class, function, return, if, for, while, const, let, etc');

// ✅ BOM - Alternativas claras
let className = "Math";
let functionName = "test";
let returnValue = 10;
let userClass = "Premium";
let callback = function() { return 'callback'; };

console.log('\n✅ Alternativas válidas:');
console.log('  className:', className);
console.log('  functionName:', functionName);
console.log('  returnValue:', returnValue);
console.log('  userClass:', userClass);

console.log('\n═══════════════════════════════════════════════════════');
console.log('📖 PRÁTICA 6: SEJA CONSISTENTE');
console.log('═══════════════════════════════════════════════════════\n');

/* 
📌 CONCEITO: CONSISTÊNCIA
- Escolha um padrão e siga em todo o projeto
- Mesmos conceitos devem ter nomes similares
- Facilita manutenção e colaboração em equipe
*/

// ✅ BOM - Padrão consistente para booleanos
let isUserActive = true;
let isProductAvailable = false;
let isOrderPending = true;

console.log('✅ Padrão consistente (is + Substantivo + Adjetivo):');
console.log('  isUserActive:', isUserActive);
console.log('  isProductAvailable:', isProductAvailable);
console.log('  isOrderPending:', isOrderPending);

// ✅ BOM - Padrão consistente para funções CRUD
function createUser(data) { return { ...data, id: Date.now() }; }
function readUser(id) { return { id, name: 'User ' + id }; }
function updateUser(id, data) { return { id, ...data }; }
function deleteUser(id) { return { deleted: true, id }; }

console.log('\n✅ Padrão consistente (CRUD):');
console.log('  createUser()');
console.log('  readUser()');
console.log('  updateUser()');
console.log('  deleteUser()');

// ✅ BOM - Padrão consistente para getters/setters
let userData = { name: 'João', age: 30 };

function getUserName() { return userData.name; }
function getUserAge() { return userData.age; }
function setUserName(name) { userData.name = name; }
function setUserAge(age) { userData.age = age; }

console.log('\n✅ Padrão consistente (getters/setters):');
console.log('  getUserName():', getUserName());
console.log('  getUserAge():', getUserAge());
setUserName('Maria');
console.log('  Após setUserName("Maria"):', getUserName());

console.log('\n═══════════════════════════════════════════════════════');
console.log('📖 EXEMPLOS PRÁTICOS: ANTES vs DEPOIS');
console.log('═══════════════════════════════════════════════════════\n');

console.log('❌ CÓDIGO RUIM:');
console.log('  let d = new Date();');
console.log('  let x = "João";');
console.log('  let f = function(a, b) { return a + b; };');
console.log('  let temp = 100;');

console.log('\n✅ CÓDIGO BOM:');
console.log('  let currentDate = new Date();');
console.log('  let customerName = "João";');
console.log('  let calculateSum = function(valueA, valueB) { return valueA + valueB; };');
console.log('  let totalAmount = 100;');

console.log('\n═══════════════════════════════════════════════════════');
console.log('📋 RESUMO FINAL - CHECKLIST DE NOMEAÇÃO');
console.log('═══════════════════════════════════════════════════════\n');

console.log(`
✅ CHECKLIST DE BOAS PRÁTICAS:

1. ✅ Use nomes DESCRITIVOS
   └─ userName em vez de x
   └─ totalPrice em vez de temp

2. ✅ Siga o padrão CAMELCASE
   └─ firstName, lastName, isActive
   └─ Classes em PascalCase: UserProfile
   └─ Constantes em UPPER_SNAKE_CASE: MAX_VALUE

3. ✅ Evite ABREVIAÇÕES desnecessárias
   └─ customerEmail em vez de custEm
   └─ Exceção: id, url, html (conhecidas)

4. ✅ Use SUBSTANTIVOS para variáveis
   └─ userAge, productName, orderTotal
   └─ Booleanos: isActive, hasPermission

5. ✅ Use VERBOS para funções
   └─ calculateTotal, validateEmail, saveData
   └─ Arrays em plural: users, products

6. ✅ Evite PALAVRAS RESERVADAS
   └─ className em vez de class
   └─ functionName em vez de function

7. ✅ Seja CONSISTENTE
   └─ Mesmo padrão em todo o projeto
   └─ Facilita colaboração em equipe

═══════════════════════════════════════════════════════
💡 LEMBRE-SE:
"Qualquer tolo consegue escrever código que um computador 
entende. Bons programadores escrevem código que humanos 
entendem." - Martin Fowler
═══════════════════════════════════════════════════════
`);