const http = require('http');
const fechaActual  = require('./fecha-modulo').fechaActual();

const server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(`
    <html>
        <head>
            <title>Fecha</title>
        </head>
        <body>
            <h1>Indica la fecha actual de acuerdo a la zona</h1>
            <h4>Servidor habilitado! ${fechaActual}</h4>
        </body>
    </html>
  `);
  res.end();
});

server.listen(8080);