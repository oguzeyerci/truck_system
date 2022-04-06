const { Pool } = require('pg');

const options = {
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT,
}
//console.log(process.env.USER)

const pg_client = new Pool(options)
try {
    pg_client.connect();
    console.log(":> PostgreSQL Server is Ready");
} catch (err) {
    console.log(err.stack);
}

exports.pg_client = pg_client
