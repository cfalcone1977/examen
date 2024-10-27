// (4) Dada una cadena de texto, cuenta y devuelve el número de vocales presentes en la cadena.
// Ejemplo: 'hola mundo' >> 4
// export function contarVocales(cadena: string): number {}

export function contarVocales(cadena:string):number{
  let contVocales:number;
  contVocales=0;
  cadena=cadena.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  cadena=cadena.toUpperCase();
  for (let indice = 0; indice < cadena.length; indice=indice+1) {
    if ((cadena[indice]=="A") ||(cadena[indice]=="E") ||(cadena[indice]=="I") ||(cadena[indice]=="O") ||(cadena[indice]=="U")){
        contVocales=contVocales+1;
    }
    
  }
 return contVocales;
}

