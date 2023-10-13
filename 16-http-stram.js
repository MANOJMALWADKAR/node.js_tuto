const http = require('http')
const fs = require('fs')

http.createServer(function (req, res) {
    // const txt = fs.readFileSync('./content/big-file.txt', 'utf-8')
    // res.end(txt)

    const txt = fs.createReadStream('./content/big-file.txt', 'utf-8')
    txt.on('open', () => {
        txt.pipe(res)
    })

    txt.on('error', (err) => console.log(err))

}).listen(5000)

