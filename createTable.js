const { Pool } = require('pg');
require('dotenv').config();
const pool = new Pool({
    user: process.env.POSTGRESQL_ADDON_USER,
    host: process.env.POSTGRESQL_ADDON_HOST,
    database: process.env.POSTGRESQL_ADDON_DB,
    password: process.env.POSTGRESQL_ADDON_PASSWORD,
    port: parseInt(process.env.POSTGRESQL_ADDON_PORT)
});
const createTableQuery = `
    CREATE TABLE IF NOT EXISTS quotes (
        id SERIAL PRIMARY KEY,
        quote TEXT,
        author VARCHAR(255),
        date DATE
    )
`;
async function createQuotesTable() {
    try {
        const client = await pool.connect();
        await client.query(createTableQuery);
        client.release();
        console.log('Quotes table created successfully');
    } catch (err) {
        console.error('Error creating quotes table', err);
    }
}
createQuotesTable();