const { createReadStream } = require('fs')

//reading file
const stram = createReadStream('./content/big-file.txt')
// const stram = createReadStream('./content/big-file.txt', { highWaterMark: 90000 })
// const stram = createReadStream('./content/big-file.txt', { encoding: 'utf-8' })

//default 64kb
//last buffer - remaider 
//highWaterMark - control size (user defined chunk size)

//getting result from file
stram.on('data', (result) => console.log(result))

//if there is any error
stram.on('error', (err) => console.log(err))
