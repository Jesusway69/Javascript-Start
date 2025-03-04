
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
let doubleFlatMap4 = myNestedArray.flat(4).flatMap(number => number * 2)
console.log("\nArray anidado sin una capa de profundidad:", myNestedArray.flat(1))
console.log("\nArray anidado sin dos capas de profundidad:", myNestedArray.flat(2))
console.log("\nArray anidado sin tres capas de profundidad:", myNestedArray.flat(3))
console.log("\nArray anidado sin cuatro capas de profundidad:", myNestedArray.flat(4))
console.log("\nArray con los números multiplicados por 2 con flatMap:", doubleFlatMap4)

// 4. Ordena un array de números de mayor a menor
console.log("\nArray de números random desordenados:", myUnsortedArray)
let sorted = myUnsortedArray.sort((a, b) => a - b)
console.log("\nArray de números random ordenados de menor a mayor:", sorted)
let sortedReverse = myUnsortedArray.sort((a, b) => a - b).reverse()
console.log("\nArray de números random ordenados de mayor a menor:", sortedReverse)

// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos
const myBirdSet1 = new Set(["Paloma", "Cuervo", "Papagayo", "Águila", "Avestruz", "Golondrina", "Cisne", "Gorrión", "Perdiz"])
const myBirdSet2 = new Set(["Perdiz", "Cotorra", "Urraca", "Cuervo", "Halcón", "Paloma", "Vencejo", "Ganso", "Avestruz"])
const union = new Set([...myBirdSet1, ...myBirdSet2])
const intersection = new Set([...myBirdSet1].filter(bird => myBirdSet2.has(bird)))
const hasOnlySet1 = new Set([...myBirdSet1].filter(bird => !myBirdSet2.has(bird)))
const hasOnlySet2 = new Set([...myBirdSet2].filter(bird => !myBirdSet1.has(bird)))

// 6. Itera los resultados del ejercicio anterior
console.log("\nElementos en el set1:")
myBirdSet1.forEach(bird => console.log("-", bird))
console.log("\nElementos en el set2:")
myBirdSet2.forEach(bird => console.log("-", bird))
console.log("\nUnión de ambos sets sin repetidos:")
union.forEach(bird => console.log("-", bird))
console.log("\nElementos que están en ambos sets:")
intersection.forEach(bird => console.log("-", bird))
console.log("\nElementos que están en el set1 pero no en el set2:")
hasOnlySet1.forEach(bird => console.log("-", bird))
console.log("\nElementos que están en el set2 pero no en el set1:")
hasOnlySet2.forEach(bird => console.log("-", bird))


// 7. Crea un mapa que almacene información se usuarios (nombre, edad y email) e itera los datos
const usersMap = new Map([
    [1, { name: "Jesus", age: 37, email: "jesus@gmail.com" }],
    [2, { name: "Ana", age: 15, email: "ana@gmail.com" }],
    [3, { name: "Jorge", age: 32, email: "jorge@gmail.com" }],
    [4, { name: "Pedro", age: 17, email: "pedro@gmail.com" }],
    [5, { name: "Sandra", age: 18, email: "sandra@gmail.com" }],
])
console.log("\nIteración sobre un Map con datos de los usuarios:")
usersMap.forEach((v, k) => console.log(`- ${k} Nombre: ${v.name} , email: ${v.email}, edad: ${v.age}`))

// 8. Dado el mapa anterior, crea un array con los nombres
const arrayNames = Array.from(usersMap.values()).map(user => user.name)
console.log("\nArray con los nombres del Map:", arrayNames)

// 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set
const arraySeniorEmail = Array.from(usersMap.values()).filter(user => user.age >= 18).map(user => user.email)
console.log("\nArray con los emails de los usuarios mayores de edad:", arraySeniorEmail)


// 10. Transforma el mapa en un objeto y a continuación
//  transforma el objeto en un mapa con clave el email de cada usuario y como valor todos los datos del usuario
const fromMapToObject = Object.fromEntries(usersMap)
console.log("\nMap transformado a Object:", fromMapToObject)

let fromObjectToMap = new Map(Object.entries(fromMapToObject))

for (let i = 1; i <= fromObjectToMap.size; i++) {
    fromObjectToMap.set(fromObjectToMap.get(i.toString()).email, fromObjectToMap.get(i.toString()))
    fromObjectToMap.delete(i.toString())
}
console.log("\nObject transformado a Map con los email como claves:", fromObjectToMap)

let unsorted = [3, 4, 1, 6, 10]
let sorted2 = unsorted.sort((a, b) => a - b)
console.log(sorted2)
let sorted3 = unsorted.sort((a, b) => a - b).reverse()
console.log(sorted3)