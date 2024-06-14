import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';

import {imbdApi} from './apiSlices/imbdApi';
import {movieApi} from './apiSlices/movieApi';
import bookedTicketsReducer from './slices/bookedTickets';
import movieGenreReducer from './slices/movieGenre';
import themeReducer from './slices/themeSlice';
import ticketBookingReducer from './slices/ticketBooking';
import topMovieFiltersReducer from './slices/topMovieFilters';
import userReducer from './slices/user';

export const store = configureStore({
  reducer: {
    bookedTickets: bookedTicketsReducer,
    user: userReducer,
    movieGenre: movieGenreReducer,
    ticketBooking: ticketBookingReducer,
    topMovieFilters: topMovieFiltersReducer,
    theme: themeReducer,
    [movieApi.reducerPath]: movieApi.reducer,
    [imbdApi.reducerPath]: imbdApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(movieApi.middleware)
      .concat(imbdApi.middleware),
});

setupListeners(store.dispatch);
