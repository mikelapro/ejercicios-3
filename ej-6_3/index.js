// Crear una función que reciba un número entero y muestre un error si el tipo de dato
// pasado es de otro tipo.

const numero = prompt( 'Ingrese un número entero', 'a' );

const esNumeroEntero = ( numero ) => {
    let resultado;

    if ( isNaN( numero ) ) {
        resultado = false;
    } else if ( numero % 1 == 0 ) {
        resultado = true;
    } else {
        resultado = false;
    }

    return resultado;
};

if ( esNumeroEntero( numero ) == true ) {
    console.log( 'El número es un número entero.' );
} else {
    console.error( 'El número no es un número entero.' );
}
