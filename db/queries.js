const pool = require("./pool");

async function getAllMessages() {
    try {
        const { rows } = await pool.query("SELECT * FROM messages");
        return rows;
    } catch (err) {
        console.error("Database query error:", err);
        throw err; // or return []
    }
}

async function insertMessage(name, message) {
    await pool.query("INSERT INTO messages (name, message) VALUES ($1, $2)", [name, message]);
    
}

module.exports = {
    getAllMessages,
    insertMessage
}