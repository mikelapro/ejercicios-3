// Crear un array vacío, luego generar N números al azar y guardarlos en un array, N es
// introducido por el usuario a través de un prompt.

let numero = prompt( 'Ingrse un número', '2' );
let myArray = [];

numero = parseInt( numero );

let numeroAleatorio;
for ( let i = 0; i < numero; i++ ) {

    numeroAleatorio = Math.floor( Math.random() * 20 + 1 );

    myArray.push( numeroAleatorio );
}

console.log( myArray );