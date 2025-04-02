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
animal1.setName = function (newName) {
    animal1.specie = newName
}
animal1.getName = function () {
    return animal1.specie
}
animal1.setName("Eagle")
console.log(animal1.getName())
animal1.description()


// 5. Utiliza la operación assign en un objeto
let fooding = {
    feeding: "carivorous"
}
let newAnimal1 = Object.assign(animal1, fooding)
console.log(newAnimal1)

// 6. Crea una clase abstracta

class Animal {
    constructor(specie, family, location) {
        if (new.target === Animal) {
            throw new Error("Clase abstracta, no se puede intanciar directamente")
        }

        this.family = family
        this.location = location
        this.specie = specie
    }
    description() {
        console.log(`${this.specie} is a ${this.family} from`,
            typeof (this.location) == "string" ? this.location : this.location.toString().replaceAll(",", " and "))
    }
}


// 7. Utiliza polimorfismo en dos clases diferentes
class Lion extends Animal {
    constructor(specie, family, location) {
        super(specie, family, location)
    }

}
const animal4 = new Lion("Lion", "mammal", "Africa")
animal4.description()

class Elephant extends Animal {
    constructor(specie, family, location) {
        super(specie, family, location)
    }
}
const animal5 = new Elephant("Elephant", "mammal", ["Asia", "Africa"])
animal5.description()


// 8. Implementa un Mixin
class Dolphin extends Animal {
    constructor(specie, family, location) {
        super(specie, family, location)
    }
}
const Aquatic = {
    aquatic() {
        console.log(`${this.specie} is an aquatic animal`)
    }
}
Object.assign(Dolphin.prototype, Aquatic)
const animal6 = new Dolphin("Dolphin", "mammal", ["Africa", "America", "Asia", "Europe", "Oceania"])
animal6.description()
animal6.aquatic()

// 9. Crea un Singleton
class Singleton {

    constructor(name) {
        if (Singleton.instance) {
            return Singleton.instance
        }
        this.name = name
        Singleton.instance = this
        console.log(`\nEsta es una instancia única creada por ${this.name}`)
    }
}
const jesus = new Singleton("Jesus")
const pepe = new Singleton("Pepe")
console.log(jesus)
console.log(pepe)

// 10. Desarrolla un Proxy
class Stock {
    constructor(units) {
        this.units = units
    }
}

const proxy = {
    get(target, property) {
        console.log(`\nEl stock es de ${target[property]} unidades`)
        return target[property]
    },
    set(target, property, amount) {
        if (!Number.isInteger(amount) || amount < 0) {
            throw new Error("No se admite un dato no numérico o menor a 0")
        }
        
        console.log(`Stock actual: ${target[property]}`)
        target[property] = amount
        console.log(`Unidades vendidas en esta operación: ${amount}`)
        console.log(`El stock actualizado es de ${target[property]} unidades`)
        return target
        
    }
}

let stock = new Proxy(new Stock(500), proxy)
stock.units -= 50


