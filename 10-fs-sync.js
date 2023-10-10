const { readFileSync, writeFileSync, read } = require('fs')

console.log('start')
//READING FILEs 
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second)

//WRITING FILE
writeFileSync('./content/third.txt', `${first} ,${second}`, { flag: 'a' })

console.log('done')
