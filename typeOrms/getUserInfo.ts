import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import 'reflect-metadata';
import { Employee } from './entities/users';
import createConnection from './database/dbconfig' 

export const handler: APIGatewayProxyHandler = async (event, _context) => {
  const name = event.pathParameters?.item;
  // console.log(createConnection,Employee)
  Employee.find().then((data) => {
    console.log(data)
  }).catch((err) => {
    console.log(err);
  })
  return {
    statusCode: 200,
    body: JSON.stringify('body', null, 2)
};
  
};