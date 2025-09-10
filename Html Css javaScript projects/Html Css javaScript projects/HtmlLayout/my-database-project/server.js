const express = require('express');
const sql = require('mssql');
const app = express();
const port = 3000;

// SQL Server connection configuration
const config = {
    user: 'db', // your SQL username
    password: '111', // your SQL password
    server: 'localhost', // your server address
    database: 'CoursePlatform', // your database name
    options: {
        encrypt: true,
        trustServerCertificate: true, // change to true if using a self-signed certificate
    },
};

// Middleware to serve static files (like HTML, CSS)
app.use(express.static('public'));

// Endpoint to get data from the 'user' table
app.get('/get-users', async (req, res) => {
    try {
        // Create connection to the database
        await sql.connect(config);
        
        // Query to select all data from the 'user' table
        const result = await sql.query('SELECT * FROM [users]');
        
        // Send the result back to the frontend
        res.json(result.recordset); // recordset contains the rows returned by the query
    } catch (err) {
        res.status(500).send(`Error fetching data: ${err.message}`);
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
