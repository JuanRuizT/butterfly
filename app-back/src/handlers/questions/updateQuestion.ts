import commonMiddleware from '../../lib/commonMiddleware';
import {Question} from '../../models';
import {updateQuestion} from '../../services/questionService';

const response = async (event) => {
	const {companyId, title, content} = event.body;
	const {id} = event.pathParameters;

	const question: Question = {
		id,
		companyId,
		title,
		content
	};

	const updatedQuestion = await updateQuestion(id, question);

	return {
		statusCode: 201,
		body: JSON.stringify(updatedQuestion)
	};
};

export const handler = commonMiddleware(response);
