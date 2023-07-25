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
        console.log(result);
    });
});