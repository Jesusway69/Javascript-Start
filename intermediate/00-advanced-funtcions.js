/*
Clase 1 - Funciones avanzadas (29/01/2025)
Vídeo: https://www.twitch.tv/videos/2367024319?t=00h08m45s
*/
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// 1. Crea una función que retorne a otra función
function returnFunction() {
    return function (exp) {
        console.log(`El número ${exp} en base 2 es: ${2 ** exp}`)
    }
}
let result = returnFunction()
result(numbers[8])

// 2. Implementa una función currificada que multiplique 3 números
function multiply3(num1) { //Las "Curry funtcions" son funciones anidadas que se van retornando a la vez 
    return function (num2) { //  que van recibiendo diferentes argumento para en la última devolver algo,
        return function (num3) { //  ir desarrollando algún tipo de lógica independiente en cada una, o ambas cosas
            return num1 * num2 * num3
        }
    }
}
console.log(`${numbers[2]} * ${numbers[3]} * ${numbers[5]} = ${multiply3(numbers[2])(numbers[3])(numbers[5])}`)

// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente
function pow(base, exp) {
    if (exp == 0) {//Las potencias elevadas a 0 siempre devuelven 1, descartamos ese caso primero
        return 1
    }
    else if (exp < 0) {
        return pow(base, exp + 1) / base
    }// Las potencias elevadas a negativo equivalen al mismo número positivo dividido entre 2
    return base * pow(base, exp - 1) //Retorno en caso de exponente no 0 ni negativo
}
console.log(`${numbers[2]} elevado a ${numbers[6]} es: ${pow(numbers[2], numbers[6])}`)

// 4. Crea una función createCounter() que reciba un valor inicial
//  y retorne un objeto con métodos para increment(), decrement() y getValue(), 
// utilizando un closure para mantener el estado
function createCounter(num) {

    return {
        increment: function () {//Si no utiliza una propiedad del objeto con this. se puede desarrollar
            num++                //  la closure tanto con función anónima como con arrow funtcion
            console.log(`Contador creciente = ${num}`)
        },
        decrement: () => {
            num--
            console.log(`Contador decreciente = ${num}`)
        },
        getValue: () => {
            console.log(`El valor actual del contador es: ${num}`)
        }

    }
}
let from4 = createCounter(numbers[4])
from4.increment()
from4.increment()
from4.increment()
from4.decrement()
from4.decrement()
from4.decrement()
from4.decrement()
from4.decrement()
from4.getValue()


// 5. Crea una función sumManyTimes(multiplier, ...numbers)
//  que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier
function sumManyTimes(multiplier, ...numbers) {//los 3 puntos equivalen a cualquier cantidad de argumentos iterables bajo ese 
    let acc = 0                                 //nombre de "variable" en este caso numbers
    for (let number of numbers) {
        acc += number
    }

    return acc * multiplier
}
const mult = 2
result = sumManyTimes(mult, 1, 2, 3, 4, 5, 6)
console.log(`Resultado de la suma de los números del 1 al 6 multiplicado por ${mult}: ${result}`)

// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función
function process1(callback, ...numbers) { //Modo1 con parámetros numéricos rest enviados independientemente
    let acc = 0
    for (let number of numbers) {
        acc = number += acc
    }

    callback(acc, "desde una secuencia de números independientes: ")
}
function process2(callback, numbers) { //Modo2 con los números a operar dentro de un array, la lógica dentro de la función
    let acc = 0                        //  es exactamente igual que en el caso anterior
    for (let number of numbers) {
        acc = number += acc
    }

    callback(acc, "desde un array: ")
}
function printerResult(result, text) {
    console.log(`Resultado de la suma de los números del 1 al 6 ${text} ${result}`)
}

process1(printerResult, 1, 2, 3, 4, 5, 6)
process2(printerResult, [1, 2, 3, 4, 5, 6])

// 7. Desarrolla una función parcial
function stringBuilder(firstString) {
    return (secondString) => {
        return firstString + " " + secondString
    }//Función que recibe un string y devuelve una función que recibe otro string y concatena ambos
}
const firstWord = stringBuilder("Hola")
console.log(firstWord("Javascript"))


// 8. Implementa un ejemplo que haga uso de Spread
function double(...numbers) {
    let listdouble = []
    for (let number of numbers) {
        listdouble.push(number * 2)
    }
    console.log(`Secuencia original: ${numbers}`)
    console.log(`Secuencia multiplicada por 2: ${listdouble}`)
}
double(...numbers)
double(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)

// 9. Implementa un retorno implícito
let capitalize = (name) => name.charAt(0).toUpperCase() + name.slice(1)
console.log(capitalize("jesus"))

// 10. Haz uso del this léxico
const likeJavascript = {
    language: "Javascript",
    likeMessage: function () {//el this sólo es reconocido en una función anónima no arrow
        console.log(`Me gusta ${this.language}`)
    },
    arrowLikeMessage: () => {//En una función arrow el this.language nos devuelve undefined
        console.log(`Me gusta ${this.language}`)// porque no reconoce el contexto del objeto
    }
}
likeJavascript.likeMessage()
likeJavascript.arrowLikeMessage()

