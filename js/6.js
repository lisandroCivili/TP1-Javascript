const number1 = parseInt(prompt("Primer numero:"));
const number2 = parseInt(prompt("Segundo numero:"));

if (number1 > number2) {
    document.write("El " + number1 + " es el numero mas grande.");
} else {
    document.write("El " + number2 + " es el numero mas grande.");
}