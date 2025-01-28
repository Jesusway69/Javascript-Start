
// 1. Imprime por consola tu nombre si una variable toma su valor
let myName = "Jesus"
if (myName == "Jesus")
    console.log(myName)

// 2. Imprime por consola un mensaje si el usuario y contraseña coincide con unos establecidos
let pass = "1234"
if (myName == "Jesus" && pass == "1234")
    console.log("Usuario y contraseña correctos")

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let myNumber = -2
if (myNumber > 0) {
    console.log("El número es positivo")
} else if (myNumber == 0) {
    console.log("El número es 0")
} else {
    console.log("El número es negativo")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
var pepe = 14
if (pepe < 18) {
    console.log(`No puedes votar, tienes menos de 18 años, podrás dentro de ${18 - pepe} años`)
} else {
    console.log("Puedes votar porque eres mayor de edad")
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad
console.log("Pepe es", pepe >= 18 ? "adulto" : "menor")

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
var month = "eneRO"
first = month.charAt(0).toUpperCase()
month = first + month.slice(1).toLowerCase()
if (month == "Diciembre" || month == "Enero" || month == "Febrero")
    console.log("Estamos en invierno")
else if (month == "Marzo" || month == "Abril" || month == "Mayo")
    console.log("Estamos en primavera")
else if (month == "Junio" || month == "Julio" || month == "Agosto")
    console.log("Estamos en verano")
else if (month == "Septiembre" || month == "Octubre" || month == "Noviembre")
    console.log("Estamos en otoño")
else
    console.log("Valor no válido")

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
if (month == "Diciembre" || month == "Enero" || month == "Marzo" || month == "Mayo" || month == "Julio"
    || month == "Agosto" || month == "Octubre"
)
    console.log(`${month} tiene 31 días`)
else if (month == "Junio" || month == "Abril" || month == "Septiembre" || month == "Noviembre")
    console.log(`${month} tiene 30 días`)
else if (month == "Febrero")
    console.log(`${month} tiene 28 días (o 29 si es año bisiesto)`)
else
    console.log("Valor no válido")

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let language = "de".toUpperCase()
switch (language) {
    case "ES":
        console.log("Hola, me gusta mucho Javascript!")
        break
    case "EN":
        console.log("Hello, I really like javascript.")
        break
    case "FR":
        console.log("Bonjour, j'aime beaucoup javascript")
        break
    case "PR":
        console.log("Olá, gosto muito de javascript.")
        break
    case "DE":
        console.log("Hallo, ich mag Javascript wirklich.")
        break
    case "IT":
        console.log("Ciao, mi piace molto JavaScript.")
        break
    case "NL":
        console.log("Hallo, ik hou erg van javascript.")
        break

    default:
        console.log("Valor no válido")
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6
switch (month) {
    case "Diciembre":
    case "Enero":
    case "Febrero":
        console.log("Estamos en invierno")
        break
    case "Marzo":
    case "Abril":
    case "Mayo":
        console.log("Estamos en primavera")
        break
    case "Junio":
    case "Julio":
    case "Agosto":
        console.log("Estamos en verano")
        break
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
        console.log("Estamos en otoño")
        break
    default:
        console.log("Valor no válido")
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7
switch (month) {
    case "Enero":
    case "Marzo":
    case "Mayo":
    case "Julio":
    case "Agosto":
    case "Octubre":
    case "Diciembre":
        console.log(`${month} tiene 31 días`)
        break
    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
        console.log(`${month} tiene 30 días`)
        break
    case "Febrero":
        console.log(`${month} tiene 28 días (o 29 si es año bisiesto)`)
        break
    default:
        console.log("Valor no válido")
}