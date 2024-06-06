import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';

import {imbdApi} from './apiSlices/imbdApi';
import {movieApi} from './apiSlices/movieApi';
import movieGenreReducer from './slices/movieGenre';
import ticketBookingReducer from './slices/ticketBooking';

export const store = configureStore({
  reducer: {
    movieGenre: movieGenreReducer,
    ticketBooking: ticketBookingReducer,
    [movieApi.reducerPath]: movieApi.reducer,
    [imbdApi.reducerPath]: imbdApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(movieApi.middleware)
      .concat(imbdApi.middleware),
});

setupListeners(store.dispatch);
