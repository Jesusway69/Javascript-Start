console.clear()
/*
 * EJERCICIO:
 * - Crea ejemplos de funciones básicas que representen las diferentes
 *   posibilidades del lenguaje:
 *   Sin parámetros ni retorno, con uno o varios parámetros, con retorno...
 * - Comprueba si puedes crear funciones dentro de funciones.
 * - Utiliza algún ejemplo de funciones ya creadas en el lenguaje.
 * - Pon a prueba el concepto de variable LOCAL y GLOBAL.
 * - Debes hacer print por consola del resultado de todos los ejemplos.
 *   (y tener en cuenta que cada lenguaje puede poseer más o menos posibilidades)
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea una función que reciba dos parámetros de tipo cadena de texto y retorne un número.
 * - La función imprime todos los números del 1 al 100. Teniendo en cuenta que:
 *   - Si el número es múltiplo de 3, muestra la cadena de texto del primer parámetro.
 *   - Si el número es múltiplo de 5, muestra la cadena de texto del segundo parámetro.
 *   - Si el número es múltiplo de 3 y de 5, muestra las dos cadenas de texto concatenadas.
 *   - La función retorna el número de veces que se ha impreso el número en lugar de los textos.
 *
 * Presta especial atención a la sintaxis que debes utilizar en cada uno de los casos.
 * Cada lenguaje sigue una convenciones que debes de respetar para que el código se entienda.
 */

//FUNCIÓN SUMA SIMPLE SIN RETORNO
function sumPrint(a, b) {
    console.log(`${a} + ${b} = ${a + b} \n`)
}
sumPrint(10, 9)

// FUNCIÓN SUMA SIMPLE CON RETORNO
function sumReturn(a, b) {
    return a + b
}
console.log("9 + 8 =", sumReturn(9, 8), '\n')

// FUNCIÓN SUMA CON OPERANDOS VARIABLES POR PROPAGACIÓN CON RETORNO
function sumSpreadingReturn(...numbers) {
    let acc = 0
    for (let number of numbers) {
        acc += number
    }
    return acc
}
console.log("7 + 8 + 3 + 14 + 25 =", sumSpreadingReturn(7, 8, 3, 14, 25, '\n'))
// FUNCIÓN SUMA CON OPERANDOS VARIABLES POR PROPAGACIÓN SIN RETORNO
function sumSpreadingPrint(...numbers) {
    let acc = 0
    let operation = ''
    for (let i = 0; i < numbers.length; i++) {
        acc += numbers[i]
        if (i < numbers.length - 2) {
            operation += numbers[i] + ' + '
        } else if (i < numbers.length - 1) {
            operation += numbers[i]
        } else {
            operation += ' ='
        }
    }
    console.log(operation,acc)
}
sumSpreadingPrint(8, 7, 1, 16, 52, 9, 13, 4, '\n')
