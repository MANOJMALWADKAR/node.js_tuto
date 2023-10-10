

//===============
//BUILT_IN_MODULES

/// OS

const os = require('os')

//SYSTEM USER INFO -> current logged-in userinfo
const user = os.userInfo()
console.log(user)

//SYSTEM UPTIME IN SECONDS -> time from when computer start
console.log(`The System Uptime is ${os.uptime} seconds`)

//SYSTEM PLATFORM -> win32 linux
console.log(os.platform());

//CPU ARCHITECTURE -> x64 x32
console.log(os.arch());

//INFO ABOUT EACH-CPU CORE,MODEL,TIME,SPEED
console.log(os.cpus())

//TOTAL MEMORY IN BYTE
console.log(os.totalmem())

//TOTAL FREE MEMORY
console.log(os.freemem())

//HOST NAME OF OS -> computer Name e.g DESKTOP-ADOJ7FV
console.log(os.hostname())

//INFO ABOUT NETWORK INTERFACE -> IP Add, family(IPV6), MAC Add
console.log(os.networkInterfaces())

//CPU LOAD AVERAGE in minutes
console.log(os.loadavg())

//OS TYPE -> windows_NT
console.log(os.type())

const currentOS = {
    name: os.type(),
    release: os.release(),
    version: os.version(),
}
console.log(currentOS)