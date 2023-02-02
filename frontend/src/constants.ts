import { isDevelopmentMode } from './utils'

export const BACKEND_URL = isDevelopmentMode
  ? '/api'
  : 'https://health-hero-backend.onrender.com'
