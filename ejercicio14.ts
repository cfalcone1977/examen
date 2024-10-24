/*
(14) Calcular el máximo común divisor (MCD) de dos números
// Crea una función que calcule el máximo común divisor (MCD) de dos números usando el algoritmo de Euclides.
// Ejemplo: 48 y 18 >> 6
export function mcd(a: number, b: number): number {}
*/
/*
Algoritmo de Euclides:
   Si b=0, entonces el MCD es a
   Si b != 0 etonces b= a mod b
   a = b
   hasta que b=0; 
*/
function mcd(a:number, b:number): number {
  let maxCdiv,resto:number;
  maxCdiv=0;
  while (b != 0) {
     resto=a % b;
     a=b;
     b=resto;
  }
  maxCdiv=a;
  return maxCdiv;
}

console.log(mcd(10,4));
