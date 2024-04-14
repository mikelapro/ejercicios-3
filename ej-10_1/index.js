// Crear una función que reciba un arreglo con números y devuelva un nuevo arreglo con solo los números pares, hint: utilizar reduce()

const esPar = ( numero ) => {
    let respuesta = false;
    if ( numero % 2 == 0 ) {
        respuesta = true;
    }

    return respuesta;
};

// const esPar2 = ( numero ) => {
//     return numero % 2 == 0;
// };

const numbers = [1, 2, 3, 4, 5];

const pares = numbers.reduce( ( accumulator, currentValue, currentIndex ) => {
    if ( esPar( currentValue ) ) {
        accumulator.push( currentValue );
    }

    return accumulator;
}, [] ); // Inicializamos que el initial value es un array (si ponemos 0, queda como int y no se puede usar el .push). Esto determina el tipo de dato del accumulator.

console.log( pares );
