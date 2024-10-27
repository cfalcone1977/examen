/*
// (15) Validar un número de tarjeta de crédito usando el algoritmo de Luhn
// Crea una función que valide si un número de tarjeta de crédito es válido utilizando el algoritmo de Luhn.
// Ejemplo:
// '4532015112830366' >> true
// '1234567812345679' >> false
export function validarTarjeta(numero: string): boolean {}
*/

export function validarTarjeta(numero:string):boolean{
 let valida:boolean;
 let invertido:number[]=new Array();
 let acumulador:number;

 valida=false;
 acumulador=0;
 //transformo la cadena de numeros(string) en un arreglo numerico
 for (let indice = numero.length-1; indice >= 0; indice=indice-1) {
          invertido.push(Number(numero.charAt(indice)));
 }
 //console.log(invertido);
 for (let indice = 0; indice < invertido.length; indice=indice+1) {
    //chequeo los indices impares del arreglo para duplicar su valor, pero los que tienen 2 digitos
    // sumo sus digitos directamente.
    if ((indice % 2)!==0){ 
        switch (invertido[indice]) {
          case 1:
              invertido[indice]=2;
              break;
          case 2:
               invertido[indice]=4;
              break;
          case 3:
               invertido[indice]=6;
          break;
          case 4:
               invertido[indice]=8;
          break;
          case 5:
               invertido[indice]=1;
          break;
          case 6:
               invertido[indice]=3;
          break;
          case 7:
               invertido[indice]=5;
          break;
          case 8:
              invertido[indice]=7;
          break;
          case 9:
              invertido[indice]=9;
          break;
          case 0:
              invertido[indice]=0;
          break;

          default:
              break;
        }       
 }
 //acumulo la suma de los elementos del arreglo.
 acumulador=acumulador + invertido[indice];  
}
 //console.log(invertido);
 //console.log(acumulador);
 //determino si es multiplo de 10
 valida=((acumulador % 10)==0);
 return valida;
}

