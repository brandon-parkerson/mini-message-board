const { Pool } = require("pg");

module.exports = new Pool({
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DB_URL,
    password: process.env.PASSWORD,
    port: process.env.DB_PORT
})