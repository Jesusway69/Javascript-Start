/*
 * EJERCICIO:
 * - Crea ejemplos utilizando todos los tipos de operadores de tu lenguaje:
 *   Aritméticos, lógicos, de comparación, asignación, identidad, pertenencia, bits...
 *   (Ten en cuenta que cada lenguaje puede poseer unos diferentes)
 * - Utilizando las operaciones con operadores que tú quieras, crea ejemplos
 *   que representen todos los tipos de estructuras de control que existan
 *   en tu lenguaje:
 *   Condicionales, iterativas, excepciones...
 * - Debes hacer print por consola del resultado de todos los ejemplos.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea un programa que imprima por consola todos los números comprendidos
 * entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.
 *
 * Seguro que al revisar detenidamente las posibilidades has descubierto algo nuevo.
 */

const myName = "Jesus" // Asignación de constante
let myNum = 5 // Asignación de variable tipo number y valor 5
let myStringNum = "5" // Asignación de variable tipo string y valor 5
console.log(myName == "Jesus") 
console.log(myNum == myStringNum) // Compara valores
console.log(myNum === myStringNum) // Compara valores y tipos

let one = two = three = 1 //Asignación de mismo valor para 3 variables con var
// de esta manera 1 se asigna a three, three se asigna a two y two se asigna a one en ese orden
console.log(one, two, three, four) //four no está inicializada aun pero al declararse con var posteriormente devuelve undefined
//let two = 2, esto me da error porque no puedo reasignar otro valor a las variables asignadas en bloque con let 
// volviéndola a declarar como let
var four = 4, five = 4, six = 4 //Asignación de mismo valor para 3 variables de manera individual en una línea con var
console.log(four, five, six)
two = 2, three = 3, five = 5, six = 6, seven = 7, eight = 8, nine = 9 // Reasignación de todas las variables
// y asignación de nuevas (seven, eight, nine) en una sola línea
console.log(one, two, three, four, five, six, seven, eight, nine)
