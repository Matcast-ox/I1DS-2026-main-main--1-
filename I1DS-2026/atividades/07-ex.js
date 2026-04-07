/*****************************************************
Lista de Exercícios - Vetores
*****************************************************/

// 1. Crie um array de frutas
let frutas = ["Banana", "Maçã", "Pera", "Uva", "Morango"];

// 2. Adicione Tangerina no final
frutas.push("Tangerina");

// 3. Adicione Goiaba no início
frutas.unshift("Goiaba");

// 4. Exiba o conteúdo do índice 5
console.log("Índice 5:", frutas[5]);

// 5. Exclua o elemento Uva
let indexUva = frutas.indexOf("Uva");
if (indexUva !== -1) {
    frutas.splice(indexUva, 1);
}

// 6. Crie uma cópia com índices 2, 3 e 4
let copia = frutas.slice(2, 5);

console.log("Array final:", frutas);
console.log("Cópia:", copia);


/*****************************************************
Lista de Exercícios - Funções
*****************************************************/

// 1. Função que calcula idade
function calcularIdade(anoNascimento) {
    let anoAtual = new Date().getFullYear();
    return anoAtual - anoNascimento;
}

// 2. Função que calcula autonomia do carro
function calcularAutonomia(combustivel) {
    const consumo = 12; // km por litro
    return combustivel * consumo;
}

// Testes
console.log("Idade:", calcularIdade(2000));
console.log("Autonomia:", calcularAutonomia(10), "km");