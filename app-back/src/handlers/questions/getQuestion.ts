import {APIGatewayProxyHandler, APIGatewayProxyEvent} from 'aws-lambda';
import {Question} from '../../models';
import commonMiddleware from '../../lib/commonMiddleware';
import {getQuestion} from '../../services/questionService';

const response: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent) => {
	const {id} = event.pathParameters;
	const question: Question = await getQuestion(id);

	return {
		statusCode: 200,
		body: JSON.stringify(question)
	};
};

export const handler = commonMiddleware(response);
