import os from "node:os"
let uptimeHours = Math.floor(os.uptime() / 3600).toString()
let uptimeMinutes = Math.floor(os.uptime() / 60 - (uptimeHours * 60)).toString()
let uptimeSeconds = Math.floor(os.uptime() - (uptimeMinutes * 60) - (uptimeHours * 3600)).toString()
let thread = 0


console.log("Nombre del equipo:", os.hostname())
console.log("Sistema operativo:", os.type())
console.log("Compilación de sistema operativo:", os.version())
console.log("Compilación de kernel:", os.release())
console.log("Arquitectura del sistema operativo", os.arch())
console.log("Arquitectura del procesador:", os.machine())
console.log("Memoria RAM total: ", (os.totalmem() / 1000 / 1000 / 1000).toFixed(2), " Gb")
console.log("Memoria RAM libre: ", (os.freemem() / 1000 / 1000 / 1000).toFixed(2), "Gb")
console.log(`Nombre del usuario actual: ${os.userInfo().username}`)
console.log("Nº de procesadores lógicos: ", os.cpus().length.toString())
console.log("Modelo de procesador: ", os.cpus()[0].model)
console.log("Velocidad base del procesador:", parseFloat(os.cpus()[0].speed / 1000, 10).toFixed(2), "Ghz")
console.log("Tiempo de ejecución del sistema:", uptimeHours, (uptimeHours == 1 ? "hora," : "horas,")
    , uptimeMinutes, "minutos y"
    , uptimeSeconds, "segundos")

for (let core of os.cpus()) {
    thread++
    console.log(`Velocidad del hilo ${thread}: ${core.speed} Mhz`)
    console.log(`Segundos de ejecución en el hilo ${thread} por parte del usuario: ${core.times.user / 1000}`)
}
