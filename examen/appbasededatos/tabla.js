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
    conn.query("CREATE TABLE productos(id INT PRIMARY KEY AUTO_INCREMENT, descripcion varchar(60), cantidad INT(10), precio decimal(10, 2), provedor varchar(60))", function(err, result){
        if(err) throw err;
        console.log("Tabla Creada");
    });
});