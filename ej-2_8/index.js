// Determinar si una palabra empieza con mayúscula o no.

let texto = prompt( 'Ingrese una palabra', 'Hola' );
let respuesta = '';

const primerCaracter = texto[0];

if ( primerCaracter == primerCaracter.toUpperCase() ) {
    respuesta = `${texto} empieza con mayúscula.`;
} else {
    respuesta = `${texto} no empieza con mayúscula.`;
}

alert( respuesta );
