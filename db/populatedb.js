const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR ( 255 ), message VARCHAR ( 255 )
);

INSERT INTO messages (name, message)
VALUES
    ('Brandon', 'Hello from Tampere!');
`;

async function main() {
    console.log("seeding...");
    const client = new Client({
      connectionString: "postgresql://postgres:PHFdzzOnOyuFMCgVUCZiOeJfwhDDCBWc@hopper.proxy.rlwy.net:41523/railway",
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
  }

main();