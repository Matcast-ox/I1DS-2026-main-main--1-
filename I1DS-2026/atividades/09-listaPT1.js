var nome = "Matheus";
var idade = 16;
var city = "Jau";
console.log(
  "Olá,",
  nome,
  "voce tem",
  idade,
  "de idade, e mora na cidade de",
  city,
  "Seja bem vindo!",
);

console.log("----------------------------------------");

let x = 50;
let y = 60;
let adi = x + y;
let sub = x - y;
let mult = x * y;
let div = x / y;
console.log("A Adição de x + y", adi);
console.log("A Subração de x - y", sub);
console.log("A multipicação de x * y", mult);
console.log("A divisão de x / y", div);

//calculando a area do retangulo
console.log("----------------------------------------");
console.log("****************************************");
console.log("    Calculando a Area de um retangulo   ");
console.log("****************************************");
let base = 10;
let altura = 20;
let ret = base * altura;
console.log(
  "A Area to triangulo calculado com a Base de ",
  base,
  " metros, e a altura de",
  altura,
  " metros, é igual á",
  ret,
);

//calculando o volume do paralelepipedo

let Altura = 20;
let b = 10;
let a = 200;
// Sendo "c" a altura, "b" a largura e "a" o comprimento.

console.log("****************************************");
console.log(" Calculando o volume do paralelepipedo  ");
console.log("****************************************");

//formula "V=Ab.C"
let vol = a * b * Altura;

console.log("Com os dados seguidos, o volume do paralelepipedo é igual", vol);

console.log("****************************************");
console.log("            Desconto de 10%           ");
console.log("****************************************");
//Para calcular o desconto devemos dividir o desconto por 100 e subtrair do valor total
let produto = 200;
let multd = produto * 0.1;
let desc = produto - multd
console.log(" Um produto de 200 reais. O valor final do produto é de", desc, "Reais. E seu descont0 é =", multd, "Reais.");

console.log("****************************************");
//convetendo Celsius para Fahrenheit.
let c = 25
let F = (c * 1.8) + 32 // 32 é considerado grau 0
console.log("Temperatura", c, "Celsius");
console.log("****************************************");
console.log("      Temperatuda em fahrenheit", F);
console.log("****************************************");

//Calculando IMC: Peso/altura^2
let peso = 75; // kg
let alt = 1.78; //metros
let IMC = peso / (alt * alt);

console.log("****************************************");
console.log("IMC DE 75kg e 1,78m é igual á", IMC);
console.log("****************************************");

//Calculando a media de tres notas

let nota1 = 10
let nota2 = 9
let nota3 = 8.5
let media = (nota1 + nota2 + nota3) / 3
console.log("Primeira nota:", nota1, " a nota dois:", nota2, " a nota tres:", nota3);
console.log("A média das notas é", media);

console.log("****************************************");
let A = 2;
let B = 4;
let C = 1;

let delta = B * B - 4 * A * C;
//formula de delta Δ=b2−4ac
console.log("Delta: ", delta);
console.log("****************************************");
//convertanto horas em minutos e segundos (sempre multiplique por 60 para horas para minutos e divida para invertido)
let hora = 18;
let min = hora * 60;
console.log("Agora são", hora, "horas. Convertendo para minutos", min);
let seg = min * 60;
console.log("Sabendo que", hora, "h, possui", min, "minutos. A conversão para segundos é igual á", seg);

console.log("****************************************");

//FIM