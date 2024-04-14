// Crear un programa donde se introduzcan los tres ángulos internos de un triángulo y se
// determine si el triángulo es válido o no.

let angulo1 = prompt( 'Ingrese el primer ángulo de un triángulo', '45' );
let angulo2 = prompt( 'Ingrese el segundo ángulo de un triángulo', '45' );
let angulo3 = prompt( 'Ingrese el tercer ángulo de un triángulo', '90' );
let resultado = '';

angulo1 = parseInt( angulo1 );
angulo2 = parseInt( angulo2 );
angulo3 = parseInt( angulo3 );

const esTriangulo = ( angulo1, angulo2, angulo3 ) => {
    const esTriangulo = angulo1 + angulo2 + angulo3 == 180;

    return esTriangulo;
};

if ( esTriangulo( angulo1, angulo2, angulo3 ) ) {
    resultado = 'El triángulo es válido.';
} else {
    resultado = 'El triángulo no es válido.';
}

alert( resultado );
