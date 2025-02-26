// 1. Concatena dos cadenas de texto
const js = "Javascript"
const hello = "Hola "
console.log("Hola", js)
console.log(hello + js)

// 2. Muestra la longitud de una cadena de texto
console.log(js.length)

// 3. Muestra el primer y último carácter de un string
console.log(js[0] + " " + js[js.length - 1])

// 4. Convierte a mayúsculas y minúsculas un string
console.log(js.toUpperCase())
console.log(js.toLowerCase())

// 5. Crea una cadena de texto en varias líneas
let learn = `"Javascript
 desde
 cero"`
console.log(learn)

// 6. Interpola el valor de una variable en un string

console.log(`Me gusta aprender ${js}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log("Me gusta aprender Javascript".replaceAll(" ", "-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log("Me gusta aprender Javascript".includes(js))

// 9. Comprueba si dos strings son iguales
console.log("Javascript" == js)

// 10. Comprueba si dos strings tienen la misma longitud
console.log(js.length == "Typescript".length)