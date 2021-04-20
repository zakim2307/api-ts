import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import { pool } from './models/dbConfig';
import { Inventory } from './interfaces/inventory';

export const handler: APIGatewayProxyHandler = async (event, _context) => {
  const name = event.pathParameters?.item;

  
  if(!name){
      return apiResponses._400({message: 'Cannot find name'})
    }
    
    const nm:string = name;
    let newIn: { [key: string]:Inventory };
    
    const sql:string = 'select * from "Inventory" where name=\''+nm+'\';' 
    const { rows } = await pool.query(sql);
    console.log(rows);
    const inventories:Inventory = {
        id: rows[0].id,
        name: rows[0].name,
        description: rows[0].description,
        createdBy: rows[0].createdBy,
        createDateTime: rows[0].createDateTime,
        updatedBy: rows[0].lastChangedBy, 
        updatedDateTime: rows[0].lastChangedDateTime,
    }

    return apiResponses._200(inventories);
};
    const apiResponses = {
        _200: (body: any) => {
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

