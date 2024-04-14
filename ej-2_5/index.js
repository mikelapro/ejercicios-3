// Crear un programa que le pida al usuario primero un números al usuario a través de un
// prompt y luego un segundo número para luego mostrar en un alerta el número mayor, esta
// vez realizar el ejercicio ocupando un if ternario.

let num1 = prompt( 'Ingrese un número', '1' );
let num2 = prompt( 'Ingrese otro número', '2' );
let resultado = '';

num1 = parseInt( num1 );
num2 = parseInt( num2 );


if ( num1 == num2 ) {
    resultado = 'Los números ingresados son iguales.';
} else {
    resultado = ( num1 > num2 ) ? `${num1} es mayor que ${num2}.` : `${num2} es mayor que ${num1}.`;
}

alert( resultado );
