import type { ValidatedEventAPIGatewayProxyEvent } from '../libs/apiGateway';
import 'source-map-support/register';
import { pool } from './models/dbConfig';
import { Inventory } from './interfaces/inventory';
import schema from './models/schema'

export const handler: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event, _context) => {
  const name = event.pathParameters?.name;

  console.log('name is:',name)
  if(!name){
    //   return apiResponses._400({message: 'Cannot find name'})
    }
    
    const nm:string = name;
    let newIn: { [key: string]:Inventory };
    let d1 = new Date();
    console.log(Date.now())
    // const sql:string = `INSERT INTO "Inventory" ( "isActive", "createDateTime", "createdBy", "lastChangedDateTime", "lastChangedBy", name, description) VALUES (true, to_timestamp(${Date.now()} / 1000.0), \'Admin\', \'2021-04-12 10:57:50.134+05:30\', \'Admin\', \'Sand\', \'large grained\');`;
    // const { rows } = await pool.query(sql);
    // console.log(rows);

    return apiResponses._200(name);
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

