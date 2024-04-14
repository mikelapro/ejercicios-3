// Determinar si un determinado número se encuentra dentro de una matriz o no.

const matrix = [[3, 10, 5], [4, 25, 6], [0, 8, 7]];
let numero = 25;
let encontrado = false;
let contador = 0;

for ( let i = 0; i < matrix.length; i++ ) {
    
    for ( let j = 0; j < matrix[i].length; j++ ) {
        contador++;

        if ( matrix[i][j] == numero ) {
            encontrado = true;

            break;
        }
    }
    if ( encontrado ) {
        break;
    }
}

if ( encontrado ) {
    encontrado = `El número ${numero} está dentro de la matriz.`;
} else {
    encontrado = `El número ${numero} no está dentro de la matriz.`;
}

console.log( encontrado );
console.log( `Cantidad de iteraciones: ${contador}.` );
