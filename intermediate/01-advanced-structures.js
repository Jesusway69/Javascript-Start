
/*
Clase 2 - Estructuras avanzadas (05/02/2025)
Vídeo: https://www.twitch.tv/videos/2373300186?t=00h15m32s
*/
let myArray = [1, 2, 3, 4, 5, 6]
let myarray2 = [1, 2,[3, 4, 5, [6, 7], 8, [9, 10, [11, 12,[13, 14], 15, [16, 17]]], 18,[19,20]]]
console.log("Array original", myArray)

// 1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección
let pow2 = myArray.map(number => number ** 2)
console.log("Array con sus números elvados al cuadrado", pow2)

let impar = myArray.filter(number => number % 2 != 0)
console.log("Array mostrando sólo los números impares", impar)

let maxNum = myArray.reduce((max, min) => {
    if (min > max) {
        max = min
    }
    return max
}, 0)
console.log("Número más alto del array:", maxNum)
// 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra sólo los números pares
let pow3 = myArray.map(number => number ** 3).filter(number => number % 2 == 0)

console.log("Array con sólo los números pares despues de elevarlos al cubo:", pow3)

// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección
console.log("Array anidado original", myarray2)

// 4. Ordena un array de números de mayor a menor

// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos

// 6. Itera los resultados del ejercicio anterior

// 7. Crea un mapa que almacene información se usuarios (nombre, edad y email) e itera los datos

// 8. Dado el mapa anterior, crea un array con los nombres

// 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set

// 10. Transforma el mapa en un objeto, a continuación,
//  transforma el objeto en un mapa con clave el email de cada usuario y como valor todos los datos del usuario