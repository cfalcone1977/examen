/*
// (18) Verificar si un número es perfecto.
// Un número perfecto es aquel que es igual a la suma de sus divisores propios (excluyendo el propio número). 
// Escribe una función que reciba un número y devuelva true si es un número perfecto, de lo contrario, devuelve false.
// Ejemplo:
//  28 >> true (1 + 2 + 4 + 7 + 14 = 28)
//  10 >> false
export function esNumeroPerfecto(n: number): boolean {}
*/

function esNumeroPerfecto(n:number):boolean {
let perfecto:boolean;
let suma:number;
perfecto=false;
suma=0;
for (let indice = 1; indice <= n; indice=indice+1){
      if (n % indice==0) {
                          suma=suma+indice;
                         }
//debo considerar que no solo el numeor dado debe ser igual a la suma de sus divisores, sino tambien 
// que el numero dado debe ser mayor a 1, ya que 1 cumple con la condicion, pero tiene un unico divisor
// y los divisores deben ser mas de uno para que el numero se considere perfecto!.                         
if ((n==suma) && (n>1)) {
               perfecto=true;
             }                         
}
return perfecto;
}

console.log(esNumeroPerfecto(6));
