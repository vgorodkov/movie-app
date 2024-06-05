import {RootState} from '@/store/types';

export const bookingDateSelector = (state: RootState) =>
  state.ticketBooking.selectedDate;

export const isBookingSessionSelected =
  (sessionTime: string) => (state: RootState) =>
    state.ticketBooking.selectedMovieSession.time === sessionTime;

export const reservedSeatsSelector = (state: RootState) =>
  state.ticketBooking.selectedMovieSession.reservedSeats;

export const selectedSeatsAmountSelector = (state: RootState) =>
  state.ticketBooking.selectedSeats.length;

export const ticketBookingSelector = (state: RootState) => state.ticketBooking;

export const isDateSelectedSelector = (state: RootState) =>
  !!state.ticketBooking.selectedDate;
