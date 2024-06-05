import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';

import {movieSessions} from '@/data/mockMovieSessions';
import {MovieSession} from '@/types/movies';

export interface TicketBookingState {
  selectedDate?: string;
  selectedMovieSession: MovieSession;
  selectedSeats: number[];
}

const initialState: TicketBookingState = {
  selectedMovieSession: movieSessions[0],
  selectedSeats: [],
};

export const ticketBookingSlice = createSlice({
  name: 'ticketBooking',
  initialState,
  reducers: {
    selectDate: (state, action: PayloadAction<string>) => {
      state.selectedDate = action.payload;
    },
    selectMovieSession: (state, action: PayloadAction<MovieSession>) => {
      state.selectedMovieSession = action.payload;
    },
    selectSeat: (state, action: PayloadAction<number>) => {
      state.selectedSeats.push(action.payload);
    },
    unselectSeat: (state, action: PayloadAction<number>) => {
      const newSeats = state.selectedSeats.filter(
        seat => seat !== action.payload,
      );
      state.selectedSeats = newSeats;
    },
    resetBookingInfo: () => {
      return initialState;
    },
    resetSelectedSeats: state => {
      state.selectedSeats = [];
    },
  },
});

export const {
  selectDate,
  selectMovieSession,
  selectSeat,
  unselectSeat,
  resetBookingInfo,
  resetSelectedSeats,
} = ticketBookingSlice.actions;

export default ticketBookingSlice.reducer;
