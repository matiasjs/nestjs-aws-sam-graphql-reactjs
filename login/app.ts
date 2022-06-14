import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

import { sign, Secret } from 'jsonwebtoken';

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */

export const lambdaHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    console.log('EVENT', event);
    let response: APIGatewayProxyResult;

    const payload = { name: 'matias' };
    const secret: Secret = 'TEST_PRIVATE_SECRET_KEY';
    const token: string = sign(payload, secret);

    response = {
        statusCode: 200,
        body: JSON.stringify({
            token,
        }),
    };

    return response;
};
