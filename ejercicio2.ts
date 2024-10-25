// (2) Dado un número `n`, verifica si es un número primo. Devuelve `true` si es primo, de lo contrario, devuelve `false`.
// Ejemplo: 
// 7 >> true
// 10 >> false
//export function esPrimo(n: number): boolean {}

function esPrimo(n:number):boolean {
let primo:boolean;
let divisor,contador:number;
primo=false;
divisor=0;
contador=1;
if (n>1) {
          primo=true;
          while ((contador<=n) && (primo)) 
            {
            if (n % contador==0){
                                divisor=divisor+1;
                                if (divisor>2) {
                                                primo=false;
                                               }
                                } 
            contador=contador+1;   
            }     
    } else if (n==1) {
                      primo=true;
                     }
return primo;
}


console.log(esPrimo(17));