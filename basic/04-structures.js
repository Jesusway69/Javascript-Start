
// 1. Crea un array que almacene cinco animales
let animals = ["Avestruz", "Elefante", "Papagayo", "Cocodrilo", "Ballena"]
console.log(animals)

// 2. Añade dos más. Uno al principio y otro al final
animals.push("León")
animals.unshift("Pitón")
console.log(animals)

// 3. Elimina el que se encuentra en tercera posición
animals.splice(2, 1)
console.log(animals)
// 4. Crea un set que almacene cinco libros
let books = new Set(["Don Quijote", "Los pilares de la tierra", "Git y Github", "Python para principiantes", "Java para torpes"])
console.log(books)
// 5. Añade dos más. Uno de ellos repetido
books.add("Git y Github")
books.add("MySql fácil")
console.log(books)

// 6. Elimina uno concreto a tu elección
books.delete("Los pilares de la tierra")
console.log(books)

// 7. Crea un mapa que asocie el número del mes a su nombre
let months = new Map()
months = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]
])
console.log(months)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(months.has(5))
console.log(months.get(5))

// 9. Añade al mapa una clave con un array que almacene los meses de verano
let summerMonths = ["Junio", "Julio", "Agosto"]
months.set("summer months", summerMonths)
console.log(months)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let winterMonthsArray = ["Diciembre", "Enero", "Febrero"]
console.log(winterMonthsArray)
let winterMonthsSet = new Set(winterMonthsArray)
console.log(winterMonthsSet)
months.set("winter months", winterMonthsSet)
console.log(months)

