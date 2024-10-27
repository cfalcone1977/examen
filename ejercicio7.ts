/*
// (7) Dado un arreglo de números, devuelve un nuevo arreglo que contenga solo los números pares del arreglo original.
export function filtrarPares(arr: number[]): number[] {}
*/


export function filtrarPares(arr:number[]):number[]{
 let pares:number[]=new Array();
 for (let indice = 0; indice < arr.length; indice=indice+1) {
       if ((arr[indice] % 2)==0){
                                 pares.push(arr[indice]);
                                }
    
     }
return pares;
}
