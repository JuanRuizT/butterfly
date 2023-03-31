import {APIGatewayProxyEvent, APIGatewayProxyHandler} from 'aws-lambda';
import commonMiddleware from '../../lib/commonMiddleware';
import {getQuestionsByCompanyId} from '../../services/questionService';

const response: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent) => {
	const {id: companyId} = event.pathParameters;

	const questions = await getQuestionsByCompanyId(companyId);

	return {
		statusCode: 200,
		body: JSON.stringify(questions)
	};
};

export const handler = commonMiddleware(response);
