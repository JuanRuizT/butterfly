import AWS from 'aws-sdk';
import createError from 'http-errors';
import {Company} from '../models';

interface DynamoDBOptions {
	region: string;
	endpoint?: string;
}

const options: DynamoDBOptions = {
	region: process.env.ENV === 'local' ? 'localhost' : process.env.AWS_REGION,
	endpoint: process.env.ENV === 'local' ? 'http://localhost:8000' : undefined
};

const tableName =
	process.env.ENV === 'local' ? process.env.COMPANIES_TABLE_NAME_LOCAL : process.env.COMPANIES_TABLE_NAME;

const dynamodb = new AWS.DynamoDB.DocumentClient(options);

export const getCompanies = async (): Promise<Company[]> => {
	let companies: Company[] = [];

	try {
		const result = await dynamodb
			.scan({
				TableName: tableName
			})
			.promise();

		companies = result.Items as Company[];
	} catch (error) {
		console.log(error);
		throw new createError.InternalServerError(error);
	}

	return companies;
};

export const getCompany = async (id: string): Promise<Company> => {
	let company: Company;

	try {
		const result = await dynamodb
			.get({
				TableName: tableName,
				Key: {id}
			})
			.promise();

		company = result.Item as Company;
	} catch (error) {
		console.error(error);
		throw new createError.InternalServerError(error);
	}

	if (!company) {
		throw new createError.NotFound(`Company with ID "${id}" not found!`);
	}

	return company;
};

export const createCompany = async (company: Company): Promise<Company> => {
	try {
		await dynamodb
			.put({
				TableName: tableName,
				Item: company
			})
			.promise();
	} catch (error) {
		console.log(error);
		throw new createError.InternalServerError(error);
	}

	return company;
};

export const updateCompany = async (id: string, company: Company): Promise<Company> => {
	await getCompany(id);

	try {
		await dynamodb
			.put({
				TableName: tableName,
				Item: company
			})
			.promise();
	} catch (error) {
		console.log(error);
		throw new createError.InternalServerError(error);
	}

	return company;
};

export const deleteCompany = async (id: string): Promise<Company> => {
	const company = await getCompany(id);

	try {
		await dynamodb
			.delete({
				TableName: tableName,
				Key: {id}
			})
			.promise();
	} catch (error) {
		console.error(error);
		throw new createError.InternalServerError(error);
	}

	return company;
};
