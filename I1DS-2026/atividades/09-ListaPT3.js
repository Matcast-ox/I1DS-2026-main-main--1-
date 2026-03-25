let numero = 3; 
if (numero === 1) {
  console.log("Domingo");
} else if (numero === 2) {
  console.log("Segunda feira");
} else if (numero === 3) {
  console.log("Terça feira");
} else if (numero === 4) {
  console.log("Quarta feira");
} else if (numero === 5) {
  console.log("Quinta feira");
} else if (numero === 6) {
  console.log("Sexta-feira");
} else if (numero === 7) {
  console.log("Sábado");
} else {
  console.log("Número inválido! Digite de 1 a 7.");
}
console.log("-----------------------------------------");
let mes = 4; // exemplo

if (mes === 1) {
  console.log("Janeiro");
} else if (mes === 2) {
  console.log("Fevereiro");
} else if (mes === 3) {
  console.log("Março");
} else if (mes === 4) {
  console.log("Abril");
} else if (mes === 5) {
  console.log("Maio");
} else if (mes === 6) {
  console.log("Junho");
} else if (mes === 7) {
  console.log("Julho");
} else if (mes === 8) {
  console.log("Agosto");
} else if (mes === 9) {
  console.log("Setembro");
} else if (mes === 10) {
  console.log("Outubro");
} else if (mes === 11) {
  console.log("Novembro");
} else if (mes === 12) {
  console.log("Dezembro");
} else {
  console.log("Número inválido! Digite de 1 a 12.");
}

console.log("-----------------------------------------");
let mez = 4;


switch (mez) {
  case 1:
  case 2:
  case 3:
    console.log("Primeiro trimestre!");
    break;


  case 4:
  case 5:
  case 6:
    console.log("Segundo trimestre!");
    break;
    
  case 7:
  case 8:
  case 9:
    console.log("Terceiro trimestre!");
    break;


  case 10:
  case 11:
  case 12:
    console.log("Quarto trimestre!");
    break;


  default:
    console.log("Mês incorreto!");
    break;
}
v1 = 111;
v2 = 90;

console.log("-----------------------------");
console.log("Valores: v1 =", v1, "| v2 = ", v2);
console.log("-----------------------------");

console.log("soma : v1 + v2 =", v1 + v2);
console.log("subtração : v1 - v2 =", v1 - v2);
console.log("multiplicação : v1 * v2 =", v1 * v2);
console.log("divisão : v1 / v2 =", v1 / v2);

console.log("-----------------------------");
let nota = "B";

if (nota === "A") {
  console.log("Excelente");
} else if (nota === "B") {
  console.log("Bom");
} else if (nota === "C") {
  console.log("Regular");
} else if (nota === "D") {
  console.log("Ruim");
} else {
  console.log("Nota inválida!");
}