// Existen dos arrays, cada uno con 5 palabras, generar un nuevo array con la intersección
// de ambos elementos. (Ejemplo: [1,2,3] unión [1,2,4] = [1,2]).

const myArray1 = ['Patito', 'Bacon', 'Estrella', 'Botellas'];
const myArray2 = ['Estrella', 'Botellas', 'Café', 'Huevo'];
let interseccion = [];

// for ( let i = 0; i < myArray1.length; i++ ) {
//     for ( let j = 0; j < myArray2.length; j++ ) {
//         if ( myArray1[i] == myArray2[j] ) {
//             interseccion.push( myArray1[i] );
//         }
//     }
// }

myArray1.forEach( ( elementoArray1 ) => {
    myArray2.forEach( ( elementoArray2 ) => {
        if ( elementoArray1 == elementoArray2 ) {
            
            interseccion.push( elementoArray1 );
        }
    } );
} );

console.log( interseccion );
