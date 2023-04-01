import {v4 as uuid} from 'uuid';
import commonMiddleware from '../../lib/commonMiddleware';
import {Question} from '../../models';
import {getCompany} from '../../services/companyService';
import {createQuestion} from '../../services/questionService';

const response = async (event) => {
	const {companyId, title, content, commentPlaceHolder} = event.body;

	await getCompany(companyId);

	const question: Question = {
		id: uuid(),
		companyId,
		title,
		content,
		commentPlaceHolder
	};

	console.log(question);

	const createdQuestion = await createQuestion(question);

	return {
		statusCode: 201,
		body: JSON.stringify(createdQuestion)
	};
};

export const handler = commonMiddleware(response);
