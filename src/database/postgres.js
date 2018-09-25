"use strict"

// see https://node-postgres.com/
// see https://www.endpoint.com/blog/2013/06/03/postgresql-as-nosql-with-data-validation

const { Client } = require('pg')

const client = new Client(process.env.DATABASE_URL ? {
  connectionString: process.env.DATABASE_URL,
  ssl: true
} : {})

// Connect
client.connect((err) => {
    if (err) {
      console.error('connection error', err.stack)
    } else {
      console.log('connected')
    }
  })

// Query
client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
})


