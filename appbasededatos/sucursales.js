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
    conn.query("CREATE TABLE sucursales(id INT PRIMARY KEY AUTO_INCREMENT, nombre varchar(60), descripcion varchar(60), photo varchar(60))", function(err, result){
        if(err) throw err;
        console.log("Tabla Creada");
    });
});