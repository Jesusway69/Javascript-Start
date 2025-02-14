/*
Clase 41 - Ejercicios: Manejo de errores
Vídeo: https://youtu.be/1glVfFxj8a4?t=20392
*/

function division(dividend, divisor) {
    if (typeof dividend !== "number" || typeof divisor !== "number") {
        throw new Error(`Los 2 argumentos deben ser numéricos`);

    }
    else if (divisor == 0) {
        throw new DivisionByZero("No se puede dividir entre 0");

    }
    return dividend / divisor
}
// 1. Captura una excepción utilizando try-catch
try {
    console.log(division(hola, adios))
} catch {
    console.log("ERROR")
}

// 2. Captura una excepción utilizando try-catch y finally
try {
    console.log(division(15, "hola"))
} catch (ex) {
    console.log(`ERROR: ${ex.message}`)
} finally {
    console.log("Esto se ejecuta siempre")
}

// 3. Lanza una excepción genérica
try {
    console.log(division(hola, 2))
} catch (ex) {
    console.log(ex.name, ":", ex.message)
}


// 4. Crea una excepción personalizada
class DivisionByZero extends Error {
    constructor(errorMessage) {
        super(errorMessage)
    }

}
// 5. Lanza una excepción personalizada
try {
    console.log(division(50, 0))
} catch (ex) {
    console.log(ex.name, ":", ex.message)
}

// 6. Lanza varias excepciones según una lógica definida

function findPosition() {
    let numbers = [1, 2, 3, 4, 5]
    console.log(numbers[position])
}

try {
    findPosition()

} catch {
    console.log("ERROR: reference")
}

function salute(name) {
    console.lo(`Hola ${name}`)
}
try {
    salute("Jesus")
} catch {
    console.log("ERROR: syntax")
}

// 7. Captura varias excepciones en un mismo try-catch
let object
try {
    console.log(object.message)
} catch (ex) {
    console.log(ex.name, ":", ex.message)
}
try {
    console.log(division(50, 4))// Se ejecuta el primero si es correcto
    console.log(division(hola))// Si este estuviera primero no se ejecutaría el segundo

} catch (ex) {
    console.log(`ERROR: ${ex.message}`)
}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
let various = [1, 2, "Hola", true, 9, [1, 2, 3]]

function convertToFloat(num) {
    if (typeof num === "number") {
        console.log(parseFloat(num))
    } else {
        throw new TypeError("Tipo de elemento no numérico");
    }
}
for (let element of various) {
    try {
        convertToFloat(element)

    } catch (ex) {
        if (ex instanceof TypeError) {
            console.log(ex.message)
        }

    }
}

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada
let person = {
    name: "Luis",
    age: 30
}

function objectTest(property) {
    let testProperty = person[property]
    if (testProperty === undefined) {
        console.error(`Propiedad ${property} no encontrada en el objeto person\n`)
    } else {
        console.log(person[property])
    }

}
console.log()
objectTest("name")
objectTest("heigth")
console.log()


// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10
let counter = 0
function multiplyOnlyPeers(num) {
    while (counter <= 9) {
        let num2 = Math.floor(Math.random() * 10 + 1)
        if (num2 % 2 == 0) {
            console.log(`El número ${num2} es par y se puede multiplicar por ${num}, resultado = ${num * num2} `)

        } else {
            counter += 1

            console.error(`ERROR nº${counter}: el número aleatorio ${num2} ha sido impar y no se puede multiplicar`)

        }
    }
}

multiplyOnlyPeers(4)
