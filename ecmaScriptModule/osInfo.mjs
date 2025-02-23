import { hostname, platform, cpus, arch, machine, totalmem, freemem, release } from "node:os"

console.log(hostname())
console.log(platform())
console.log(release())
console.log(arch())
console.log(machine())
console.log(totalmem() / 1024 / 1024)
console.log(freemem() / 1024 / 1024)
console.log(cpus())