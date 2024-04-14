// Mostrar todos los números de N a 1 disminuyendo de 1 en 1 donde n lo ingresa el usuario
// en un prompt.

const numero = prompt( 'Ingrese un número', '5' );
let cont = numero;

do {
    console.log( cont );
    cont--;
} while ( cont >= 1 );
