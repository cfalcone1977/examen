/*
(8) Dado un número `n`, devuelve el factorial de `n`. El factorial de un número es el producto de todos los números desde 1 hasta `n`.
// Ejemplo: factorial(5) >> 5 * 4 * 3 * 2 * 1 = 120
export function factorial(n: number): number {}
*/

function factorial(n:number):number{
  let fac:number;
fac=1;
for (let indice = 1; indice <= n; indice=indice+1) 
         {
           fac=fac*indice;
         }

return fac;
}


console.log(factorial(1));