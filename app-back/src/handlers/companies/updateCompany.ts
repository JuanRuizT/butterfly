import {Company} from '../../models';
import commonMiddleware from '../../lib/commonMiddleware';
import {updateCompany} from '../../services/companyService';

const response = async (event) => {
	const {name} = event.body;

	const {id} = event.pathParameters;

	const company: Company = {
		id,
		name
	};

	const updatedCompany = await updateCompany(id, company);

	return {
		statusCode: 201,
		body: JSON.stringify(updatedCompany)
	};
};

export const handler = commonMiddleware(response);
