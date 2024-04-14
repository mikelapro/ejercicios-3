// Crear una función que reciba un arreglo y que cree uno nuevo con todos los elementos
// ordenados de menor a mayor, (sin ocupar el método .sort).

const array = [2, 7, 6, 1, 3, 5, 4];

for ( let i = 0; i < array.length; i++ ) {
    for ( let j = 0; j < array.length - i - 1; j++ ) {
        if ( array[j] > array[j + 1] ) {
            // Swap.

            const aux = array[j];

            array[j] = array[j +1];
            array[j +1] = aux;
        }

    }

}

console.log( array );
