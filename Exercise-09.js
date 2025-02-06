/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades
// 2. Añade un método a la clase que utilice las propiedades
// 4. Añade un método estático a la primera clase
class Vehicle {
    constructor(brand, model){
        this.brand = brand
        this.model = model
    } 
    printer () {
        console.log(`El coche es un ${this.brand} ${this.model}`)
    }
    static printerLike(brand, model){
        console.log(`Me gusta mucho el ${brand} ${model}`)
    }
}

// 3. Muestra los valores de las propiedades e invoca a la función
let golf = new Vehicle("Volkswagen", "Golf") 
console.log(`La marca del golf es ${golf.brand}`)
golf.printer()


// 5. Haz uso del método estático
Vehicle.printerLike("Fiat", "Bravo")

// 6. Crea una clase que haga uso de herencia
class Motorcycle extends Vehicle{
   printer(){
    console.log(`La moto es una ${this.brand} ${this.model}`)
   }
}
let tzr = new Motorcycle("Yamaha", "TZR")
tzr.printer()

// 7. Crea una clase que haga uso de getters y setters
// 8. Modifica la clase con getters y setters para que use propiedades privadas
// 9. Utiliza los get y set y muestra sus valores
class Login{
    #user
    #password
    constructor(user, password){
        this.#user = user
        this.#password = password
    }
    get user(){
        return this.#user
    }
    set password(newPass){
        this.#password = newPass
    }
    get getPassword(){//Creamos el getter para mostrar que el cambio se ha hecho correctamente (no recomendado)
        return this.#password
    }
}
let user1 = new Login("Jesus", 123456789)
console.log(`El usuario es ${user1.user}`)
console.log(`La contraseña privada (no visible) es: ${user1.password}`)
user1.password = 987654321
console.log(`La contraseña modificada (con getter para poder mostrarla) es: ${user1.getPassword}`)

// 10. Sobrescribe un método de una clase que utilice herencia 
class Truck extends Vehicle{
    constructor(brand, model, tons){
        super(brand, model)
        this.tons = tons
    }
    printer(){
        console.log(`El camión es un ${this.brand} ${this.model} y carga ${this.tons} toneladas`)
       }
}
let t800 = new Truck("Scania", "T800", 40)
t800.printer()