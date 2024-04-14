// Mostrar todos los números de 1 a n aumentando de 1 en 1 donde n lo ingresa el usuario
// en un prompt.

const numero = prompt( 'Ingrese un número', '5' );
let cont = 1;

numero = parseInt( numero );

do {
    console.log( cont );
    cont++;
} while ( cont <= numero );
