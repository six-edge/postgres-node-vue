"use strict"

// Load .env file
require('dotenv').config()

const express    = require('express')
const app        = express()
const db         = require('./database/postgres')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

// Server dist folder as root /
app.use(express.static('dist'))

// List
app.get('/api/objects', (req, res) => {
    res.send('Database -> List of all Objects -> ')
});

// Create 
app.post('/api/objects/:id', jsonParser, function (req, res) {
    res.send('Database -> Create Object -> Return 200 or 400')
    console.log(req.body)
});

// Read
app.get('/api/objects/:id', (req, res) => {
    res.send('Database -> Read Object -> Return 200 or 404')
});

// Update
app.put('/api/objects/:id', (req, res) => {
    res.send('Database -> Update Object -> Return 200 or 404')
});

// Delete
app.delete('/api/objects/:id', (req, res) => {
    res.send('Database -> Delete Object -> eturn 200 or 404')
});

// Assign Port
const port = process.env.PORT || 5000

// Listen for incoming requests
app.listen(port)

// Output to stdout
console.log('Server started '+ port)