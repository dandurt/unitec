const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const { pathname } = url.parse(req.url, true);
    console.log(pathname)
    fs.readFile(`.${pathname}`, (error, data) => {
        if(error) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end('404 No encontrado');
        }

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end()
            
    })
})

server.listen(80);