const number1 = parseInt(prompt("Primer numero:"));
const number2 = parseInt(prompt("Segundo numero:"));
const number3 = parseInt(prompt("Tercer numero:"));

if (number1 > number2 && number1 > number3) {
    document.write("El " + number1 + " es el numero mas grande.");
}
if (number2 > number1 && number2 > number3) {
    document.write("El " + number2 + " es el numero mas grande.");
}
if (number3 > number2 && number3 > number1) {
    document.write("El " + number3 + " es el numero mas grande.");
}