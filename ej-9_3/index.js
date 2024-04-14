// El usuario ingresa dos conjuntos de números separados por coma, el programa debe
// determinar si ambos conjuntos tienen la misma cantidad de números.

let conjuntoNumeros1 = prompt( 'Ingrese un conjunto de números separados por coma', '1,3,5' );
let conjuntoNumeros2 = prompt( 'Ingrese un conjunto de números separados por coma', '2,4,6' );

if ( conjuntoNumeros1.length == conjuntoNumeros2.length ) {
    document.write( 'Ambos conjuntos tienen la misma cantidad de números.' );
} else {
    document.write( 'No tienen la misma cantidad de números.' );
}

console.log( conjuntoNumeros1 );
console.log( conjuntoNumeros2 );
