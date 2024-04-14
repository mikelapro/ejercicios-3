// Recorrer un arreglo de arreglos para mostrarlo como una matriz.

const arr = [[1, 1], [2, 2]];

// i=1
// arrayInterno= [2,2]
// j=2
for ( let i = 0; i < arr.length; i++ ) {
    const arrayInterno = arr[i];

    let linea = '|';
    for ( let j = 0; j < arrayInterno.length; j++ ) {
        linea =  linea + arrayInterno[j] + '|';
        //linea=22
    }
    console.log( linea );
    // '|1|1|'
    // '|2|2|'
}
