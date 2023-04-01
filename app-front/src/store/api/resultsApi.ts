import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Result } from '../../types';
import { HOST } from '../../api.config';

export const resultsApi = createApi({
  reducerPath: 'resultApi',
  baseQuery: fetchBaseQuery({ baseUrl: HOST }),
  endpoints: builder => ({
    getResults: builder.query<Result[], void>({
      query: () => '/results'
    }),
    getResultById: builder.query<Result, string>({
      query: id => `/results/${id}`
    }),
    createResult: builder.mutation<Result, Omit<Result, 'id'>>({
      query: result => ({
        url: '/results',
        method: 'POST',
        body: result
      })
    }),
    updateResult: builder.mutation<Result, Partial<Result>>({
      query: ({ id, ...partialResult }) => ({
        url: `/results/${id}`,
        method: 'PUT',
        body: partialResult
      })
    }),
    deleteResult: builder.mutation<void, string>({
      query: id => ({
        url: `/results/${id}`,
        method: 'DELETE'
      })
    })
  })
});

export const {
  useGetResultsQuery,
  useGetResultByIdQuery,
  useCreateResultMutation,
  useUpdateResultMutation,
  useDeleteResultMutation
} = resultsApi;
