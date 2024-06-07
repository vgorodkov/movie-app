import React, {useEffect} from 'react';

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
  const dispatch = useAppDispatch();
  const isDateSelected = useAppSelector(isDateSelectedSelector);

  const {imageurl, title} = route.params;

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
          Select date first
        </Typography>
      )}
      <BookingSubmit imageUrl={imageurl} title={title} />
    </FullscreenContainer>
  );
};
