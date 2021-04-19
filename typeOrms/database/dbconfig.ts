import { createConnection } from 'typeorm';
import { Employee } from '../entities/users';

export default createConnection({
    type: 'postgres',
    database: 'inventory',
    username: 'zaki',
    password: 'root',
    logging: true,
    synchronize: true,
    entities: [Employee],
})