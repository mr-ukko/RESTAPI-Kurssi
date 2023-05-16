const mysql=require('mysql2');

const connection=mysql.createPool({
    host: 'localhost',
    user: 'username',   // Replace with your database username
    password: 'password', // Replace with your database password
    database: 'mydatabase', // Replace with your database name
});

module.exports=connection;