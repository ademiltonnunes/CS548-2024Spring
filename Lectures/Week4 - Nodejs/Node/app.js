const http = require('http');

const server = http.createServer((request, response) => {
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/plain')
    response.end('Hello, world from my first web server!')
  
})

server.listen(8080, 'localhost',()=>{
    console.log('Server running at http://localhost:8080/')
});
