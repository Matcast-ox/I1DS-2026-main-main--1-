//Lista de exercicios parte 2
//Sabendo se um numero é positivo, negativo ou zero
//definindo numeros
let numero1 = -50;
let numero2 = 900;
let numero3 = 0;

if (numero1 > 0) {
  console.log(numero1, " é positivo");
} else if (numero1 < 0) {
  console.log(numero1, " é negativo");
} else {
  console.log(numero1, "é zero");
}

if (numero2 > 0) {
  console.log(numero2, "é positivo");
} else if (numero2 < 0) {
  console.log(numero2, "é negativo");
} else {
  console.log(numero2, "é zero");
}

if (numero3 > 0) {
  console.log(numero3, "é positivo");
} else if (numero3 < 0) {
  console.log(numero3, "é negativo");
} else {
  console.log(numero3, "é zero");
}
console.log("------------------------------------");
//Se o resto da divisão por 2 for 0 -> número par
//Se for 1 (ou diferente de 0) -> número ímpar
let numin = 7;

if (numin % 2 === 0) {
  console.log(numin, "O numero é Par");
} else {
  console.log(numin, "O numero é Ímpar");
}
let numpar = 24;

if (numpar % 2 === 0) {
  console.log(numpar, "O numero é Par");
} else {
  console.log(numpar, "O numero é Ímpar");
}
let numim = 29;

if (numim % 2 === 0) {
  console.log(numim, "O numero é Par");
} else {
  console.log(numim, "O numero é Ímpar");
}
console.log("------------------------------------");
//13 - verifique se um numero é multiplo de 3
let multi1 = 9;

if (multi1 % 3 === 0) {
  console.log(multi1, "É múltiplo de 3");
} else {
  console.log(multi1, "Não é múltiplo de 3");
}
let multi2 = 8;

if (multi2 % 3 === 0) {
  console.log(multi2, "É múltiplo de 3");
} else {
  console.log(multi2, "Não é múltiplo de 3");
}
console.log("------------------------------------");
//verificando se um aluno foi aprovado, aprovado > 7, recuperação > 5 e < 7, reprovado < 5.
let ntfi = 8.5;

if (ntfi >= 7) {
  console.log("Aprovado com a nota", ntfi);
} else if (ntfi < 7) {
  console.log("Receuperação");
} else if (ntfi < 5) {
  console.log("Reprovado");
}
console.log("------------------------------------");
function podeVotar(idade) {
  let frase;
  if (idade < 16) {
    frase = "nao pode votar";
  } else if (idade >= 18 && idade <= 65) {
    frase = "pode votar , e e obrigatório!";
  } else {
    frase = "pode votar, mas e opcional";
  }
  return frase;
}
let idade = 23;
console.log("Idade:", idade, "-", podeVotar(idade));
idade = 25;
console.log("Idade:", idade, "-", podeVotar(idade));
idade = 12;
console.log("Idade:", idade, "-", podeVotar(idade));
idade = 57;
console.log("Idade:", idade, "-", podeVotar(idade));
console.log("------------------------------------");

//verificando numero entre 10 e 50
let numb = 42;
if (numb >= 10 && numb <= 50) {
  console.log(numb, "Esta entre 10 e 50");
} else {
  console.log(numb, "Não está entre 10 e 50");
}
console.log("------------------------------------");
let usuarioCorreto = "Matt";
let senhaCorreta = "1234";

let usuario = "mate";
let senha = "1234";

if (usuario === usuarioCorreto && senha === senhaCorreta) {
  console.log("Login realizado com sucesso!");
} else {
  console.log("Usuário ou senha incorretos!");
}
console.log("------------------------------------");
let n1 = 1;
let n2 = 4;

if (n1 >= n2) {
  console.log(n1, "É maior que ", n2);
} else if (n2 >= n1) {
  console.log(n2, " é maior que", n1);
}
console.log("------------------------------------");
let n3 = 9;
let n4 = 0;
let n5 = 2;

if (n1 >= n2 && n1 >= n3) {
  console.log(n1 + " é maior que " + n2 + " e " + n3);
} else if (n2 >= n1 && n2 >= n3) {
  console.log(n2 + " é maior que " + n1 + " e " + n3);
} else {
  console.log(n3 + " é maior que " + n1 + " e " + n2);
}
console.log("------------------------------------");
let years = 34;

if (years > 50) {
  console.log("Você é um idoso");
} else if (years >= 18) {
  console.log("Você é um adulto");
} else {
  console.log("Você é uma criança");
}