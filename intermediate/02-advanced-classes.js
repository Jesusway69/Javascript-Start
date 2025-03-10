/*
Clase 3 - Objetos y Clases avanzadas (12/02/2025)
Vídeo: https://www.twitch.tv/videos/2379412787?t=00h21m33s
*/
let animal1 = {
    specie: "Papagayo",
    family: "bird",
    location: "South America"
}
// 1. Agrega una función al prototipo de un objeto
animal1.description = function () {
    console.log(`${this.specie} is a ${this.family} from ${this.location}`)
}
animal1.description()

// 2. Crea un objeto que herede de otro
let animal2 = Object.create(animal1)
animal2.specie = "Yako"
animal2.location = "Africa"
animal2.description()

// 3. Define un método de instancia en un objeto
function newAnimal(specie, family, location) {
    this.specie = specie
    this.family = family
    this.location = location
}
newAnimal.prototype.canFly = function () {
    console.log(this.specie, this.family == "bird" ? "can" : "can't", "fly")
}
let animal3 = new newAnimal("Emu", "land bird", "Australia")
animal3.canFly()

// 4. Haz uso de get y set en un objeto
animal1.setName = function(newName){
    this.name = newName
}//probar

// 5. Utiliza la operación assign en un objeto

// 6. Crea una clase abstracta

// 7. Utiliza polimorfismo en dos clases diferentes

// 8. Implementa un Mixin

// 9. Crea un Singleton

// 10. Desarrolla un Proxy