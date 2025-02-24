import os from "node:os"

console.log(os.hostname())
console.log(os.platform())
console.log(os.release())
console.log(os.arch())
console.log(os.machine())
console.log("Memoria RAM total: ",(os.totalmem() / 1024 / 1024/1000).toFixed(), " Gb")
console.log("Memoria RAM libre: ",(os.freemem() / 1024 / 1024/1000).toFixed(2), "Gb")
//console.log(os.cpus())
console.log(os.userInfo())
console.log("Nº de procesadores lógicos: ", os.cpus().length)
console.log("Nº de procesadores físicos: ", os.cpus().length/2)
console.log("modelo de procesador: ", os.cpus()[0].model)
console.log("Velocidad base del procesador: ", parseFloat(os.cpus()[0].speed/1000, 10).toFixed(1), " Ghz")

for(let core of os.cpus()){
    console.log(core.speed)
    console.log(core.times.user)
}