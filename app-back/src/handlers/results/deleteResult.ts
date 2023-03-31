import {APIGatewayProxyEvent, APIGatewayProxyHandler} from 'aws-lambda';
import commonMiddleware from '../../lib/commonMiddleware';
import {deleteResult} from '../../services/resultService';

const response: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent) => {
	const {id} = event.pathParameters;

	const deletedResult = await deleteResult(id);

	return {
		statusCode: 200,
		body: JSON.stringify(deletedResult)
	};
};

export const handler = commonMiddleware(response);
