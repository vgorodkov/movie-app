import {createSlice} from '@reduxjs/toolkit';

export interface NotificationsState {
  isTurnedOn: boolean;
}

const initialState: NotificationsState = {
  isTurnedOn: true,
};

export const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    turnOff: state => {
      state.isTurnedOn = false;
    },
    turnOn: state => {
      state.isTurnedOn = true;
    },
  },
});

export const {turnOff, turnOn} = notificationsSlice.actions;

export default notificationsSlice.reducer;
