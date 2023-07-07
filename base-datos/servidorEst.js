const http = require('http');
const url = require('url');


const server = http.createServer((req, res) => {
    const urlParsed = url.parse(req.url, true);
    console.log(urlParsed)
    const { query, pathname } = urlParsed;
    const { nombre, grupo, calificacion } = query;
    res.writeHead(200, {'Content-Type': "text/html"});
    res.write(`
    Servidor activo ${pathname} <br />
    Nombre: ${nombre} <br/>
    Grupo: ${grupo} <br/>
    Calificacion: ${calificacion} <br/>
    `);

    res.end();
})

server.listen(80);