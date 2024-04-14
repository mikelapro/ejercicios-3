// Realizar el factorial de los primeros N números.
let numero = prompt( 'Ingrese un número', '5' );

numero = parseInt( numero );

let cont = numero;
let result = '';
let total = 1;

do {
    if ( cont == 1 ) {
        result = result + `${cont} = `;
    } else {
        result = result + `${cont} x `;
    }

    total = total * cont;

    cont--;

} while ( cont >= 1 );

document.write( result + total );
