// Crear un programa que determine si un número es perfecto o no, (se dice que un número
// es perfecto si el número es igual a sus divisores, ejemplos 6 = 1 + 2 + 3).

let numero = prompt( 'Ingrese un número', '6' );
let divisores = 0;
let respuesta = '';

numero = parseInt( numero );

const esPerfecto = ( numero ) => {
    let esPerfecto = false;

    for ( let i = 0; i <= numero; i++ ) {
        if ( numero % i == 0 ) {
            divisores = divisores + i;

            if ( divisores == numero ) {
                respuesta = `El ${numero} es un número perfecto.`;

                esPerfecto = true;
            }
        }
    }

    if ( esPerfecto == false ) {
        respuesta = `El ${numero} no es un número perfecto.`;
    }

    return respuesta;
}

console.log( esPerfecto( numero ) );
