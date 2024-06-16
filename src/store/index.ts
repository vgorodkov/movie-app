import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

import {imbdApi} from './apiSlices/imbdApi';
import {movieApi} from './apiSlices/movieApi';
import bookedTicketsReducer from './slices/bookedTickets';
import movieGenreReducer from './slices/movieGenre';
import themeReducer from './slices/themeSlice';
import ticketBookingReducer from './slices/ticketBooking';
import toastReducer from './slices/toast';
import topMovieFiltersReducer from './slices/topMovieFilters';
import userReducer from './slices/user';

const rootReducer = combineReducers({
  toast: toastReducer,
  bookedTickets: bookedTicketsReducer,
  user: userReducer,
  movieGenre: movieGenreReducer,
  ticketBooking: ticketBookingReducer,
  topMovieFilters: topMovieFiltersReducer,
  theme: themeReducer,
  [movieApi.reducerPath]: movieApi.reducer,
  [imbdApi.reducerPath]: imbdApi.reducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user', 'theme'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(movieApi.middleware)
      .concat(imbdApi.middleware),
});
setupListeners(store.dispatch);
export const persistor = persistStore(store);
