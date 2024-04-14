// Realizar el mismo ejercicio anterior pero que en esta ocasión devuelva un arreglo nuevo
// con los datos cambiados.

const array = [1, 3, 2];

const swap = ( arr, posA, posB ) => {
    const newArray = [];

    arr.forEach( element => {
        newArray.push( element );
    } );

    const aux = newArray[posA];

    newArray[posA] = posB;
    newArray[posB] = aux;

    return newArray;
};

console.log( swap( array, 1, 2 ) );

console.log( array );
