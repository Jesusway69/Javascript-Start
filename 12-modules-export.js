/*
Clase 45 - Ejercicios: Módulos
Vídeo: https://youtu.be/1glVfFxj8a4?t=22720
*/

// 1. Exporta una función
export function salute(){
    console.log("Soy una función exportada desde 12-modules-export\n")
}

// 2. Exporta una constante
export const myConst = "Soy una constante exportada desde 12-modules-export\n"

// 3. Exporta una clase
export class Countries{
    constructor(country, capital){
        this.country = country
        this.capital = capital
    }
    printer(){
        console.log(`La capital de ${this.country} es ${this.capital}\n`)
    }
}

// 4. Importa una función

// 5. Importa una constante

// 6. Importa una clase

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)
export default function defaultFuntcion(){
    return "Esta es la función por defecto desde 12-modules-export\n"
}

// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)

// 9. Exporta una función, una constante y una clase desde una carpeta

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior