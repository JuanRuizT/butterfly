import AWS from 'aws-sdk';
import createError from 'http-errors';
import {Result} from '../models';
import {getQuestion} from './questionService';

interface DynamoDBOptions {
	region: string;
	endpoint?: string;
}

const options: DynamoDBOptions = {
	region: process.env.ENV === 'local' ? 'localhost' : process.env.AWS_REGION,
	endpoint: process.env.ENV === 'local' ? 'http://localhost:8000' : undefined
};

const tableName = process.env.ENV === 'local' ? process.env.RESULTS_TABLE_NAME_LOCAL : process.env.RESULTS_TABLE_NAME;

const dynamodb = new AWS.DynamoDB.DocumentClient(options);

export const getResults = async (): Promise<Result[]> => {
	let results: Result[] = [];

	try {
		const result = await dynamodb
			.scan({
				TableName: tableName
			})
			.promise();

		results = result.Items as Result[];
	} catch (error) {
		console.log(error);
		throw new createError.InternalServerError(error);
	}

	return results;
};

export const getResult = async (id: string): Promise<import('../models').Result> => {
	let result: Result;

	try {
		const ans = await dynamodb
			.get({
				TableName: tableName,
				Key: {id}
			})
			.promise();

		result = ans.Item as Result;
	} catch (error) {
		console.error(error);
		throw new createError.InternalServerError(error);
	}

	if (!result) {
		throw new createError.NotFound(`Result with ID "${id}" not found!`);
	}

	return result;
};

export const getResultsByQuestionId = async (questionId: string): Promise<Result[]> => {
	await getQuestion(questionId);

	let results: Result[] = [];

	try {
		const result = await dynamodb
			.query({
				TableName: tableName,
				IndexName: 'questionId',
				KeyConditionExpression: '#questionId = :questionIdValue',
				ExpressionAttributeValues: {':questionIdValue': questionId},
				ExpressionAttributeNames: {'#questionId': 'questionId'}
			})
			.promise();
		results = result.Items as Result[];
	} catch (error) {
		console.log(error);
		throw new createError.InternalServerError(error);
	}

	return results;
};

export const createResult = async (result: Result): Promise<Result> => {
	await getQuestion(result.questionId);

	try {
		await dynamodb
			.put({
				TableName: tableName,
				Item: result
			})
			.promise();
	} catch (error) {
		console.log(error);
		throw new createError.InternalServerError(error);
	}

	return result;
};

export const updateResult = async (id: string, result: Result): Promise<Result> => {
	await getResult(id);
	await getQuestion(result.questionId);

	try {
		await dynamodb
			.put({
				TableName: tableName,
				Item: result
			})
			.promise();
	} catch (error) {
		console.log(error);
		throw new createError.InternalServerError(error);
	}

	return result;
};

export const deleteResult = async (id: string): Promise<Result> => {
	const result = await getResult(id);

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

	return result;
};
