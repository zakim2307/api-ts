import { Pool } from 'pg';
export const pool = new Pool({
  user: 'zaki',
  host: 'localhost',
  database: 'inventory',
  password: 'root',
  port: 5432,
})
