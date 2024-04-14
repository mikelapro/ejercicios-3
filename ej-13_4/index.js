// Contar la cantidad de elementos dentro de una matriz.

const matrix = [[1, 2, 3], [4, 5, 6]];
let cantidadElementos = 0;

const multiplicarMatrizPorEscalar = ( escalar, matrix ) => {
    for ( let i = 0; i < matrix.length; i++ ) {

        for ( let j = 0; j < matrix[i].length; j++ ) {
            matrix[i][j] = matrix[i][j] * escalar;
        }
    }
    
    return matrix;
};

console.log( multiplicarMatrizPorEscalar( 2, matrix ) );
