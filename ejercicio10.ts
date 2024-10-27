/*
// (10) Eliminar duplicados
// Escribe una función que elimine los valores duplicados de un arreglo.
// Ejemplo: [1, 2, 2, 3] >> [1, 2, 3]
export function eliminarDuplicados(arr: number[]): number[] {}
*/

export function eliminarDuplicados(arr: number[]):number[]{
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

