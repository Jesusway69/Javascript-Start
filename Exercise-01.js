// 1. Crea una variable para cada operación aritmética
let sum = 4 + 28
let subs = 10 - 2
let mult = 8 * 4
let div = 128 / 2
let pow = 2 ** 8
let mod = 150 % 2
console.log(sum, subs, mult, div, pow, mod)

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
sum += 96
subs -= 4
mult *= 2
div /= 2
pow **= 2
mod %= 2
console.log(sum, subs, mult, div, pow, mod)

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(sum > subs)
console.log(mod < mult)
console.log(sum / subs == div)
console.log(pow / mult != sum * subs)
console.log((sum * mult * subs) == pow / 2)


// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(sum == pow)
console.log(subs * div != sum)
console.log(pow / sum <= mult + subs)
console.log(64 === "64")
console.log(mod !== sum * mod)

// 5. Utiliza el operador lógico and
console.log(32 > 4 && 64 < 128)

// 6. Utiliza el operador lógico or
console.log(4 == 8 || 16 == 4 ** 2)

// 7. Combina ambos operadores lógicos
console.log((32 > 4 && 64 < 128) || 256 / 2 == 64)

// 8. Añade alguna negación
console.log(("Hola" != "Hola " && "Javascript" == "Javascript") || true === false)

// 9. Utiliza el operador ternario
console.log(64 ** 2 == 4096 ? "64^2 es 4096" : "64^2 no es 4096")

// 10. Combina operadores aritméticos, de comparáción y lógicas
right = (1 ** 2 < 2 && 24 === 6 * 4) || (65 != 32 * 2 || "Hola" !== "Hello")
wrong = (1 ** 2 < 2 || 24 === 6 * 4) && (65 == 32 * 2 || "Hola" === "Hello")
console.log(right)
console.log(wrong)

