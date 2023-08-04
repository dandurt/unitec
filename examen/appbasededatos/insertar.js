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

    const sqlQuery = 'Insert into Productos (id, descripcion, cantidad, precio, provedor) values ?';
    const values = [
        [1, 'Producto 1', 110, 121.10, 'Proveedor 1'],
        [2, 'Producto 2', 120, 122.20, 'Proveedor 2'],
        [3, 'Producto 3', 130, 123.30, 'Proveedor 3'],
        [4, 'Producto 4', 140, 124.40, 'Proveedor 3'],
        [5, 'Producto 5', 145, 125.50, 'Proveedor 1'],
    ]

    conn.query(sqlQuery, [values], (err, result) => {
        if(err) throw err;

        console.log('# de registros insertados', result);
    });
});