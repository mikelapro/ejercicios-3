// Sumar [[1,1],[2,2]] con [[3,1],[3,2]].

const arr1 = [[1, 1], [2, 2]];
const arr2 = [[3, 1], [3, 2]];
//             4  2    5  4
// 4|2
// 5|4

for ( let i = 0; i < arr1.length; i++ ) {


    let linea = '|';
    let arrayInterno1 = arr1[i];
    let arrayInterno2 = arr2[i];

    for ( let j = 0; j < arr2.length; j++ ) {
        //[1,1]
        //[3,1]
        let suma = arrayInterno1[j] + arrayInterno2[j];

        linea = linea + suma + '|';
    }

    console.log( linea );
}
