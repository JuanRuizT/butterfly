// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { questionsApi } from './api/questionsApi';
import { companiesApi } from './api/companiesApi';
import { resultsApi } from './api/resultsApi';
import resultsSlice from './slices/resultsSlice';

export const store = configureStore({
  reducer: {
    result: resultsSlice,
    [questionsApi.reducerPath]: questionsApi.reducer,
    [companiesApi.reducerPath]: companiesApi.reducer,
    [resultsApi.reducerPath]: resultsApi.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(questionsApi.middleware).concat(companiesApi.middleware).concat(resultsApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
