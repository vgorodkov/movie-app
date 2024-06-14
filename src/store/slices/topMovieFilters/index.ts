import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';

import {Range} from '@/types/common';

export interface TopMovieFiltersState {
  year?: Range<number>;
  rating?: Range<number>;
}

const initialState: TopMovieFiltersState = {};

export const topMovieFiltersSlice = createSlice({
  name: 'topMovieFilters',
  initialState,
  reducers: {
    setYearFilter: (state, action: PayloadAction<Range<number>>) => {
      state.year = action.payload;
    },
    setRatingFilter: (state, action: PayloadAction<Range<number>>) => {
      state.rating = action.payload;
    },
  },
});

export const {setYearFilter, setRatingFilter} = topMovieFiltersSlice.actions;

export default topMovieFiltersSlice.reducer;
