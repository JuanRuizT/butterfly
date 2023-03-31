import AWS from 'aws-sdk';
import createError from 'http-errors';
import {Question} from '../models';
import {getCompany} from './companyService';

interface DynamoDBOptions {
	region: string;
	endpoint?: string;
}

const options: DynamoDBOptions = {
	region: process.env.ENV === 'local' ? 'localhost' : process.env.AWS_REGION,
	endpoint: process.env.ENV === 'local' ? 'http://localhost:8000' : undefined
};

const tableName =
	process.env.ENV === 'local' ? process.env.QUESTIONS_TABLE_NAME_LOCAL : process.env.QUESTIONS_TABLE_NAME;

const dynamodb = new AWS.DynamoDB.DocumentClient(options);

export const getQuestions = async (): Promise<Question[]> => {
	let questions: Question[] = [];

	try {
		const result = await dynamodb
			.scan({
				TableName: tableName
			})
			.promise();

		questions = result.Items as Question[];
	} catch (error) {
		console.log(error);
		throw new createError.InternalServerError(error);
	}

	return questions;
};

export const getQuestion = async (id: string): Promise<import('../models').Question> => {
	let question: Question;

	try {
		const result = await dynamodb
			.get({
				TableName: tableName,
				Key: {id}
			})
			.promise();

		question = result.Item as Question;
	} catch (error) {
		console.error(error);
		throw new createError.InternalServerError(error);
	}

	if (!question) {
		throw new createError.NotFound(`Question with ID "${id}" not found!`);
	}

	return question;
};

export const getQuestionsByCompanyId = async (companyId: string): Promise<Question[]> => {
	await getCompany(companyId);

	let questions: Question[] = [];

	try {
		const result = await dynamodb
			.query({
				TableName: tableName,
				IndexName: 'companyId',
				KeyConditionExpression: '#companyId = :companyIdValue',
				ExpressionAttributeValues: {':companyIdValue': companyId},
				ExpressionAttributeNames: {'#companyId': 'companyId'}
			})
			.promise();
		questions = result.Items as Question[];
	} catch (error) {
		console.log(error);
		throw new createError.InternalServerError(error);
	}

	return questions;
};

export const createQuestion = async (question: Question): Promise<Question> => {
	await getCompany(question.companyId);

	try {
		await dynamodb
			.put({
				TableName: tableName,
				Item: question
			})
			.promise();
	} catch (error) {
		console.log(error);
		throw new createError.InternalServerError(error);
	}

	return question;
};

export const updateQuestion = async (id: string, question: Question): Promise<Question> => {
	await getQuestion(id);
	await getCompany(question.companyId);

	try {
		await dynamodb
			.put({
				TableName: tableName,
				Item: question
			})
			.promise();
	} catch (error) {
		console.log(error);
		throw new createError.InternalServerError(error);
	}

	return question;
};

export const deleteQuestion = async (id: string): Promise<Question> => {
	const question = await getQuestion(id);

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

	return question;
};
