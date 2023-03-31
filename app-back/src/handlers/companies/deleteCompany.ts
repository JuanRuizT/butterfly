import {APIGatewayProxyEvent, APIGatewayProxyHandler} from 'aws-lambda';
import {Company} from '../../models';
import commonMiddleware from '../../lib/commonMiddleware';
import {deleteCompany} from '../../services/companyService';

const response: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent) => {
	const {id} = event.pathParameters;

	const deletedCompany: Company = await deleteCompany(id);

	return {
		statusCode: 200,
		body: JSON.stringify(deletedCompany)
	};
};

export const handler = commonMiddleware(response);
