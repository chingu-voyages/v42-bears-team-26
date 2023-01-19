import { Client, ClientConfig } from 'pg'
import * as path from 'path'
import * as dotenv from 'dotenv'

const isDevelopmentMode = process.env.NODE_ENV !== 'production'

if (isDevelopmentMode) {
  const envPath = path.resolve(__dirname, '../.dev.env')
  dotenv.config({ path: envPath })
}

const dbConfig = {
  connectionString: process.env.PGHOST || '',
  port: process.env.PGPORT || 5432,
  user: process.env.PGPORT || '',
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

  return client
}

export { dbConnect }
