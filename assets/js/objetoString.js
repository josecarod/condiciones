let cadena1 = "Hola";
console.log(cadena1);

let cadena2 = new String("Adiós"); //Objeto String
console.log(cadena2);

//includes() busca  una cadena en otra y regresa true o false

console.log(cadena2.toLowerCase().includes('a'));
// convierte minisculas o mayusculas
console.log(cadena2.toLowerCase());
console.log(cadena2.toUpperCase());

// cohersión y conversión

// cohersión - Javascript en automatico convierte un tipo de dato en otro
console.log(cadena1.toLocaleLowerCase());

/* Función que recibe una palabra y la regresa invertida*/

let palabra = "Hola Mundo"
let arreglo = palabra.split("");
// console.log(arreglo);

// console.log(arreglo.reverse().join(""));


function invertirPalabra(cadena) {
    let arreglo = cadena.split(""); //convirtiendo la cadena en un arreglo
    arreglo.reverse(); //invirtiendo el arreglo
    let cadenaInvertida = arreglo.join(""); // une los elementos de un arreglo y regresa un string
    return console.log(cadenaInvertida)
}

invertirPalabra("Generation");