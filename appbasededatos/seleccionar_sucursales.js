
var http = require('http');
//se crea una variable para direccionar el modulo mysql
var mysql = require('mysql');
var contenido = `<html>
        <head>
            <title>Sucursales</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js" integrity="sha384-fbbOQedDUMZZ5KreZpsbe1LCZPVmfTnH7ois6mU1QK+m14rQ1l2bGBq41eYeM/fS" crossorigin="anonymous"></script>
            <style>
                .sucursal-img {
                    width: 50%;
                    height: auto;
                    display: block;
                    margin: 0 auto;
                    border-radius: 8px;
                }
            </style>
        </head>
        <body> 
            <div class="container">
            <h1 class="display-1 text-center">Lista de Sucursales</h1>`;
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tienda'     
}); 

conn.connect( function (err){
    if(err) throw err;
        console.log('Conectado');
    conn.query("Select * from sucursales", function(err, result, fields){
        if(err) throw err;
        result.forEach(({ nombre, descripcion, photo }) =>{
            contenido += `
            <div class="row p-4">
                <div class="col">
                    <img class="sucursal-img" src="http://localhost:8080/appbasededatos/images/${photo}" />
                </div>
                <div class="col">
                    <h1 class="display-3 text-uppercase fw-bold">${nombre}</h1>
                    <h1>${descripcion}</h1>  
                </div>
            </div>`;
        });
    contenido += "<p class='text-center mt-4'>Usa <kbd>ctrl + p</kbd> para abrir el dialogo de impresion.</p> "
    contenido += "</div></body></html>";
        http.createServer(
            function(req, res){
                res.writeHead(200, {'Content-Type' : 'text/html'});
                res.write(contenido);
                res.end();
            }
        ). listen(80);
        
    });
});