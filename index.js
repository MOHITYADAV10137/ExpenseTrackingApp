const express = require('express');
const cors = require('cors');
const { db } = require('./config/db');
const { readdirSync } = require('fs');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 5000;  // Default value 5000 agar .env mein PORT nahi hai

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)));

const server = () => {
    db();
    app.listen(PORT, () => {
        console.log('Listening to the port:', PORT);
    });
};

server();
