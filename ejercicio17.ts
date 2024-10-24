/*
// (17) Verificar si una cadena es un anagrama de otra.
// Dada dos cadenas de texto, devuelve true si son anagramas entre sí (es decir, si las letras se pueden 
reorganizar para formar la otra cadena), de lo contrario, devuelve false.
// Ejemplo: "roma" y "amor >> true
export function esAnagrama(cadena1: string, cadena2: string): boolean {}
*/

function esAnagrama(cadena1:string, cadena2:string):boolean {
let anagrama:boolean;
let caracter:string;
let cadena1Final, cadena2Final:string;
cadena1Final=cadena1;
cadena2Final=cadena2;
anagrama=false;
if (cadena1.length==cadena2.length){
    for (let indice = 0; indice < cadena1.length; indice=indice+1) {
         caracter=cadena1.charAt(indice);
         console.log(caracter);
       for (let indice2 = 0; indice2 < cadena2.length; indice2=indice2+1) {
              if (caracter==cadena2.charAt(indice2)) {
                                                      cadena1Final=cadena1Final.replace(caracter,"");
                                                      cadena2Final=cadena2Final.replace(caracter,"");
                                                      console.log(cadena1Final,"---",cadena2Final);
                                                     }
        } 
    }
}
console.log(cadena1,"----",cadena2);
console.log(cadena1Final,"----",cadena2Final);
if ((cadena1Final=="") && (cadena2Final=="")){
                                anagrama=true;
                               }
return anagrama;
}

console.log(esAnagrama("ooma","amoo"));