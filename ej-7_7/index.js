// Crear un array vacío, luego generar 20 números al azar y guardarlos en un array.
let myArray = [];

let numeroAleatorio;
for ( let i = 0; i < 20; i++ ) {

    numeroAleatorio = Math.floor( Math.random() * 20 + 1 );

    myArray.push( numeroAleatorio );
}

console.log( myArray );