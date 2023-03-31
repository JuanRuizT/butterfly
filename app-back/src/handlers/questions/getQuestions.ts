import {APIGatewayProxyHandler} from 'aws-lambda';
import {Question} from '../../models';
import commonMiddleware from '../../lib/commonMiddleware';
import {getQuestions} from '../../services/questionService';

const response: APIGatewayProxyHandler = async () => {
	const questions: Question[] = await getQuestions();

	return {
		statusCode: 200,
		body: JSON.stringify(questions)
	};
};

export const handler = commonMiddleware(response);
