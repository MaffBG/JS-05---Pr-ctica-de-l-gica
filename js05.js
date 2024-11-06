/* *EJERCICIO 1: USER PROFILE*/
/**
 * Escribe un programa que solicite al usuario sus datos: nombre de usuario, edad y una lista de sus películas favoritas. Almacene la información y, a continuación, muéstrela en la consola. Tenga en cuenta que la salida de las películas debe agregar un pequeño mensaje como: 'La película {película} es una de mis favoritas.
 */
// 1. Pedir datos al usuario
const username = prompt("¡Holi! Por favor ingresa tu nombre de usuario:");
const age = parseInt(prompt("Ingrese su edad:"));
const favoriteMovies = prompt("Ingrese sus películas favoritas separadas por comas:").split(",");

// 2. Mostrar los datos en la consola
console.log(`Nombre de usuario: ${username}`);
console.log(`Edad: ${age}`);
console.log("Películas favoritas:");
favoriteMovies.forEach(movie => console.log(`- La película ${movie} es una de mis favoritas.`));



/* *EJERCICIO 2: HIGHEST NUMBER*/
/**
 * Escribe un programa que te pida 10 números. Usando operadores lógicos y cualquier otra función/estructura de javascript que haya visto antes, determine y genere el más alto de esos números.
*/
// 1. Iniciar una variable con el fin de almacenar el número más alto
let highestNumber = Number.MIN_SAFE_INTEGER;

// 2. Pedir 10 números al usuario
for (let i = 0; i < 10; i++) {
    const number = parseInt(prompt(`Ingrese el número ${i + 1}:`));
    highestNumber = Math.max(highestNumber, number);
}

// 3. Mostrar el número más alto
console.log(`El número más alto es: ${highestNumber}`);



/* *EJERCICIO 3: ALARM*/
/**
 * Escriba un programa que pregunte a un usuario por la cantidad de segundos necesarios para que se ejecute una alarma (mensaje) junto con un texto para mostrar una vez que esos segundos hayan pasado en tiempo real.
 */
 // 1. Pedir los segundos y el mensaje al usuario
const seconds = parseInt(prompt("Ingrese la cantidad de segundos para la alarma:"));
const message = prompt("Ingrese el mensaje de la alarma:");

// 2. Usar setTimeout para ejecutar la alarma después de los segundos especificados
setTimeout(() => {
    console.log(message);
}, seconds * 1000);



/* *EJERCICIO 4: PALINDROME / PALÍNDROMO*/
/**
 * Escriba un programa que solicite una palabra u oración (puede estar en mayúsculas, tener espacios y signos de puntuación). Averigüe si la oración/palabra es un palíndromo o no. Ignorar la puntuación, los espacios y las letras mayúsculas.
*/
// 1. Pedir la palabra o frase al usuario
const input = prompt("Ingrese una palabra o frase:");

// 2. Eliminar espacios, puntuación y convertimos a minúsculas
const processedInput = input.toLowerCase().replace(/[^a-z0-9]/g, '');

// 3. Verificar si es palíndromo
const isPalindrome = processedInput === processedInput.split('').reverse().join('');

// 4. Mostrar el resultado
console.log(isPalindrome ? "Es un palíndromo" : "No es un palíndromo");



/* *EJERCICIO 5: FACTORIAL*/
/**
 * Escriba un programa que solicite un número de inquilino n. Donde 1 <= n. Resuelva esto usando la recursividad.
*/
// Función recursiva para calcular el factorial
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// 1. Pedir el número al usuario
const number = parseInt(prompt("Ingrese un número entero positivo:"));

// 2. Calcular y mostrar el factorial
const result = factorial(number);
console.log(`El factorial de ${number} es ${result}`);



/* *EJERCICIO 6: FLAR ARRAY / ARREGLO PLANO*/
/**
 * Escriba un programa que tome la siguiente matriz anidada y la aplane (la convierte en una matriz 1D). Utilice cualquier tipo de algoritmo que desee como devoluciones de llamada, recursividad, etc.
let multiDimensión = [1, [2, 3, [4, 5, [6]]]];
*/
// Función recursiva para aplanar el arreglo
function flatten(arr) {
    return arr.reduce((flat, toFlatten) => {
        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
}

// Definir la variable multiDimension
let multiDimension = [1, [2, 3, [4, 5, [6]]]];

// Aplanar el arreglo multidimensional
const flatArray = flatten(multiDimension);

// Mostrar el arreglo aplanado
console.log(flatArray);