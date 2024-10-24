/*
// (10) Eliminar duplicados
// Escribe una función que elimine los valores duplicados de un arreglo.
// Ejemplo: [1, 2, 2, 3] >> [1, 2, 3]
export function eliminarDuplicados(arr: number[]): number[] {}
*/

function eliminarDuplicados(arr: number[]):number[]{
 let elemento:number;
 for (let indice = 0; indice < arr.length; indice=indice+1) {
         elemento=arr[indice];
         for (let indice2 = indice+1; indice2 < arr.length; indice2=indice2+1) {
            if (arr[indice2]==elemento){
                                        arr.splice(indice2,1);
                                                            //debo retroceder una posicion por el elemento eliminado 
                                                           //al eliminar un elemento, ya tengo en la misma posicion el siguiente
                                                           //por lo tanto cuando el for avanza, me deja un elemento sin controlar
                                        indice2=indice2-1; 
                                       }
            
         }
 }
return arr;
}

console.log(eliminarDuplicados([4,4,4,4,4,1,1,1,2,1,1,1,3,1,1,1,5,1,1,5,5,5,5,5,5,55,3]));
