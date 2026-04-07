//parte 5
console.log("--------------------------------------")
 //36.  Crie um vetor com 10 números e exiba todos.
 let vetor = [10, 5, 8, 20, 3, 7, 15, 2, 9, 12];

for (let i = 0; i < vetor.length; i++) {
  console.log(vetor[i]);
}
 console.log("-----------------------------------------")

//37. Calcule a soma dos elementos do vetor.
let soma = 2;

for (let i = 0; i < vetor.length; i++) {
  soma += vetor[i];
}

console.log("Soma:", soma);
console.log("-----------------------------------------")

//38. Calcule a média do vetor.
let media = soma / vetor.length;

console.log("Média:", media);
console.log("-----------------------------------------")

//39. Encontre o maior valor do vetor.
let maior = vetor[0];

for (let i = 1; i < vetor.length; i++) {
  if (vetor[i] > maior) {
    maior = vetor[i];
  }
}

console.log("Maior:", maior);
console.log("-----------------------------------------")

//40. Encontre o menor valor do vetor
let menor = vetor[0];

for (let i = 1; i < vetor.length; i++) {
  if (vetor[i] < menor) {
    menor = vetor[i];
  }
}

console.log("Menor:", menor);

console.log("-----------------------------------------")

//41. Conte quantos números são pares e ímpares.
let pares = 0;
let impares = 0;

for (let i = 0; i < vetor.length; i++) {
  if (vetor[i] % 2 === 0) {
    pares++;
  } else {
    impares++;
  }
}

console.log("Pares:", pares);
console.log("Ímpares:", impares);
console.log("-----------------------------------------")

//42. Multiplique todos os elementos por 2.
for (let i = 0; i < vetor.length; i++) {
  vetor[i] = vetor[i] * 2;
}

console.log("Vetor multiplicado:", vetor);
console.log("-------------------------------------------")

/////////////////////////////////////////////////////////////
//PARTE 6
//(USAR for ANINHADO)
//43. Crie uma matriz 3x3 e exiba todos os valores.
let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(matriz[i][j]);
  }
}
console.log("-------------------------------------------")

//44. Exiba a diagonal principal de uma matriz.
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === j) {
      console.log(matriz[i][j]);
    }
  }
}
console.log("-------------------------------------------")

//45. Exiba a diagonal secundária.
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i + j === 2) {
      console.log(matriz[i][j]);
    }
  }
}
console.log("-------------------------------------------")

//46. Some todos os elementos da matriz.
let somar = 0;

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    somar += matriz[i][j];
  }
}

console.log("Somar:", somar);

console.log("-------------------------------------------")

//47. Encontre o maior valor da matriz.
let maiorr = matriz[0][0];

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (matriz[i][j] > maiorr) {
      maiorr = matriz[i][j];
    }
  }
}

console.log("Maior:", maiorr);

console.log("-------------------------------------------")

//48. Multiplique todos os valores por um número X.
let x = 2;

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    matriz[i][j] = matriz[i][j] * x;
  }
}

console.log(matriz);
console.log("-------------------------------------------")

//49. Conte quantos valores são maiores que 10.
let contador = 0;

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (matriz[i][j] > 10) {
      contador++;
    }
  }

}

console.log("Maiores que 10:", contador);
console.log("-------------------------------------------")

//50. Crie uma matriz e exiba no formato:
//[ 1 2 3 ]
//[ 4 5 6 ]
//[ 7 8 9 ]
for (let i = 0; i < 3; i++) {
  let linha = "[ ";

  for (let j = 0; j < 3; j++) {
    linha += matriz[i][j] + " ";
  }

  linha += "]";
  console.log(linha);
}


//FIM
