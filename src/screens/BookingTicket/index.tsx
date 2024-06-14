import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';

import {
  BookingDatepicker,
  BookingSeatPicker,
  BookingSessionPicker,
  BookingSubmit,
} from '@/components/TicketBooking';
import {Typography, TypographyVariant} from '@/components/UI';
import {spacing} from '@/constants/spacing';
import {useAppDispatch, useAppSelector} from '@/store/hooks';
import {resetBookingInfo} from '@/store/slices/ticketBooking';
import {isDateSelectedSelector} from '@/store/slices/ticketBooking/selectors';
import {FullscreenContainer} from '@/styled/FlexContainer';

import {BookingTicketScreenProps} from './types';

export const BookingTicketScreen = ({route}: BookingTicketScreenProps) => {
  const {t} = useTranslation('home');
  const dispatch = useAppDispatch();
  const isDateSelected = useAppSelector(isDateSelectedSelector);

  const {movieId} = route.params;

  useEffect(() => {
    dispatch(resetBookingInfo());
  }, [dispatch]);

  return (
    <FullscreenContainer
      gap={spacing.sm}
      justifyContent="space-between"
      padding={spacing.m}>
      <BookingDatepicker />
      {isDateSelected ? (
        <>
          <BookingSessionPicker />
          <BookingSeatPicker />
        </>
      ) : (
        <Typography
          alightSelf="center"
          variant={TypographyVariant.SUBTITLE_LARGE}>
          {t('Select date first')}
        </Typography>
      )}
      <BookingSubmit movieId={movieId} />
    </FullscreenContainer>
  );
};
