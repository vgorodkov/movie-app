import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';

interface NumberRange {
  max: number;
  min: number;
}

export interface TopMovieFiltersState {
  year?: NumberRange;
  rating?: NumberRange;
}

const initialState: TopMovieFiltersState = {};

export const topMovieFiltersSlice = createSlice({
  name: 'topMovieFilters',
  initialState,
  reducers: {
    setYearFilter: (state, action: PayloadAction<NumberRange>) => {
      state.year = action.payload;
    },
    setRatingFilter: (state, action: PayloadAction<NumberRange>) => {
      state.rating = action.payload;
    },
  },
});

export const {setYearFilter, setRatingFilter} = topMovieFiltersSlice.actions;

export default topMovieFiltersSlice.reducer;
