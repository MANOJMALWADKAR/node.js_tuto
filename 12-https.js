
const http = require('http')

// create HTTP SERVER
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('welcome to the home page')
    }
    if (req.url === '/about') {
        res.end('here is about page')
    }
    else {
        res.end(`
        <h1>Oops!</h1>
        <p>Something went wrong, Go Back </p>
        <a href='/'>Home</a>
        `)
    }
})
server.on('error', (error) => {
    console.error('Server error:', error);
});

server.listen(5000)

