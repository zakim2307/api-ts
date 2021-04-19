import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
// import 'reflect-metadata';
import { Employee } from './entities/users';
import createConnection from './database/dbconfig' 
import { Connection, getConnectionManager, getRepository } from 'typeorm';

export const handler: APIGatewayProxyHandler = async (event, _context) => {
  // console.log(createConnection,Employee)
  // const emp = (req, res) => {
    // const repo = getRepository(Employee);
    const manager = getConnectionManager().get();
    const repo = manager.getRepository<Employee>(Employee);
    repo.find()
  // }
  // console.log(emp);
  return {
    statusCode: 200,
    body: JSON.stringify('body', null, 2)
};
  
};