const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DB_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

// Test connection immediately
pool.query('SELECT NOW()')
  .then(res => console.log('Database connected at:', res.rows[0].now))
  .catch(err => {
    console.error('DATABASE CONNECTION ERROR:', err);
    process.exit(1);  // Crash the app if DB fails
  });

module.exports = pool;