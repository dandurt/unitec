//se crea una variable para direccionar el modulo mysql
var mysql = require('mysql');
//cadena de conexion
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
});
conn.connect( function (err){
    if(err) throw err;
        console.log('Conectado');
    conn.query("CREATE DATABASE tienda", function(err, result){
        if(err) throw err;
        console.log("Base De Datos Creada");
    });
});


