// Crear una función que permite aplanar un arreglo dado.

const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const aplanar = ( arr ) => {
    const newArr = [];
    for ( let i = 0; i < arr.length; i++ ) {
        const arrayInterno = arr[i];
        for ( let j = 0; j < arrayInterno.length; j++ ) {
            newArr.push( arrayInterno[j] );
        }
    }

    return newArr;
};

console.log( aplanar( arr ) );
