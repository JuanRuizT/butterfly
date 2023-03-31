import {APIGatewayProxyEvent, APIGatewayProxyHandler} from 'aws-lambda';
import commonMiddleware from '../../lib/commonMiddleware';
import {getResultsByQuestionId} from '../../services/resultService';

const response: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent) => {
	const {id: questionId} = event.pathParameters;

	const questions = await getResultsByQuestionId(questionId);

	return {
		statusCode: 200,
		body: JSON.stringify(questions)
	};
};

export const handler = commonMiddleware(response);
