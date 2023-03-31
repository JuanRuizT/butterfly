import {APIGatewayProxyHandler} from 'aws-lambda';
import {Result} from '../../models';
import commonMiddleware from '../../lib/commonMiddleware';
import {getResults} from '../../services/resultService';

const response: APIGatewayProxyHandler = async () => {
	const results: Result[] = await getResults();

	return {
		statusCode: 200,
		body: JSON.stringify(results)
	};
};

export const handler = commonMiddleware(response);
