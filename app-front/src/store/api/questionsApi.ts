import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Question } from '../../types';
import { HOST } from '../../api.config';

export const questionsApi = createApi({
  reducerPath: 'questionsApi',
  baseQuery: fetchBaseQuery({ baseUrl: HOST }),
  endpoints: builder => ({
    getQuestions: builder.query<Question[], void>({
      query: () => 'questions'
    }),
    createQuestion: builder.mutation<Question, Partial<Question>>({
      query: question => ({
        url: 'questions',
        method: 'POST',
        body: question
      })
    }),
    updateQuestion: builder.mutation<Question, { id: string; changes: Partial<Question> }>({
      query: ({ id, changes }) => ({
        url: `questions/${id}`,
        method: 'PUT',
        body: changes
      })
    }),
    deleteQuestion: builder.mutation<{ success: boolean; id: string }, string>({
      query: id => ({
        url: `questions/${id}`,
        method: 'DELETE'
      })
    })
  })
});

export const { useGetQuestionsQuery, useCreateQuestionMutation, useUpdateQuestionMutation, useDeleteQuestionMutation } =
  questionsApi;
