import type { ValidatedEventAPIGatewayProxyEvent } from '../libs/apiGateway';
import 'source-map-support/register';
import { pool } from './models/dbConfig';
import { Inventory } from './interfaces/inventory';
import schema from './models/schema'

export const handler: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event, _context) => {
  const body1 = JSON.parse(event.body); 

  if(!body1){
      return apiResponses._400({message: 'Cannot find name'})
    }
    const sql:string = `INSERT INTO "Inventory" ( "isActive", "createDateTime", "createdBy", "lastChangedDateTime", "lastChangedBy", name, description) VALUES (true, to_timestamp(${body1["createDateTime"]} / 1000.0), \'${body1["createdBy"]}\', to_timestamp(${body1["lastChangedDateTime"]} / 1000.0), \'${body1["lastChangedBy"]}\', '${body1['name']}', \'${body1['description']}\');`;
    const { rows } = await pool.query(sql);
    console.log(rows);

    return apiResponses._200(body1["createDateTime"]);
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

