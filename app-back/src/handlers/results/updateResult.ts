import commonMiddleware from '../../lib/commonMiddleware';
import {Result} from '../../models';
import {updateResult} from '../../services/resultService';

const response = async (event) => {
	const {questionId, score, comment} = event.body;
	const {id} = event.pathParameters;

	const result: Result = {
		id,
		questionId,
		score,
		comment
	};

	const updatedResult = await updateResult(id, result);

	return {
		statusCode: 201,
		body: JSON.stringify(updatedResult)
	};
};

export const handler = commonMiddleware(response);
