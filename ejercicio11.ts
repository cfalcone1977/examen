/*
(11) Multiplicar todos los números de una matriz
// Escribe una función que multiplique todos los elementos de una matriz.
// Ejemplo: [[1, 2], [3, 4]] >> 24
export function multiplicarMatriz(matriz: number[][]): number {}
*/

export function multiplicarMatriz(matriz:number[][]):number{
let mult:number;
mult=1;
for (let x = 0; x < matriz.length; x=x+1) 
        {  
    for (let y = 0; y < matriz[0].length; y=y+1) 
           {
           mult=mult*matriz[x][y];
           }
        }
return mult;
}


console.log(multiplicarMatriz([[1,2],[3,4]]));