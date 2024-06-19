import {nanoid} from '@reduxjs/toolkit';
import {useState} from 'react';

import {SEAT_PRICE} from '@/constants/cinema';
import {useAppDispatch, useAppSelector} from '@/store/hooks';
import {addBookedTickets} from '@/store/slices/bookedTickets/thunk';
import {ticketBookingSelector} from '@/store/slices/ticketBooking/selectors';
import {showToast, ToastStatus} from '@/store/slices/toast';
import {BookingTicket} from '@/types/booking';
import {scheduleNotification} from '@/utils/scheduleNotification';

export const useBookingSubmit = () => {
  const dispatch = useAppDispatch();
  const ticketBookingInfo = useAppSelector(ticketBookingSelector);
  const [error, setError] = useState<string | null>(null);

  const {selectedSeats, selectedDate, selectedMovieSession} = ticketBookingInfo;
  const selectedSeatsAmount = selectedSeats.length;
  const price = selectedSeatsAmount * SEAT_PRICE;

  const handleBookingSubmit = async (movieId: string, movieName: string) => {
    const ticketId = nanoid();
    const newBooking: BookingTicket = {
      ticketId,
      movieId,
      date: selectedDate!,
      price,
      seatsAmount: selectedSeatsAmount,
    };

    try {
      dispatch(addBookedTickets(newBooking));
      await scheduleNotification(
        selectedDate!,
        selectedMovieSession.time,
        ticketId,
        {
          seatsAmount: selectedSeatsAmount,
          price,
          movieName: movieName || 'Movie',
        },
      );
      dispatch(
        showToast({
          status: ToastStatus.SUCCESS,
          content: 'Ticket was successfully booked!',
        }),
      );
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
    }
  };

  return {handleBookingSubmit, error};
};
