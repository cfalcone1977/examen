// (3) Dada una cadena de texto, devuelve la cadena invertida.
// Ejemplo: "hola" -> "aloh"
//export function invertirCadena(cadena: string): string {}

function invertirCadena(cadena:string): string{
let invertir:string;
let largoCadena,indice:number;
largoCadena = cadena.length-1;
invertir="";  
for (indice = largoCadena; indice>=0; indice=indice-1) {
    invertir=invertir + cadena[indice];
}
return invertir;
}
console.log(invertirCadena("hola mundo"));