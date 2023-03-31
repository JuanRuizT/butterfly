import {APIGatewayProxyHandler, APIGatewayProxyEvent} from 'aws-lambda';
import {Result} from '../../models';
import commonMiddleware from '../../lib/commonMiddleware';
import {getResult} from '../../services/resultService';

const response: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent) => {
	const {id} = event.pathParameters;
	const result: Result = await getResult(id);

	return {
		statusCode: 200,
		body: JSON.stringify(result)
	};
};

export const handler = commonMiddleware(response);
