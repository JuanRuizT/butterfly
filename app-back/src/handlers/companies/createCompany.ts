import {v4 as uuid} from 'uuid';
import {Company} from '../../models';
import commonMiddleware from '../../lib/commonMiddleware';
import {createCompany} from '../../services/companyService';

const response = async (event) => {
	const {name} = event.body;

	const company: Company = {
		id: uuid(),
		name
	};

	const createdCompany = await createCompany(company);

	return {
		statusCode: 201,
		body: JSON.stringify(createdCompany)
	};
};

export const handler = commonMiddleware(response);
