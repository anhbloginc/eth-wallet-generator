const express = require('express');
const mysql = require('mysql2/promise'); // MySQL library

const app = express();
app.use(express.json());

const dbConfig = {
  host: 'db-mysql-sgp1-thefrens-do-user-1775112-0.b.db.ondigitalocean.com',
  user: 'ethwallet_user',
  password: 'AVNS_bnwrY398sGxghXkOrY2',
  database: 'ethwallet',
  port: 25060,
  ssl: {
    ca: '/etc/ssl/certs/ca-certificate.crt', // Path to your CA certificate file
  },
};

// Create a MySQL connection pool
const pool = mysql.createPool(dbConfig);

app.post('/api/save-wallet', async (req, res) => {
  try {
    const { address, privateKey } = req.body;

    // Insert wallet data into the database
    const connection = await pool.getConnection();
    await connection.execute('INSERT INTO wallets (address, privateKey) VALUES (?, ?)', [address, privateKey]);
    connection.release();

    res.status(200).json({ message: 'Wallet data inserted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error inserting wallet data' });
  }
});

const port = 3000; // Replace with your desired port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
