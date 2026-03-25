for (let i = 1; i <= 100; i++) {
  console.log(i);
}
console.log("-------------------------------")
for (let num2 = 100; num2 >= 1; num2--) {
  console.log(num2);
}
console.log("-------------------------------")
for (let num3 = 2; num3 <= 50; num3 += 2) {
  console.log(num3);
}
console.log("-------------------------------")
for (let num4 = 1; num4 <= 50; num4 += 2) {
  console.log(num4);
}
console.log("-------------------------------")
let soma1 = 0;
for (let num5 = 1; num5 <= 100; num5++) {
  soma1 += num5;
}
console.log("Soma:", soma1);
console.log("-------------------------------")
let num6 = 5;
let fatorial1 = 1;

for (let i1 = 1; i1 <= num6; i1++) {
  fatorial1 *= i1;
}

console.log(num6 + "! =", fatorial1);
console.log("-------------------------------")
let num7 = 7;

for (let i2 = 1; i2 <= 10; i2++) {
  console.log(num7 + " x " + i2 + " = " + (num7 * i2));
}
console.log("-------------------------------")
let contPar1 = 0;

for (let num8 = 1; num8 <= 100; num8++) {
  if (num8 % 2 === 0) contPar1++;
}

console.log("Quantidade de números pares entre 1 e 100:", contPar1);
console.log("-------------------------------")
for (let num9 = 0; num9 <= 100; num9 += 5) {
  console.log(num9);
}
console.log("-------------------------------")
let num10 = 5; // número de linhas

for (let i3 = 1; i3 <= num10; i3++) {
  let linha1 = "";
  for (let j1 = 1; j1 <= i3; j1++) {
    linha1 += "*";
  }
  console.log(linha1);
}