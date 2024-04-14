// Crear una función que divida un arreglo en dos partes con la misma cantidad de elementos
// (o una diferencia de máximo un elemento) y devuelva un arreglo que contenga al grupo1 y
// al grupo2.

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const dividirArray = ( arr ) => {
    let arrParte1 = [];
    let arrParte2 = [];
    let respuesta = true;

    if ( arr.length % 2 == 0 ) {
        const mitad = arr.length / 2;

        for ( let i = 0; i < arr.length; i++ ) {

            if ( i < mitad ) {
                arrParte1.push( arr[i] );
            } else {
                arrParte2.push( arr[i] );
            }
        }
    } else {
        const mitad = arr.length / 2;

        for ( let i = 0; i < arr.length; i++ ) {

            if ( i <= mitad ) {
                arrParte1.push( arr[i] );
            } else {
                arrParte2.push( arr[i] );
            }
        }
    }

    let array = [arrParte1, arrParte2];

    return array;
};

console.log( dividirArray( arr ) );
