/*
// (20) Determinar si una cadena es un pangrama.
// Un pangrama es una frase que contiene todas las letras del alfabeto al menos una vez. Escribe una función que 
reciba una cadena de texto y devuelva true si es un pangrama, de lo contrario, devuelve false.
// Ejemplo:
// "El cadáver de Wamba, rey godo de España, fue exhumado y trasladado en una caja de zinc que pesó un kilo." >> true
// "Hola Mundo" >> false
export function esPangrama(cadena: string): boolean {}
*/

//la idea es crear una variable que contenga el alfabeto completo, recorrer 
//la cadena que se recibe como parametro e ir encontrando y contando la cantidad de coincidencias
// si las coincidencias son la cantidad de letras del alfabeto es PANGRAMA!!.

function esPangrama(cadena:string):boolean{
 let pangrama:boolean;
 let alfabeto:String;
 let indice2,contador:number;
 pangrama=false;
 contador=0;
 alfabeto="abcdefghijklmnñopqrstuvwxyz";
 cadena=cadena.toUpperCase();
 alfabeto=alfabeto.toUpperCase();
 for (let indice = 0; indice < alfabeto.length; indice=indice+1) {
      indice2=0;    
      if (alfabeto.charAt(indice)==cadena.charAt(indice2)) {
                                                           contador=contador+1;
        } else {
                 while ((indice2<cadena.length) && (contador<27) && (alfabeto.charAt(indice)!=cadena.charAt(indice2))) {
                         indice2=indice2+1;
                         if (alfabeto.charAt(indice)==cadena.charAt(indice2)) {
                                                                contador=contador+1;
                                                               }
                  }
               }     
 }
 console.log(contador);
 if (contador==27) {
                   pangrama=true;
                  }
 return pangrama;
}
console.log(esPangrama("aeiouW"));