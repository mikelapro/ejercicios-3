// Pedir un número a un usuario a través de un prompt y luego dividirlo por 10.
// Ejemplo: 5 / 10 = 0.5.

let numero = prompt( 'Ingrese un número', '10' );

numero = parseInt( numero );

const resultado = numero / 10;

console.log( resultado );
