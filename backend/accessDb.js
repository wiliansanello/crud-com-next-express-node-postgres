require('dotenv').config()
const { Client } = require('pg')

const client = new Client({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT
})

const connectDb = async () => {
  try {
    await client.connect()
  } catch (err) {
    console.log(err)
  }
}

module.exports = connectDb