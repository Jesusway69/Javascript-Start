
/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades
let galaxyS25 = {
    brand: "Samsung",
    category: "Smartphone",
    model: "Galaxy s25",
    connect: "5G"
}

// 2. Accede y muestra su valor
console.log(galaxyS25)
console.log(`La marca del s25 es: ${galaxyS25.brand}`)

// 3. Agrega una nueva propiedad
galaxyS25['color'] = "Blue"
console.log(galaxyS25)

// 4. Elimina una de las 3 primeras propiedades
delete galaxyS25.connect
console.log(galaxyS25)

// 5. Agrega una función e invócala
galaxyS25['System'] = function () {
    console.log("Android")
}
console.log(galaxyS25)
galaxyS25.System()

// 6. Itera las propiedades del objeto
for (let properties in galaxyS25) {
    console.log(properties, "=", galaxyS25[properties])
}

// 7. Crea un objeto anidado
let iphone16 = {
    brand: "Apple",
    model: 16,
    category: "Smartphone",
    color: "Red",
    specs: {
        processor: "a18",
        ram: "8gb"
    }
}
console.log(iphone16)

// 8. Accede y muestra el valor de las propiedades anidadas
console.log(`Procesador del iPhone ${iphone16.model}: ${iphone16.specs.processor}`)

// 9. Comprueba si los dos objetos creados son iguales
console.log(iphone16 == galaxyS25)

// 10. Comprueba si dos propiedades diferentes son iguales
console.log(iphone16.color == galaxyS25.color)
console.log(iphone16.category == galaxyS25.category)