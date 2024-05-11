const express = require('express');
const { Pool } = require('pg');
const app = express();
const PORT = process.env.PORT || 3000;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '2424',
    port: 2424
});

app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM quotes ORDER BY date DESC NULLS LAST;');
        const quotes = result.rows;
        client.release();
        res.render('index', { quotes });
    } catch (err) {
        console.error('Error executing query', err);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/add', async (req, res) => {
    const { quote, author, date } = req.body;
    console.log(req.body);
    try {
        const client = await pool.connect();
        if (date == "") {
            await client.query('INSERT INTO quotes (quote,author) VALUES ($1, $2)', [quote, author]);
        } else {
            await client.query('INSERT INTO quotes (quote,author,date) VALUES ($1, $2, $3)', [quote, author, date]);
        }
        client.release();
        res.redirect('/');
    } catch (err) {
        console.error('Error executing query', err);
        res.status(500).send('Internal Server Error');
    }
});

app.set('view engine', 'ejs');

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
