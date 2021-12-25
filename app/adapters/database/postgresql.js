const { Pool } = require('pg');

const options = {
    user: "postgres",
    host: "localhost",
    database: "truck_system",
    password: "oguz1111",
    port: 5432,
}
//console.log(process.env.USER)

const pg_client = new Pool(options)
try {
    pg_client.connect();
    console.log("::> PostgreSQL Server is Ready");
} catch (err) {
    console.log(err.stack);
}

exports.pg_client = pg_client
