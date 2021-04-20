import { createConnection } from 'typeorm';
import { Employee } from '../entities/users';

export default createConnection({
    type: 'postgres',
    database: 'inventory',
    username: 'zaki',
    host: 'localhost',
    port: 5432,
    password: 'root',
    logging: true,
    synchronize: true,
    entities: [Employee],
})