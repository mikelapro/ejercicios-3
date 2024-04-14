// Crear una función autoejecutable que muestre "muuu" en pantalla.

const getMuuu = ( () => {
    const resultado = 'muuu';
    return document.write( resultado );
} )();
