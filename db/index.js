const mysql = require('mysql');

class DbConnection {
    host;
    connection;
    user;
    password;

    constructor(host, user, password, db) {
        this.host = host;
        this.user = user;
        this.password = password;
        this.db = db;

        this.createDbConnection();
    }
    createDbConnection() {
        this.connection = mysql.createConnection({
            host: this.host,
            user: this.user,
            password: this.password,
            database: this.db
        });

        this.connection.connect((err) => {
            if(err) throw err;
            console.log("conectado");
        })
    }

    runQuery(query) {
        this.connection.query(query, (err, result) => {
            if(err) throw err;
            console.log(result);
        })
    }
}
const db = new DbConnection('localhost', "root", "", 'tienda');
const createTableProductoQuery = "CREATE TABLE producto (id INT AUTO_INCREMENT PRIMARY KEY, descripcion VARCHAR(255), precio DECIMAL(10, 2), proveedor VARCHAR(60))";
const insertProductQuery = "INSERT INTO producto (descripcion, precio, proveedor) VALUES ('Shampoo', 10.2, 'Walmart')";
const showProductsQuery = "SELECT * FROM producto";
db.runQuery(showProductsQuery);


