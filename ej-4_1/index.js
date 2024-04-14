// Encontrar todos los divisores de un número.

const numero = 10;

// for ( let i = 0; i <= numero; i++ ) {
//     if ( numero % i == 0 ) {
//         console.log( i );
//     }
// }

let myArray = [];

const getArrayDivisoresDe = ( numero ) => {
    for ( let i = 0; i <= numero; i++ ) {
        if ( numero % i == 0 ) {
            myArray.push( i );
        }
    }

    return myArray;
}

console.log( getArrayDivisoresDe( numero ) );
