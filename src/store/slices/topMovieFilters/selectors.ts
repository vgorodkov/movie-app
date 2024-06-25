import {RootState} from '@/store/types';

export const topMovieYearFilterSelector = (state: RootState) =>
  state.topMovieFilters.year;

export const topMovieRatingFilterSelector = (state: RootState) =>
  state.topMovieFilters.rating;
