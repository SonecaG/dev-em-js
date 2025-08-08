// ------------------ Declaração e Manipulação de Arrays ------------------

// 1. Criando um array vazio
let array = [];

// 2. Array com valores já definidos
let valores = [1, 2, 3, 5, 68, 9, 10, 30, 30, 40, 50];

// 3. Um array com valores como strings
let teste = ['10', '3', '6', '9', '9'];

// Exemplo de uso de .length para pegar o tamanho do array
console.log(teste.length); // Exibe o tamanho do array 'teste', que é 5.

// ------------------ Formas de Criar Arrays ------------------

// 1. Usando a sintaxe literal de arrays
const numeros = [1, 2, 3, 4];

// 2. Usando o construtor 'new Array'
const testeArray = new Array(1, 2, 3, 6);

// 3. Array mista, contendo números, objetos e outros arrays
const mista = [10, 2, 3, { 'teste': 20 }, [1, 2, 3]];

// 4. Array bidimensional (um array dentro de outro array)
const bidimensional = [[1, 2, 3, [1, 2, 3, 6]] , [4, 5, 6], [7, 8, 9]];

// Acessando um valor específico de um array bidimensional
console.log(bidimensional[0][3][3]); // Exibe o valor '6' (no array interno)


// ------------------ Acessando Elementos ------------------

// Acessando o penúltimo elemento do array 'mista'
console.log(mista[mista.length - 2]); // Exibe o objeto: { 'teste': 20 }

// Acessando o primeiro valor do array 'mista'
console.log(mista[0]); // Exibe o valor 10

// ------------------ Métodos Básicos de Arrays ------------------

// 1. Adicionar um valor ao final do array com .push()
array = [1, 2, 34, 5, 6];
array.push(100); // Adiciona '100' ao final do array
console.log(array); // Exibe: [1, 2, 34, 5, 6, 100]

// 2. Remover o último valor do array com .pop()
array.pop(); // Remove o último valor, que é '100'
console.log(array); // Exibe: [1, 2, 34, 5, 6]

// 3. Remover o primeiro valor do array com .shift()
array.shift(); // Remove o primeiro valor, que é '1'
console.log(array); // Exibe: [2, 34, 5, 6]

// 4. Adicionar um valor no início do array com .unshift()
array.unshift(10); // Adiciona '10' no início do array
console.log(array); // Exibe: [10, 2, 34, 5, 6]

// 5. Modificar um valor em uma posição específica do array
array[2] = 100; // Substitui o valor '34' por '100' na posição 2
console.log(array); // Exibe: [10, 2, 100, 5, 6]

// ------------------ Loops em Arrays ------------------

// 1. Usando 'for' clássico
let arrayNomes = [];
let arrayIdades = [];

for (let i = 1; i <= 10; i += 2) {
  let nome = prompt('Nome:');
  arrayNomes.push(nome); // Adiciona o nome no arrayNomes
  console.log(arrayNomes, i);
  
  let idade = prompt('Idade:');
  arrayIdades.push(idade); // Adiciona a idade no arrayIdades
  console.log(arrayIdades, i);
}

// 2. Usando 'forEach' para iterar sobre o array
let array = [1, 2, 3, 4, 5, 6];
array.forEach((a) => console.log(a)); // Exibe cada valor de 'array'

// Exemplo com 'forEach' passando o índice também
array.forEach(function(a, index) {
  console.log(index, a); // Exibe o índice e o valor de cada elemento
});

// 3. Usando 'for...of' para iterar sobre o array
for (let a of array) {
  console.log(a); // Exibe cada valor de 'array'
}

// ------------------ Ordenação de Arrays ------------------

// 1. Ordenando um array de strings em ordem alfabética
const arrayAlfabetica = ['c', 'd', 'a'];
arrayAlfabetica.sort(); // Ordena as letras
console.log(arrayAlfabetica); // Exibe: ['a', 'c', 'd']

// 2. Ordenando um array de números em ordem crescente
const arrayNumeros = [25, 65, 879, 1];
arrayNumeros.sort((a, b) => a - b); // Ordena os números em ordem crescente
console.log(arrayNumeros); // Exibe: [1, 25, 65, 879]

// ------------------ Concatenando Arrays ------------------

// 1. Concatenando dois arrays com o operador 'spread' (...)
let ar = [1, 2, 3];
let ar2 = [4, 5, 6];
let ar3 = [...ar, ...ar2]; // Junta os dois arrays
console.log(ar3); // Exibe: [1, 2, 3, 4, 5, 6]
