import { Countries, myConst, salute } from "./12-modules-export.js"
import { fromFolder } from "./export-folder/modules-export.js"
import myDefaultImport from "./12-modules-export.js"

/*
Clase 45 - Ejercicios: Módulos
Vídeo: https://youtu.be/1glVfFxj8a4?t=22720
*/

// 1. Exporta una función

// 2. Exporta una constante

// 3. Exporta una clase

// 4. Importa una función
salute()
// 5. Importa una constante
console.log(myConst)

// 6. Importa una clase
const spain = new Countries("España", "Madrid")
spain.printer()

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)

// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)
console.log(myDefaultImport())

// 9. Exporta una función, una constante y una clase desde una carpeta

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior
fromFolder()