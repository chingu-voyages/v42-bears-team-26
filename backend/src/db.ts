import { Client, ClientConfig } from 'pg'
import * as path from 'path'
import * as dotenv from 'dotenv'

let dbClient: Client

const isDevelopmentMode = process.env.NODE_ENV !== 'production'

if (isDevelopmentMode) {
  const envPath = path.resolve(__dirname, '../.env')
  dotenv.config({ path: envPath })
}

const dbConfig = {
  port: process.env.PGPORT || 5432,
  user: process.env.PGUSER || '',
  password: process.env.PGPASSWORD || '',
} as ClientConfig

const dbConnect = async () => {
  const client = new Client(dbConfig)

  try {
    await client.connect()
    console.log('Connected to the DB 🤖')
  } catch (err) {
    console.error('Database connection error', err.stack)
  }

  dbClient = client
}

dbConnect()

export { dbClient }
