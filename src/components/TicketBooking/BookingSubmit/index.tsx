import {useNavigation} from '@react-navigation/native';
import {nanoid} from '@reduxjs/toolkit';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';

import {Typography, TypographyVariant} from '@/components/UI';
import {SEAT_PRICE} from '@/constants/cinema';
import {BottomTabRoutes, RootRoutes} from '@/constants/routes';
import {MOCK_DATA} from '@/data/mockMovies';
import {useAppDispatch, useAppSelector} from '@/store/hooks';
import {addBookedTickets} from '@/store/slices/bookedTickets/thunk';
import {ticketBookingSelector} from '@/store/slices/ticketBooking/selectors';
import {showToast, ToastStatus} from '@/store/slices/toast';
import {FlexContainer} from '@/styled/FlexContainer';
import {BookingTicket} from '@/types/booking';
import {scheduleNotification} from '@/utils/scheduleNotification';

import {BookingSubmitButton} from './styles';

export const BookingSubmit = ({movieId}: {movieId: string}) => {
  const {t} = useTranslation('home');
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const ticketBookingInfo = useAppSelector(ticketBookingSelector);
  const [error, setError] = useState<string | null>(null);

  const movie = MOCK_DATA.results.find(movie => movie.imdbid === movieId);
  const {selectedSeats, selectedDate, selectedMovieSession} = ticketBookingInfo;
  const selectedSeatsAmount = selectedSeats.length;
  const price = selectedSeatsAmount * SEAT_PRICE;
  const isButtonActive = selectedDate && selectedSeatsAmount > 0;

  const onBookingSubmitBtnPress = async () => {
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
          movieName: movie?.title || 'Movie',
        },
      );
      navigation.navigate(RootRoutes.BOTTOM_TAB, {
        screen: BottomTabRoutes.TICKETS,
      });
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

  return (
    <>
      {error && (
        <Typography
          variant={TypographyVariant.LABEL_LARGE}
          color="red"
          alightSelf="flex-end">
          {error}
        </Typography>
      )}
      <FlexContainer flexFlow="row nowrap" justifyContent="space-between">
        <FlexContainer>
          <Typography variant={TypographyVariant.LABEL_MEDIUM}>
            {selectedSeatsAmount} {t('Seats')}
          </Typography>
          <Typography variant={TypographyVariant.SUBTITLE_LARGE}>
            {SEAT_PRICE * selectedSeatsAmount} $
          </Typography>
        </FlexContainer>
        <BookingSubmitButton
          onPress={onBookingSubmitBtnPress}
          disabled={!isButtonActive}>
          {t('Book now')}
        </BookingSubmitButton>
      </FlexContainer>
    </>
  );
};
