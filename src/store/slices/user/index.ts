import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';

import {User} from '@/types/user';

export interface UserState {
  currentUser: null | User;
}

const initialState: UserState = {
  currentUser: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
    },
    updateUser: (state, action: PayloadAction<Partial<User>>) => {
      const updatedUser = {
        ...state.currentUser,
        ...action.payload,
      };
      state.currentUser = updatedUser;
    },
    deleteUser: state => {
      state.currentUser = null;
    },
  },
});

export const {setUser, updateUser, deleteUser} = userSlice.actions;

export default userSlice.reducer;
