// Mostrar todos los números de 1 a N aumentando de 2 en 2 donde n lo ingresa el usuario
// en un prompt.

const numero = prompt( 'Ingrese un número', '5' );
let cont = 1;

numero = parseInt( numero );

do {
    console.log( cont );
    cont = cont + 2;
} while ( cont <= numero );
