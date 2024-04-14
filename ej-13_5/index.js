// Encontrar el número mayor en una matriz.

const matrix = [[3, 10, 5], [4, 25, 6], [0, 8, 7]];
let numeroMasAlto = 0;

for ( let i = 0; i < matrix.length; i++ ) {
    
    for ( let j = 0; j < matrix[i].length; j++ ) {

        if ( matrix[i][j] > numeroMasAlto ) {
            numeroMasAlto = matrix[i][j];
        }
    }
}

console.log( numeroMasAlto );
