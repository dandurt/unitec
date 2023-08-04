  var http = require('http');

//se crea una variable para direccionar el modulo mysql
var mysql = require('mysql');
//cadena de conexion
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tienda'
});

conn.connect( function (err){
    if(err) throw err;
        console.log('Conectado');
    conn.query("Select * from productos", function(err, result, fields){
        if(err) throw err;
http.createServer(
    function(req, res){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write('<html><head><title>fecha actual</title></head>'+
                   '<body><h1> Indica la fecha actual de acuerdo con la zona</h1>' +
                   'Servidor habilitado<br>fecha Actual: ' + fields[2].name + '</body></html>' 
        );
        res.end();
    }
). listen(80);

    });
});