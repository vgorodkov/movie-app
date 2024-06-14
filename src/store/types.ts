import {createAsyncThunk} from '@reduxjs/toolkit';

import {store} from '.';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

type ThunkApiConfig = {
  state: RootState;
  dispatch: AppDispatch;
  rejectValue: string;
  extra: any;
};

export const createAppAsyncThunk = createAsyncThunk.withTypes<ThunkApiConfig>();
