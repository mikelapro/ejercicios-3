// Realizar la suma de todos los números pares entre N y M donde N y M los ingresa
// un usuario.
let numDesde = prompt( 'Ingrese un número', '5' );
let numHasta = prompt( 'Ingrese otro número', '10' );

numDesde = parseInt( numDesde );
numHasta = parseInt( numHasta );

let cont = numDesde;
let result = 0;

do {
    // Si es par...
    if ( cont % 2 == 0 ) {
        result = result + cont;
    }

    cont++;

} while ( cont <= numHasta );

console.log( result );
