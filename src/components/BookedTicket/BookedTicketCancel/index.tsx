import React from 'react';

import {Typography, TypographyVariant} from '@/components/UI';
import {FlexContainer} from '@/styled/FlexContainer';
import {BookingTicket} from '@/types/movies';

import {CancelBookingButton} from './styles';

interface BookedTicketCancelProps
  extends Pick<BookingTicket, 'seatsAmount' | 'price' | 'ticketId'> {
  cancelTicket: (ticketId: string) => void;
}

export const BookedTicketCancel = ({
  seatsAmount,
  price,
  ticketId,
  cancelTicket,
}: BookedTicketCancelProps) => {
  const handleTicketCancel = () => {
    cancelTicket(ticketId);
  };

  return (
    <FlexContainer flexFlow="row nowrap" justifyContent="space-between">
      <FlexContainer>
        <Typography
          variant={TypographyVariant.LABEL_SMALL}
          alightSelf="flex-start">
          {seatsAmount} seats
        </Typography>
        <Typography
          variant={TypographyVariant.LABEL_LARGE}
          alightSelf="flex-start">
          {price} $
        </Typography>
      </FlexContainer>
      <CancelBookingButton onPress={handleTicketCancel}>
        Cancel
      </CancelBookingButton>
    </FlexContainer>
  );
};
