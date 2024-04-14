// Crear una función que reciba un arreglo y que cree uno nuevo con todos los elementos
// ordenados de menor a mayor, (sin ocupar el método .sort).

const array = [2, 7, 6, 1, 3, 5, 4];
const newArray = [2, 7, 6, 1, 3, 5, 4];

const ordenarDeMayorAMenor = ( newArray ) => {
    for ( let i = 0; i < newArray.length; i++ ) {
        for ( let j = 0; j < newArray.length - i - 1; j++ ) {
            if ( newArray[j] < newArray[j + 1] ) {
                // Swap.
                
                const aux = newArray[j];
                
                newArray[j] = newArray[j + 1];
                newArray[j + 1] = aux;
            }
        }
    }

    return newArray;
}

console.log( ordenarDeMayorAMenor( newArray ) );
