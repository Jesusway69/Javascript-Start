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
    console.log(division(15, 3))// Se ejecuta el primero si es correcto
    console.log(division(hola))// Si este estuviera primero no se ejecutaría el segundo

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

// 7. Captura varias excepciones en un mismo try-catch

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10