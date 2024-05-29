import {RootState} from '@/store/types';

export const selectSelectedMovieGenre = (state: RootState) =>
  state.movieGenre.selectedGenre;
