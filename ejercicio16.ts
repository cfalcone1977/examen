/*
// (16) Crea una función que reciba un número y devuelva la suma de sus dígitos.
// Ejemplo: 11 >> 1 + 1 = 2
export function sumaDigitos(n: number): number {}
*/

function sumaDigitos(n:number):number{
 let suma:number
 let numerosTexto:string;
 suma=0;
 numerosTexto=n.toString();
 for (let indice = 0; indice < numerosTexto.length; indice=indice+1) {
    suma=suma+(Number(numerosTexto[indice]));
 }

 return suma;
}

console.log(sumaDigitos(1500));