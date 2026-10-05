const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();

app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: process.env.PGUSER || 'umesh',
  host: process.env.PGHOST || 'localhost',
  database: process.env.PGDATABASE || 'db_hotel',
  password: process.env.PGPASSWORD,
  port: Number(process.env.PGPORT || 5432)
});

pool.connect()
  .then(() => {
    console.log('PostgreSQL connected');
  })
  .catch((error) => {
    console.log('Database connection error:', error);
  });

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

//get the list of menu items
app.get('/api/menu/search', async (req, res) => {
  try {
    const search = req.query.q || '';

    const result = await pool.query(
      `SELECT * FROM menu_items
       WHERE name ILIKE $1
       ORDER BY id`,
      [`%${search}%`]
    );

    res.json(result.rows);

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Server error'
    });
  }
});