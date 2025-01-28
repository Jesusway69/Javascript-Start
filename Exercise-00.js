console.log("1. Escribe un comentario en una línea")
// Comentario en una línea

console.log("2. Escribe un comentario en varias líneas")
/*
Comentario
en varias 
líneas
*/

console.log("3. Declara variables con valores asociados a todos los datos de tipo primitivos")
var string = "Hola Javascript"
var num = 50
var bigNum = 646448546854584368458464n
var float = 6.5
var bool = true
var undef
var nul = null
var symbol = Symbol("mySymbol")

console.log("4. Imprime por consola el valor de todas las variables")
console.log(string, num, bigNum, float, bool, undef, nul, symbol)

console.log("5. Imprime por consola el tipo de todas las variables")
console.log(typeof(string),typeof(num),typeof(bigNum), typeof(float), typeof(bool), typeof(undef), typeof(nul), typeof(symbol))

console.log("6. A continuación, modifica los valores de las variables por otros del mismo tipo")
var string = "Hola de nuevo Javascript"
var num = 150
var bigNum = 4648784645521235136215152n
var float = 15.87
var bool = false
var undef
var nul = null
var symbol = Symbol("myNewSymbol")

console.log("7. A continuación, modifica los valores de las variables por otros de distinto tipo")
string = 58
num = "50"
bigNum = 568.897
float = 6446854854634365845436584685n
bool = Symbol("true")
undef
nul = null
symbol = false

console.log("8. Declara constantes con valores asociados a todos los tipos de datos primitivos")
const consString = "Hola Javascript"
const consNum = 50
const consBigNum = 646448546854584368458464n
const consFloat = 6.5
const consBool = true
const consNul = null
const consSymbol = Symbol("mySymbol")

console.log("9. A continuación, modifica los valores de las constantes")
//consString = "Hola de nuevo Javascript"
//consNum = 50
//consBigNum = 646448546854584368458464n
//consFloat = 6.5
//consBool = true
//consNul = null
//consSymbol = Symbol("mySymbol")

console.log("10. Comenta las líneas que produzcan algún tipo de error al ejecutarse")