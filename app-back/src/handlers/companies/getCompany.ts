import {APIGatewayProxyHandler, APIGatewayProxyEvent} from 'aws-lambda';
import {Company} from '../../models';
import commonMiddleware from '../../lib/commonMiddleware';
import {getCompany} from '../../services/companyService';

const response: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent) => {
	const {id} = event.pathParameters;
	const company: Company = await getCompany(id);

	return {
		statusCode: 200,
		body: JSON.stringify(company)
	};
};

export const handler = commonMiddleware(response);
