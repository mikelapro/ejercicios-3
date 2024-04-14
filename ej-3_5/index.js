// Pedir al usuario que ingrese un número en un prompt, hacer la suma de todos los dígitos,
// validar que el número ingresado no contenga letras.
let numero = prompt( 'Ingrese un número', '5' );
numero = parseInt( numero );

let cont = 1;
let result = 0;

do {
    
    result = result + cont;
    cont++;

} while ( cont <= numero );

console.log( result );
