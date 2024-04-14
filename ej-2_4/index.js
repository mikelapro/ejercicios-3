// Crear un programa que le pida al usuario dos números en un Prompt y luego muestre en un
// alerta el número mayor.

let num1 = prompt( 'Ingrese un número', '1' );
let num2 = prompt( 'Ingrese otro número', '2' );
let resultado = '';

num1 = parseInt( num1 );
num2 = parseInt( num2 );

if ( num1 > num2 ) {
    resultado = `${num1} es mayor que ${num2}.`;
} else if ( num1 < num2 ) {
    resultado = `${num2} es mayor que ${num1}.`;
} else {
    resultado = 'Los números ingresados son iguales.';
}

alert( resultado );
