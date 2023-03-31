import {APIGatewayProxyEvent, APIGatewayProxyHandler} from 'aws-lambda';
import {deleteQuestion} from '../../services/questionService';
import commonMiddleware from '../../lib/commonMiddleware';

const response: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent) => {
	const {id} = event.pathParameters;

	const deletedQuestion = await deleteQuestion(id);

	return {
		statusCode: 200,
		body: JSON.stringify(deletedQuestion)
	};
};

export const handler = commonMiddleware(response);
