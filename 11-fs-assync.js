const { readFile, writeFile, read } = require('fs')

console.log('start')

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result
        writeFile('./content/third-async.txt', `here is the async file : ${first}, ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err)
                    return
                }
                const asyncFile = result
                // console.log(asyncFile)
                console.log('currently reading')
            }
        )
    })
})

console.log('done')