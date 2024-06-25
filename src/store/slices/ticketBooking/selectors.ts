import {RootState} from '@/store/types';

export const bookingDateSelector = (state: RootState) =>
  state.ticketBooking.selectedDate;

export const bookingSessionTimeSelector = (state: RootState) =>
  state.ticketBooking.selectedMovieSession.time;

export const reservedSeatsSelector = (state: RootState) =>
  state.ticketBooking.selectedMovieSession.reservedSeats;

export const selectedSeatsAmountSelector = (state: RootState) =>
  state.ticketBooking.selectedSeats.length;

export const ticketBookingSelector = (state: RootState) => state.ticketBooking;

export const isDateSelectedSelector = (state: RootState) =>
  !!state.ticketBooking.selectedDate;

export const selectedSeatsSelector = (state: RootState) =>
  state.ticketBooking.selectedSeats;
