// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { questionsApi } from './api/questionsApi';
import { companiesApi } from './api/companiesApi';

export const store = configureStore({
  reducer: {
    [questionsApi.reducerPath]: questionsApi.reducer,
    [companiesApi.reducerPath]: companiesApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(questionsApi.middleware).concat(companiesApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
