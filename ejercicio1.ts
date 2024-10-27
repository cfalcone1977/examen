/*// (1) Para tener control de la gente que hay en una disco el gerente quiere saber 
cuantas personas de diferentes edades han entrado. 
// No se han permitido la entrada a menores de 18 ni mayores de 40. 
Para la carga de los datos se usa la función aleatorio(Math.floor(Math.random() * (max - min + 1) ) + min)
// Se sabe que la cantidad total de personas dentro del local es de 270
// Se quiere saber: 	
// Cuántas personas son menores de 21 años
// Cuántas personas mayores o igual a 21 años
// Cuántas personas en total
//Ej: edades = [18, 19, 20, 21, 25, 40]
//    resultado: [3,3]
export function clasificarEdades(n: number[]): number[] {}*/

//asumimos que n es un arreglo donde se deben crear las edades de las 270 personas dentro del local.
//y asumimos que esto se realiza dentro de la funcion. 
export function clasificarEdades(n:number[]): number[]{
let personas:number[]=new Array(2);
personas[0]=0;
personas[1]=0;
for (let indice = 0; indice < 270; indice=indice+1) {
    n[indice]=(Math.floor(Math.random()*(40-18+1))+18);
    if (n[indice]<21){
                      personas[0]=personas[0]+1;
                     }else if (n[indice]>=21){
                                              personas[1]=personas[1]+1;
                                             }
}
return personas;
}
