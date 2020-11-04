const mysql = require('mysql')
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '12345',
        database: 'ELECTRON_TEST_APP'
    })
    connection.connect()


export { connection }