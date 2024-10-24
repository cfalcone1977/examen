/*
// (7) Dado un arreglo de números, devuelve un nuevo arreglo que contenga solo los números pares del arreglo original.
export function filtrarPares(arr: number[]): number[] {}
*/


function filtrarPares(arr:number[]):number[]{
 let pares:number[]=new Array();
 for (let indice = 0; indice < arr.length; indice=indice+1) {
       if ((arr[indice] % 2)==0){
                                 pares.push(arr[indice]);
                                }
    
     }
return pares;
}

let numeros:number[]=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
console.log(filtrarPares(numeros));