// Determinar si un número ingresado por el usuario en un loop es primo o no, validar que
// el número ingresado sea mayor o igual a dos.

let numero = prompt( 'Ingrese un número (mayor o igual a 2)', '7' );
let divisores = '';
let respuesta = '';

numero = parseInt( numero );

const esPrimo = ( numero ) => {
    for ( let i = 0; i <= numero; i++ ) {
        if ( numero % i == 0 ) {
            divisores = divisores + 1;
        }
    }

    if ( divisores == 2 ) {
        respuesta = `El número ${numero} es primo.`;
    } else {
        respuesta = `El número ${numero} no es primo.`;
    }

    return respuesta;
}

if ( numero >= 2 ) {
    console.log( esPrimo( numero ) );
} else {
    console.log( 'El número ingresado no es válido.' );
}
