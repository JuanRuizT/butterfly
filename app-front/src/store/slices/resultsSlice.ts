import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Result } from '../../types';

interface ResultState {
  results: Result[];
}

const initialState: ResultState = {
  results: []
};

const resultSlice = createSlice({
  name: 'result',
  initialState,
  reducers: {
    getResults: (state, action: PayloadAction<Result[]>) => {
      state.results = action.payload;
    },
    addResult: (state, action: PayloadAction<Result>) => {
      state.results.push(action.payload);
    },
    updateResult: (state, action: PayloadAction<Result>) => {
      const { id } = action.payload;
      const existingResult = state.results.find(result => result.id === id);
      if (existingResult) {
        Object.assign(existingResult, action.payload);
      }
    },
    deleteResult: (state, action: PayloadAction<string>) => {
      const index = state.results.findIndex(result => result.id === action.payload);
      if (index !== -1) {
        state.results.splice(index, 1);
      }
    },
    clearResults: state => {
      state.results = initialState.results;
    }
  }
});

export const { getResults, addResult, updateResult, deleteResult, clearResults } = resultSlice.actions;

export default resultSlice.reducer;
