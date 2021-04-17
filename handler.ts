import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';

export const hello: APIGatewayProxyHandler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'HEllo world',
      input: event,
    }, null, 2)
  };
}