import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';

import {imbdApi} from './apiSlices/imbdApi';
import {movieApi} from './apiSlices/movieApi';
import movieGenreReducer from './slices/movieGenre';
import ticketBookingReducer from './slices/ticketBooking';
import topMovieFiltersReducer from './slices/topMovieFilters';

export const store = configureStore({
  reducer: {
    movieGenre: movieGenreReducer,
    ticketBooking: ticketBookingReducer,
    topMovieFilters: topMovieFiltersReducer,
    [movieApi.reducerPath]: movieApi.reducer,
    [imbdApi.reducerPath]: imbdApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(movieApi.middleware)
      .concat(imbdApi.middleware),
});

setupListeners(store.dispatch);
