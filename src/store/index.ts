import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';

import {movieApi} from './apiSlices/movieApi';
import movieGenreReducer from './slices/movieGenre';

export const store = configureStore({
  reducer: {
    movieGenre: movieGenreReducer,
    [movieApi.reducerPath]: movieApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(movieApi.middleware),
});

setupListeners(store.dispatch);
