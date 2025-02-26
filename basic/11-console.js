/*
Clase 43 - Ejercicios: Console
Vídeo: https://youtu.be/1glVfFxj8a4?t=21421
*/

// 1. Crea un función que utilice error correctamente
function upperText(text) {
    if (!isNaN(text)) {
        console.error("ERROR: el dato no puede ser numérico")
    } else {
        console.log(text.toUpperCase())
    }

}
upperText(25)
upperText("hola javascript")

// 2. Crea una función que utilice warn correctamente
function farenhaitToCelsius(farenhaitDegrees) {
    if (isNaN(farenhaitDegrees)) {
        console.error("ERROR: el dato debe ser numérico")
    } else {
        let celsius = (farenhaitDegrees - 32) * 0.5556
        if (celsius % 2 != 0) {
            console.warn("WARNING: La conversión da un número con decimales")
        } else {
            console.warn("WARNING: La conversión da un número entero")
        }
        console.log(`${farenhaitDegrees} grados farenhait corresponden a ${celsius.toFixed(2)} grados celsius`)
    }
}
farenhaitToCelsius(39.8)
console.log()

// 3. Crea una función que utilice info correctamente
function celsiusToFarenhait(celsiusDegrees) {
    if (isNaN(celsiusDegrees)) {
        console.error("ERROR: el dato debe ser numérico")
    } else {
        let farenhait = (celsiusDegrees * 9 / 5) + 32
        if (farenhait.toString().length > 10) {
            console.info(`El resultado es ${farenhait} y tiene muchos decimales, vamos a dejarlo en sólo 2`)
        }
        console.log(`${celsiusDegrees} grados celsuis corresponden a ${farenhait.toFixed(2)} grados farenhait`)
    }
}
celsiusToFarenhait(4.33)
console.log()

// 4. Utiliza table
let developers = [
    { name: "Luis", age: 32, languages: ["Javascript", "CSS", "HTML"] },
    { name: "Sandra", age: 25, languages: ["Typescript", "Angular", "React"] },
    { name: "Ana", age: 27, languages: ["Python", "Java", "C#"] }
]
console.table(developers)
console.log()

// 5. Utiliza group
let cities = `- Madrid
- Roma
- Londres
- New York
- Buenos Aires`
console.group("CIUDADES:")
console.log(cities)
console.groupEnd
console.log()

// 6. Utiliza time
console.time("Tiempo 1-10000 usando while")
let w = 1
while (w <= 10000) {
    w++
}
console.time("Tiempo 1-10000 usando for")
for (let i = 1; i <= 10000; i++) { }
console.timeEnd("Tiempo 1-10000 usando for")
console.timeEnd("Tiempo 1-10000 usando while")
console.log()

// 7. Valida con assert si un número es positivo
let num = -1
console.assert(num >= 0, "El número es negativo")
console.assert(num < 0, "El número es positivo ")
console.log()

// 8. Utiliza count
for (let i = 0; i < 10; i++) {
    console.count("Vuelta")
    if (i == 7) {
        console.countReset("Vuelta")
    }
}

// 9. Utiliza trace
function generateRandomTemperature() {
    let randomDegrees = Math.floor(Math.random() * 40)
    celsiusToFarenhait(randomDegrees)
    console.trace("Pila de ejecución:")
}
generateRandomTemperature()

// 10. Utiliza clear
//console.clear()