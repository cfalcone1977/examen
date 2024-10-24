/*
// (13) Obtener la mediana de un arreglo
// Crea una función que calcule la mediana de un arreglo de números.
// Ejemplo: [1, 2, 3, 4, 5] >> 3
export function calcularMediana(arr: number[]): number {}
*/

function calcularMediana(arr:number[]):number{
let media, acumulador:number;
media=0;
acumulador=0;
for (let indice = 0; indice < arr.length; indice=indice+1) {
      acumulador=acumulador + arr[indice];
}
media=acumulador/arr.length;
return media;
}

console.log(calcularMediana([100,2,3,4,5]));
