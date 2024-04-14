// Generar los primeros N números primos, donde n es ingresado por el usuario.

let objetivo = prompt( 'Ingrese un número', '5' );
let primos = [];
let cantidadNumPrimos = 0;
let proxNum = 0;

objetivo = parseInt( objetivo );

const esPrimo = ( numero ) => {
    let divisores = 0;

    for ( let i = 0; i <= numero; i++ ) {
        if ( numero % i == 0 ) {
            divisores = divisores + 1;
        }
    }

    let respuesta;

    if ( divisores == 2 ) {
        respuesta = true;
    } else {
        respuesta = false;
    }

    return respuesta;
};

do {
    proxNum++;

    if ( esPrimo( proxNum ) ) {
        primos.push( proxNum );

        cantidadNumPrimos++;
    }

} while ( cantidadNumPrimos < objetivo );

console.log( primos );
