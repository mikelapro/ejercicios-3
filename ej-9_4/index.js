// El usuario ingresa dos conjuntos de números separados por coma, si ambos conjuntos tienen
// la misma cantidad de elementos mostrar un arreglo que contenga la suma de cada elemento. (Ejemplo: [1,2,3] + [2,3,4] = [3,5,7])

let conjuntoNumeros1 = prompt( 'Ingrese un conjunto de números separados por coma', '1,3,5' );
let conjuntoNumeros2 = prompt( 'Ingrese un conjunto de números separados por coma', '2,4,6' );
let suma = [];

if ( conjuntoNumeros1.length == conjuntoNumeros2.length ) {
    document.write( 'Ambos conjuntos tienen la misma cantidad de números. <br>' );

    let arrayConjuntoNumeros1 = conjuntoNumeros1.split( ',' );
    let arrayConjuntoNumeros2 = conjuntoNumeros2.split( ',' );

    for ( let i = 0; i < arrayConjuntoNumeros1.length; i++ ) {
        const num1 = parseInt( arrayConjuntoNumeros1[i] );
        const num2 = parseInt( arrayConjuntoNumeros2[i] );

        suma.push( num1 + num2 );
    }

    console.log( suma );

} else {
    document.write( 'No tienen la misma cantidad de números.' );
}

console.log( conjuntoNumeros1 );
console.log( conjuntoNumeros2 );
