import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Company } from '../../types';
import { HOST } from '../../api.config';

export const companiesApi = createApi({
  reducerPath: 'companyApi',
  baseQuery: fetchBaseQuery({ baseUrl: HOST }),
  endpoints: builder => ({
    getCompanies: builder.query<Company[], void>({
      query: () => '/companies'
    }),
    getCompanyById: builder.query<Company, string>({
      query: id => `/companies/${id}`
    }),
    createCompany: builder.mutation<Company, Omit<Company, 'id'>>({
      query: company => ({
        url: '/companies',
        method: 'POST',
        body: company
      })
    }),
    updateCompany: builder.mutation<Company, Partial<Company>>({
      query: ({ id, ...partialCompany }) => ({
        url: `/companies/${id}`,
        method: 'PUT',
        body: partialCompany
      })
    }),
    deleteCompany: builder.mutation<void, string>({
      query: id => ({
        url: `/companies/${id}`,
        method: 'DELETE'
      })
    })
  })
});

export const {
  useGetCompaniesQuery,
  useGetCompanyByIdQuery,
  useCreateCompanyMutation,
  useUpdateCompanyMutation,
  useDeleteCompanyMutation
} = companiesApi;
