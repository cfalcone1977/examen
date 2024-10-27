/*
// (17) Verificar si una cadena es un anagrama de otra.
// Dada dos cadenas de texto, devuelve true si son anagramas entre sí (es decir, si las letras se pueden 
reorganizar para formar la otra cadena), de lo contrario, devuelve false.
// Ejemplo: "roma" y "amor >> true
export function esAnagrama(cadena1: string, cadena2: string): boolean {}
*/

export function esAnagramaII(cadena1:string, cadena2:string):boolean {
    let anagrama:boolean;
    let caracter:string;
    let cadena1Final, cadena2Final:string;
    let indice:number;
    cadena1Final=cadena1;
    cadena2Final=cadena2;
    anagrama=false;
    indice=0;
    //mientras que el largo de las cadenas sea el mismo y
    //mientras que indice sea menor al tamaño cadena y
    //mientras que cadena1 y cadena 2 no esten vacias
    while ((cadena1.length==cadena2.length) && (indice<cadena1.length) && (!(cadena1=="") && !(cadena2==""))) {
             caracter=cadena1.charAt(indice);
             //console.log(caracter);
           for (let indice2 = 0; indice2 < cadena2.length; indice2=indice2+1) {
                  if (caracter==cadena2.charAt(indice2)) {
                                                          cadena1Final=cadena1Final.replace(caracter,"");
                                                          cadena2Final=cadena2Final.replace(caracter,"");
                                                          //console.log(cadena1Final,"---",cadena2Final);
                                                         }
            } 
        indice=indice+1;   
        }
    //**console.log(cadena1,"----",cadena2);
    //**console.log(cadena1Final,"----",cadena2Final);
    // si cadena1Final y cadena2Final estan vacias, pero cadena1 y cadena2 eran distintas a vacias. 
    if ((cadena1Final=="") && (cadena2Final=="") && (cadena1!="") && (cadena2!="")){
                                    anagrama=true;
                                   }
    return anagrama;
    }
    
    