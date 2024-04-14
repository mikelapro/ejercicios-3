// Crear un método que permite intercambiar las posiciones de dos elementos de un arreglo
// en base a sus índices.

const array = [1, 3, 2];

const swap = ( arr, posA, posB ) => {
    const aux = arr[posA];

    arr[posA] = posB;
    arr[posB] = aux;
};

swap( array, 1, 2 );
console.log( array );
