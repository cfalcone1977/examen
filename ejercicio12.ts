/*
// (12) Contar las palabras en una frase
// Crea una función que reciba una frase y devuelva la cantidad de palabras.
// Ejemplo: "Hola mundo" >> 2
export function contarPalabras(frase: string): number {}
*/

//se asume que las palabras estan separadas unicamente por un espacio " "
export function contarPalabras(frase:string):number{
 let cantPalabras:number;
 let arregloFrase:string[];
 cantPalabras=0;
 arregloFrase=frase.split(" ");
 //si existen mas espacios entre las palabras, este bucle me permite recorrer el arreglo y eliminarlos. 
 for (let indice = 0; indice < arregloFrase.length; indice=indice+1) {
     if (arregloFrase[indice]==""){
                                   arregloFrase.splice(indice,1);
                                   indice=indice-1;
                                  }
 }
 cantPalabras=arregloFrase.length;
 return cantPalabras;
}

