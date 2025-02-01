/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
function sum(a, b) {
    return a + b
}
console.log("9 + 8 =", sum(9, 8),'\n')

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
let numbers = [25, 8, 92, 7, 10, 50, 6, 32, 2, 71, 0, 5, 11, 97, 35, 46]
let numMax = 0
function max(numbers) {
    for (let number of numbers) {
        if (number > numMax) {
            numMax = number
        }
    }
    return numMax
}
console.log("El número más alto de la lísta es el", max(numbers),'\n')

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
let vocals = 'aeiouáéíóöúüAEIOUÁÉÍÓÖÚ'
let counter = 0
function vocalCounter(str) {
    for (vocal of str) {
        for (char of vocals) {
            if (vocal == char) {
                counter++
            }
        }

    }
    return counter
}
let text = 'Hace tanto frío que se congelan hasta los pingüinos'
let numVocals = vocalCounter(text)
console.log(`El texto contiene ${numVocals} vocales\n`)

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
let strings = ["España", "Francia", "Italia", "Inglaterra", "Alemania", "Portugal", "Dinamarca", "Suecia"]
function upperator(strings) {
    let upperStrings = []
    for (let string of strings) {

        upperStrings.push(string.toUpperCase())
    }
    return upperStrings
}
console.log(upperator(strings),'\n')

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
function isPrime(num) {
    let prime = true
    if (num <= 1) {
        return false
    }
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            prime = false
            return prime
        }
    }
    return prime
}
myNumber = 7
console.log(`¿El número ${myNumber} es primo? ${isPrime(myNumber)}\n`)


// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
let fruits1 = ["pera", "manzana", "sandía", "cereza", "uva", "melón", "plátano", "melocotón", "paraguaya", "naranja"]
let fruists2 = ["sandía", "melocotón", "manzana", "ciruela", "naranja", "uva", "albaricoque", "mandarina", "pera"]

function fruitsComparator(list1, list2) {
    let fruits = []
    for (let fruit of list1) {
        if (list2.includes(fruit)) {
            fruits.push(fruit)
        }
    }
    return fruits
}
console.log(fruitsComparator(fruits1, fruists2),'\n')



// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
function sumPeers(list) {
    let acc = 0
    for (let num of list) {
        if (num % 2 == 0) {
            acc += num
        }
    }
    return acc
}
console.log(`La suma de los números pares de la lista es: ${sumPeers(numbers)}\n`)

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
function power2(list) {
    let powerList = []
    for (let num of list) {
        powerList.push(num ** 2)
    }
    return powerList
}
console.log(power2(numbers), '\n')

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
function reverseText(text) {
    let reverseList = text.split(" ")
    let reversedText = ""
    for (let i = reverseList.length - 1; i >= 0; i--) {
        reversedText += reverseList[i]
        if (i != 0) reversedText += " "
    }
    return reversedText
}
console.log(`Texto original: "${text}"`)
console.log(`Texto con las palabras en orden inverso: "${reverseText(text)}"\n`)

// 10. Crea una función que calcule el factorial de un número dado
function factorial(num) {
    let fact = 1
    for (let i = 1; i <= num; i++) {
        fact *= i
    }
    return fact
}
console.log(`El factorial de ${myNumber} es: ${factorial(myNumber)}`)