import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';

import {ThemeVariant} from '@/constants/theme';

export interface ThemeState {
  selectedTheme: ThemeVariant;
}

const initialState: ThemeState = {
  selectedTheme: ThemeVariant.DARK,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    selectTheme: (state, action: PayloadAction<ThemeVariant>) => {
      state.selectedTheme = action.payload;
    },
  },
});

export const {selectTheme} = themeSlice.actions;

export default themeSlice.reducer;
