const mysql = require('mysql2');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'rental_system'
});

con.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
})

module.exports = con;