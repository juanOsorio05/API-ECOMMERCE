const  mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host:"mysql-juanosorio.alwaysdata.net",
    user:"329901",
    password:"Ligiacarolina12",
    database:"juanosorio_iricy",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;