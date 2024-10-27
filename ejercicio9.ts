/*
// (9) Promedio de un arreglo
// Crea una función que devuelva el promedio de los elementos de un arreglo de números.
// Ejemplo: [10, 20, 30] >> 20
export function promedioArreglo(arr: number[]): number {}
*/

export function promedioAreglo(arr:number[]):number{
 let promedio:number;
 let acumulador:number;
promedio=0;
acumulador=0;
for (let indice = 0; indice < arr.length; indice=indice+1) {
       acumulador=acumulador + arr[indice];    
} 
promedio=acumulador/arr.length;
return promedio;
}

