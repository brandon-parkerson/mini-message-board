const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR ( 255 ), message VARCHAR ( 255 )
);

INSERT INTO messages (name)
VALUES
    ('Brandon');

INSERT INTO messages (message)
VALUES
    ('Hello from Tampere!');
`;

async function main() {
    console.log("seeding...");
    const client = new Client({
        connectionString: process.env.DB_URL,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main();