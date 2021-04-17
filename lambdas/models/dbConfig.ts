import { Pool } from 'pg';
export const pool = new Pool({
  user: 'zaki',
  host: 'localhost',
  database: 'inventory',
  password: 'root',
  port: 5432,
})
// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res) 
//   pool.end() 
// })