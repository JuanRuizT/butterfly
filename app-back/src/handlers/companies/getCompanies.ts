import {APIGatewayProxyHandler} from 'aws-lambda';
import {Company} from '../../models';
import commonMiddleware from '../../lib/commonMiddleware';
import {getCompanies} from '../../services/companyService';

const response: APIGatewayProxyHandler = async () => {
	const companies: Company[] = await getCompanies();

	return {
		statusCode: 200,
		body: JSON.stringify(companies)
	};
};

export const handler = commonMiddleware(response);
