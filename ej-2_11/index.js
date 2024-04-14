// El siguiente código tiene un error que se produce en algunos casos especiales,
// descubrirlo y arreglarlo:

// Obtener edad

// if ( edad < 13 ) {
//     console.log( 'Es niño' );
// ! } if ( edad < 18 ) {
//     console.log( 'Es adolecente' );
// } else {
//     console.log( 'Es adolecente' );
// }

if ( edad < 13 ) {
    console.log( 'Es niño' );
} else if ( edad < 18 ) {
    console.log( 'Es adolecente' );
} else {
    console.log( 'Es adolecente' );
}
