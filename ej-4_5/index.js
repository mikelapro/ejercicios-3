// Generar los primeros N números perfectos.

let objetivo = prompt( 'Ingrese un número', '5' );
let perfectos = [];
let cantidadNumPerfectos = 0;
let proxNum = 0;

objetivo = parseInt( objetivo );

const esPerfecto = ( numero ) => {
    let esPerfecto = false;
    divisores = 0;

    for ( let i = 0; i <= numero; i++ ) {
        if ( numero % i == 0 ) {
            divisores = divisores + i;

            if ( divisores == numero ) {
                respuesta = true;

                esPerfecto = true;
            }
        }
    }

    if ( esPerfecto == false ) {
        respuesta = false;
    }

    return respuesta;
}

do {
    proxNum++;

    if ( esPerfecto( proxNum ) ) {
        perfectos.push( proxNum );

        cantidadNumPerfectos++;
    }

} while ( cantidadNumPerfectos < objetivo );

console.log( perfectos );
