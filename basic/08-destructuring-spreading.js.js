/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
let bigAnimals = ["giraffe", "ostrich", "leopard", "buffalo", "chimpanzee", "rhinoceros", "whale", "hippo"]
let littleAnimals = ["ant", "bee", "mouse", "goldfinch", "anchovy", "beetle", "squirrel", "wasp", "lizard"]
let [animal1, animal2] = bigAnimals
console.log(`Animal1: ${animal1}, Animal2: ${animal2}`)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let [, , , , animal5, animal6, animal7, animal8, animal9 = "dolphin"] = bigAnimals
console.log(`Animal5: ${animal5}, Animal6: ${animal6}, Animal7: ${animal7}, Animal8: ${animal8}, Animal9: ${animal9}`)

// 3. Usa desestructuración para extraer dos propiedades de un objeto
let toyotaCorolla = {
    brand: "Toyota",
    model: "Corolla",
    wheels: 4,
    sits: 5,
    engine: "hybrid",
    power: 140,
    plug: false,
    extras: {
        color: "white",
        bodywork: "hachback",
        submodel: "GR"
    }
}
let { brand, model } = toyotaCorolla
console.log(`Marca: ${brand}, modelo: ${model}`)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
let { wheels: ruedas, sits: plazas } = toyotaCorolla
console.log(`Ruedas: ${ruedas}, plazas: ${plazas}`)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
let { extras: { color, submodel } } = toyotaCorolla
console.log(`Color: ${color}, acabado: ${submodel}`)

// 6. Usa propagación para combinar dos arrays en uno nuevo
let animals = [...bigAnimals, ...littleAnimals]
console.log(animals)

// 7. Usa propagación para crear una copia de un array
let bigAnimalsCopy = [...bigAnimals]
console.log(bigAnimalsCopy)
bigAnimalsCopy = [...bigAnimalsCopy, "eagle"]
console.log(bigAnimalsCopy)

// 8. Usa propagación para combinar dos objetos en uno nuevo
let renaultMegane = {
    brand: "Renault",
    model: "Megane",
    wheels: 4,
    sits: 5,
    engine: "diesel",
    power: 130,
    extras: {
        color: "blue",
        bodywork: "hachback",
        submodel: "GT"
    }
}
let cars = { ...toyotaCorolla, ...renaultMegane }
console.log(cars) //si tiene elementos con la misma clave las del segundo objeto sobreescriben a las del primero

// 9. Usa propagación para crear una copia de un objeto
let toyotaCorolla2 = { ...toyotaCorolla }
console.log(toyotaCorolla2)

// 10. Combina desestructuración y propagación
bigAnimalsCopy = [...bigAnimalsCopy, "elephant"]
console.log(bigAnimalsCopy)
let [, , animal3, animal4, , , , , , animal10] = bigAnimalsCopy
console.log(`Animal3: ${animal3}, Animal4: ${animal4}, Animal9: ${animal9}, Animal10: ${animal10}`)