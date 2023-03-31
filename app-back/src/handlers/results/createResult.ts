import {v4 as uuid} from 'uuid';
import commonMiddleware from '../../lib/commonMiddleware';
import {Result} from '../../models';
import {getQuestion} from '../../services/questionService';
import {createResult} from '../../services/resultService';

const response = async (event) => {
	const {questionId, score, comment} = event.body;

	await getQuestion(questionId);

	const result: Result = {
		id: uuid(),
		questionId,
		score,
		comment
	};

	console.log(result);

	const createdResult = await createResult(result);

	return {
		statusCode: 201,
		body: JSON.stringify(createdResult)
	};
};

export const handler = commonMiddleware(response);
