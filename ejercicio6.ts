/*
// (6) Convierte una temperatura en grados Celsius a Fahrenheit y devuelve el resultado.
// Fórmula: F = (C * 9/5) + 32
export function celsiusAFahrenheit(celsius: number): number {}
*/

function celciusAFahrenheit(celcius:number):number{
   let fahrenheit:number;
fahrenheit=(celcius*(9/5))+32;
return fahrenheit;
}


console.log(celciusAFahrenheit(30));