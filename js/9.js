const frase = prompt("Escriba una frase: ");
const fraseMinuscula = frase.toLowerCase();

for (let i = 0; i < fraseMinuscula.length; i++) {
    
    if (fraseMinuscula[i] === "a" || fraseMinuscula[i] === "e" || fraseMinuscula[i] === "i" || fraseMinuscula[i] === "o" || fraseMinuscula[i] === "u" ) {
        
        document.write(fraseMinuscula[i]);

    }    
}

