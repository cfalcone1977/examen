/*
// (19) Convertir un número a binario.
// Crea una función que reciba un número entero positivo y devuelva su representación en binario como una cadena de texto.
// Ejemplo: 255 >> "11111111"
export function convertirABinario(n: number): string {}
*/
export function convertirABinario(n:number):string{
let binario,binarioInv:string;
binario="";
binarioInv="";
if (n==0) {
         binario="0";
        }
if (n==1) {
         binario="1";
          }
while (n>=2) {
       //console.log(binario,n);
       binario=binario+(n % 2);
       n=Math.floor(n/2);
       if (n==1) {
               binario=binario+1
               }
              else if (n==0) { 
                              binario=binario+0;
                             }
}             
for (let indice = binario.length-1; indice>=0; indice=indice-1) {
        binarioInv=binarioInv + binario[indice];
}
return binarioInv;
}


