import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';

import {movieGenres} from '@/constants/movieGenres';

export interface MovieGenreState {
  selectedGenre: string;
}

const initialState: MovieGenreState = {
  selectedGenre: movieGenres[0],
};

export const movieGenreSlice = createSlice({
  name: 'movieGenre',
  initialState,
  reducers: {
    selectGenre: (state, action: PayloadAction<string>) => {
      state.selectedGenre = action.payload;
    },
  },
});

export const {selectGenre} = movieGenreSlice.actions;

export default movieGenreSlice.reducer;
