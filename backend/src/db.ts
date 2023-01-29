import { Client, ClientConfig } from 'pg'
import * as path from 'path'
import * as dotenv from 'dotenv'
import { isDevelopmentMode } from './utils'

let dbClient: Client

if (isDevelopmentMode) {
  const envPath = path.resolve(__dirname, '../.env.production')
  dotenv.config({ path: envPath })
}

const dbConfig = {
  host: process.env.PGHOST,
  port: process.env.PGPORT || 5432,
  user: process.env.PGUSER || '',
  password: process.env.PGPASSWORD || '',
  database: 'healthhero',
} as ClientConfig

const dbConnect = async () => {
  const client = new Client({ ...dbConfig, ssl: true })

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
