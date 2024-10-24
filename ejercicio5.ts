
function esPalindromo(palabra:string):boolean{
let isPal:boolean;
let invertir:string;
let indice:number;
invertir="";
for (indice = palabra.length-1; indice>=0 ; indice=indice-1) 
    {
     invertir=invertir +(palabra.charAt(indice));  
    }
indice=0;    
isPal=true;
while ((indice<=(palabra.length-1))&&(isPal))  {
 if (palabra.charAt(indice)!==invertir.charAt(indice)){
                                                        isPal=false;
                                                      }
 indice=indice+1;
}
return isPal;
}

console.log(esPalindromo("anilina"));
