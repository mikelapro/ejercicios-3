// Existen dos arrays, cada uno con 5 palabras, generar un nuevo array con la unión de ambos\
// elementos, (Ejemplo: [1,2,3] unión [1,2,4] = [1,1,2,2,3,4]

const myArray1 = ['Patito', 'Bacon', 'Estrella', 'Botellas'];
const myArray2 = ['Estrella', 'Botellas', 'Café', 'Huevo'];
let union = [];
let unionSinRepetidos = [];

myArray1.forEach( elementoArray1 => {
    union.push( elementoArray1 );

} );

myArray2.forEach( elementoArray2 => {
    union.push( elementoArray2 );

} );

console.log( 'Con repetidos' );
console.log( union );

// ============================================

/**
 * Devuelve true si el elemento esta dentro del array almenos una vez.
 * @param {String} elemento a buscar.
 * @param {String} array donde se va a buscar el elemento.
 */
const existeElementoEnArray = ( elemento, array ) => {
    //'Estrella'
    //['Patito', 'Bacon', 'Estrella', 'Botellas']
    for ( let i = 0; i < array.length; i++ ) {
        const elementoDelArray = array[i];

        if ( elemento == elementoDelArray ) {
            return true;
        }
    }

    return false;
};

for ( let i = 0; i < myArray1.length; i++ ) {
    unionSinRepetidos.push( myArray1[i] );
}

for ( let i = 0; i < myArray2.length; i++ ) {
    if ( !existeElementoEnArray( myArray2[i], unionSinRepetidos ) ) {
        unionSinRepetidos.push( myArray2[i] );
    }
}

console.log( 'Sin repetidos' );
console.log( unionSinRepetidos );