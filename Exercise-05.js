/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for (let i = 1; i <= 20; i++) {
    console.log(`Número:${i}`)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let acc = 0
for (let i = 1; i <= 100; i++) {
    acc += i
}
console.log(`El resultado de sumar todos los números del 1 al 100 es: ${acc}`)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for (let i = 2; i <= 50; i += 2) {
    console.log(`Número par: ${i}`)
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let names = ["Jesus", "Jose", "Ana", "Pedro", "Sara", "Rocío", "Miguel"]
for (let name of names) {
    console.log(`Nombre: ${name}`)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let text = "Esternocleidomastoideo"
let vocals = 'aeiouAEIOU'
let count = 0
for (let letter of text) {
    for (let vocal of vocals) {
        if (vocal == letter) {
            count++
            continue
        }
    }
}
console.log(`Número de vocales en el texto "${text}" = ${count}`)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
acc = 1
let numbers = [1, 2, 3, 4, 5, 6, 7]
for (let number of numbers) {
    acc *= number
}
console.log(`Producto= ${acc}`)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
for (let i = 1; i <= 10; i++) {
    console.log(`5 X ${i} = ${i * 5}`)
}

// 8. Usa un bucle para invertir una cadena de texto
text = "javascript"
let reversed = ""
for (let i = text.length - 1; i >= 0; i--) {
    reversed += text[i]
}
console.log(`El texto "${text}" al revés es: "${reversed}"`)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let acc1 = 1, strSecuence = ""
let fib = acc2 = 0
for (let i = 0; i < 10; i++) {
    strSecuence += String(fib + " ")
    fib = acc2 + acc1
    acc1 = acc2
    acc2 = fib
}
console.log(`Primeros 10 valores en la secuencia fibonacci; ${strSecuence}`)

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

numbers = [25, 8, 92, 7, 10, 50, 6, 32, 2, 71, 0, 5, 11, 96]
let overTen = []

for (let number of numbers) {
    if (number > 10) overTen.push(number)
}
console.log(`Lista de números original: ${numbers}`)
console.log(`Números superiores a 10: ${overTen}`)