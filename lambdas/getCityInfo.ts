import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import { pool } from './models/dbConfig'

export const handler: APIGatewayProxyHandler = async (event, _context) => {
  const name = event.pathParameters?.item;

  console.log(event.pathParameters,"The name is: "+ name)
    
  if(!name){
      return apiResponses._400({message: 'Cannot find name'})
  }

    const nm:string = name;

    const sql:string = 'select * from "Inventory" where name=\''+nm+'\';' 
    pool.query(sql, (err, res) => {
        console.log(sql,"\n",nm);
        console.log(res.rows[0], sql); 
        Inventory = res.rows[0].id; 
        console.log(inventory[name]);
        pool.end() 
    })
    return apiResponses._200(inventory[name]);
};
    const apiResponses = {
        _200: (body: {[key:string]: any}) => {
            console.log(body)
            return {
                statusCode: 200,
                body: JSON.stringify(body, null, 2)
            };
        },
        
        _400: (body: {[key:string]: any}) => {
            return {
                statusCode: 400,
                body: JSON.stringify(body, null, 2)
            };
        }
    }


interface Inventory {
    id : string;
    name: string;
    description: string;
    createdBy: string;
    createDateTime: string;
    updatedBy: string;
    updatedDateTime: string;
}

const inventory: { [key: string]:Inventory } = {
    cement: {
        id: 'za',
        createdBy: 'random',
        createDateTime: 'random',
        updatedBy: 'random',
        updatedDateTime: 'random',
        name: 'cement',
        description:
            'New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park. Broadway theater is staged in neon-lit Times Square.',
    },
}

