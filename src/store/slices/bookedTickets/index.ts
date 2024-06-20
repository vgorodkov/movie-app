import {createSlice} from '@reduxjs/toolkit';

import {BookingTicket} from '@/types/booking';

import {
  addBookedTickets,
  cancelBookedTickets,
  initBookedTickets,
} from './thunk';

export interface BookedTicketsState {
  isLoading: boolean;
  error: string | null;
  bookedTickets: BookingTicket[];
}

const initialState: BookedTicketsState = {
  isLoading: false,
  error: null,
  bookedTickets: [],
};

export const bookedTicketsSlice = createSlice({
  name: 'bookedTickets',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(initBookedTickets.fulfilled, (state, action) => {
        state.bookedTickets = action.payload;
        state.isLoading = false;
      })
      .addCase(initBookedTickets.pending, state => {
        state.isLoading = true;
      })
      .addCase(initBookedTickets.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
        }
        state.isLoading = false;
      })
      .addCase(addBookedTickets.fulfilled, (state, action) => {
        state.bookedTickets = action.payload;
        state.isLoading = false;
      })
      .addCase(addBookedTickets.pending, state => {
        state.isLoading = true;
      })
      .addCase(cancelBookedTickets.fulfilled, (state, action) => {
        state.bookedTickets = action.payload;
        state.isLoading = false;
      })
      .addCase(cancelBookedTickets.pending, state => {
        state.isLoading = true;
      })
      .addCase(cancelBookedTickets.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
        }
        state.isLoading = false;
      });
  },
});

export const {} = bookedTicketsSlice.actions;

export default bookedTicketsSlice.reducer;
