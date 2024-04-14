// Crear un programa que determine si un string introducido por un usuario empieza con un
// número o con una letra.

let texto = prompt( 'Ingrese un texto', '1' );
let respuesta = '';

const primerCaracter = texto[0];

if ( isNaN( primerCaracter ) ) {
    respuesta = 'El primer caracter no es un número';
} else {
    respuesta = 'El primer caracter es un número';
}

alert( respuesta );
