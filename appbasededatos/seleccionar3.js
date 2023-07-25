
var http = require('http');
//se crea una variable para direccionar el modulo mysql
var mysql = require('mysql');
var contenido = '<html><head><title>Consulta</title></head>'+
'<body><h1> Reporte de productos</h1>'+ "<table border='1'>" +
        "<thead>" +
           "<tr><th>Descripcion</th>" + 
           "<th>Cantidad</th>" +
           "<th>Precio</th>" + 
           "<th>Proveedor</th>" + 
           "</tr>" + 
        "</thead><tbody>";
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
        result.forEach(elemento =>{
            contenido += "<tr><td>" + elemento.descripcion +"</td>" +
                        "<td>" + elemento.cantidad +"</td>" +
                        "<td>" + elemento.precio +"</td>" +
                        "<td>" + elemento.provedor +"</td></tr>";
        });
  contenido += "</tbody></table></body></html>";
        http.createServer(
            function(req, res){
                res.writeHead(200, {'Content-Type' : 'text/html'});
                res.write( contenido);
                res.end();
            }
        ). listen(80);
        
    });
});