import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useTranslation} from 'react-i18next';

import {LoadingFallback, Typography, TypographyVariant} from '@/components/UI';
import {SEAT_PRICE} from '@/constants/cinema';
import {BottomTabRoutes, RootRoutes} from '@/constants/routes';
import {useBookingSubmit} from '@/hooks/useBookingSubmit';
import {useGetMovieInfoQuery} from '@/store/apiSlices/movieApi';
import {useAppSelector} from '@/store/hooks';
import {ticketBookingSelector} from '@/store/slices/ticketBooking/selectors';
import {FlexContainer} from '@/styled/FlexContainer';

import {BookingSubmitButton} from './styles';
import {BookingSubmitProps} from './types';

export const BookingSubmit = ({movieId}: BookingSubmitProps) => {
  const {t} = useTranslation('home');
  const {data, isLoading} = useGetMovieInfoQuery(movieId);
  const navigation = useNavigation();
  const ticketBookingInfo = useAppSelector(ticketBookingSelector);
  const {handleBookingSubmit, error} = useBookingSubmit();

  const {selectedSeats, selectedDate} = ticketBookingInfo;
  const selectedSeatsAmount = selectedSeats.length;
  const isButtonActive = selectedDate && selectedSeatsAmount > 0;

  const onBookingSubmitBtnPress = async () => {
    handleBookingSubmit(movieId, data?.title || 'Movie');
    navigation.navigate(RootRoutes.BOTTOM_TAB, {
      screen: BottomTabRoutes.TICKETS,
    });
  };

  if (isLoading) {
    return <LoadingFallback />;
  }

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
          <Typography
            testID="BookingSeatAmount"
            variant={TypographyVariant.LABEL_MEDIUM}>
            {selectedSeatsAmount} {t('Seats')}
          </Typography>
          <Typography
            testID="BookingPrice"
            variant={TypographyVariant.SUBTITLE_LARGE}>
            {SEAT_PRICE * selectedSeatsAmount} $
          </Typography>
        </FlexContainer>
        <BookingSubmitButton
          testID="BookingSubmitBtn"
          onPress={onBookingSubmitBtnPress}
          disabled={!isButtonActive}>
          {t('Book now')}
        </BookingSubmitButton>
      </FlexContainer>
    </>
  );
};
