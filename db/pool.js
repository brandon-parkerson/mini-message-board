const { Pool } = require("pg");

module.exports = new Pool({
    connectionString: process.env.DB_URL,  // Use the entire DB_URL as a single connection string
    ssl: {
        rejectUnauthorized: false,  // Important for Railway connections
    },
});