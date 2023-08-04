//se crea una variable para direccionar el modulo mysql
const mysql = require('mysql');
//cadena de conexion
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tienda'
});

conn.connect((err) => {
    if(err) throw err;
    
    console.log('conectado a la base de datos');
    const filtro = 'Proveedor 1'
    const sqlQuery = `select * from productos where provedor = ?`;

    conn.query(sqlQuery, [filtro], (err, result) => {
        if(err) throw err;

        console.log(result);
    });
});