
/*
Clase 2 - Estructuras avanzadas (05/02/2025)
Vídeo: https://www.twitch.tv/videos/2373300186?t=00h15m32s
*/
let myArray = [1, 2, 3, 4, 5, 6]
let myNestedArray = [1, 2, [3, 4, 5, [6, 7], 8, [9, 10, [11, 12, [13, 14], 15, [16, 17]]], 18, [19, 20]]]
let myUnsortedArray = [8, 2, 326, 6, 7, 0, 512, 1, 3, 5, 47, 9, 4, 15, 85, 69, 74, 11, 101]
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
console.log("Array sólo con los números pares resultantes despues de elevar los originales al cubo:", pow3)

// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección
console.log("Array anidado original", myNestedArray)
// let flat1 = myNestedArray.flat(1)
// let flat2 = myNestedArray.flat(2)
// let flat3 = myNestedArray.flat(3)
// let flat4 = myNestedArray.flat(4)
let doubleFlatMap4 = myNestedArray.flat(4).flatMap(number => number * 2)
console.log(`Array anidado sin una capa de profundidad:`, myNestedArray.flat(1))
console.log(myNestedArray.flat(2))
console.log(myNestedArray.flat(3))
console.log(myNestedArray.flat(4))
console.log(doubleFlatMap4)

// 4. Ordena un array de números de mayor a menor
let sortedReverse = myUnsortedArray.sort((a, b) => a - b).reverse()
console.log(sortedReverse)

// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos
const myBirdSet1 = new Set(["Paloma", "Cuervo", "Papagayo", "Águila", "Avestruz", "Golondrina", "Cisne", "Gorrión", "Perdiz"])
const myBirdSet2 = new Set(["Perdiz", "Cotorra", "Urraca", "Cuervo", "Halcón", "Paloma", "Vencejo", "Ganso", "Avestruz" ])
const union = new Set([...myBirdSet1, ...myBirdSet2])
const intersection = new Set([...myBirdSet1].filter(bird => myBirdSet2.has(bird)))
const hasOnlySet1 = new Set([...myBirdSet1].filter(bird => !myBirdSet2.has(bird)))
const hasOnlySet2 = new Set([...myBirdSet2].filter(bird => !myBirdSet1.has(bird)))

// 6. Itera los resultados del ejercicio anterior
console.log("\nElementos en el set1:")
myBirdSet1.forEach(bird => console.log("-",bird))
console.log("\nElementos en el set2:")
myBirdSet2.forEach(bird => console.log("-",bird))
console.log("\nUnión de ambos sets sin repetidos:")
union.forEach(bird => console.log("-",bird))
console.log("\nElementos que están en ambos sets:")
intersection.forEach(bird => console.log("-",bird))
console.log("\nElementos que están en el set1 pero no en el set2:")
hasOnlySet1.forEach(bird => console.log("-",bird))
console.log("\nElementos que están en el set2 pero no en el set1:")
hasOnlySet2.forEach(bird => console.log("-",bird))


// 7. Crea un mapa que almacene información se usuarios (nombre, edad y email) e itera los datos
console.log("\nIteración sobre un Map con datos de un usuario:")
const userJesus = new Map([
    ["name", "Jesus"],
    ["age", 47],
    ["email", "jesus@gmail.com"],
])
userJesus.forEach((v,k) => console.log(`- ${k} = ${v}`))

// 8. Dado el mapa anterior, crea un array con los nombres


// 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set

// 10. Transforma el mapa en un objeto, a continuación,
//  transforma el objeto en un mapa con clave el email de cada usuario y como valor todos los datos del usuario