import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';

export enum ToastStatus {
  ERROR = 'Error',
  SUCCESS = 'Success',
  WARNING = 'Warning',
  INFO = 'Info',
}

export interface ToastState {
  isActive: boolean;
  content: string;
  status?: ToastStatus;
}

const initialState: ToastState = {
  isActive: false,
  content: '',
};

export const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    setIsActive: (state, action: PayloadAction<boolean>) => {
      state.isActive = action.payload;
    },
    showToast: (
      state,
      action: PayloadAction<{status: ToastStatus; content: string}>,
    ) => {
      const {status, content} = action.payload;
      state.isActive = true;
      state.status = status;
      state.content = content;
    },
    closeToast: state => {
      state.isActive = false;
    },
    setToastStatus: (state, actiion: PayloadAction<ToastStatus>) => {
      state.status = actiion.payload;
    },
  },
});

export const {setIsActive, showToast, closeToast} = toastSlice.actions;

export default toastSlice.reducer;
