// Crear un programa donde el usuario ingrese en un prompt la temperatura en Celcius y el
// programa muestre en una alerta la temperatura en Fahrenheit.

let tempCelcius  = prompt( 'Ingrese la temperatura en celcius', '30' );

tempCelcius = parseInt( tempCelcius );

const celciusToFahrenheit = ( tempCelcius ) => {
    const tempFahrenheit = ( tempCelcius * 1.8 ) + 32;
    return tempFahrenheit;
};

alert( celciusToFahrenheit( tempCelcius ) );
