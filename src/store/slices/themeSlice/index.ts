import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';

export interface ThemeState {
  selectedTheme: 'dark' | 'light';
}

const initialState: ThemeState = {
  selectedTheme: 'dark',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    selectTheme: (state, action: PayloadAction<'dark' | 'light'>) => {
      state.selectedTheme = action.payload;
    },
  },
});

export const {selectTheme} = themeSlice.actions;

export default themeSlice.reducer;
