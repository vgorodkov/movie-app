import React from 'react';
import {useTranslation} from 'react-i18next';

import {Typography, TypographyVariant} from '@/components/UI';
import {FlexContainer} from '@/styled/FlexContainer';
import {BookingTicket} from '@/types/booking';

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
  const {t} = useTranslation('tickets');
  const handleTicketCancel = () => {
    cancelTicket(ticketId);
  };

  return (
    <FlexContainer flexFlow="row nowrap" justifyContent="space-between">
      <FlexContainer>
        <Typography
          variant={TypographyVariant.LABEL_SMALL}
          alightSelf="flex-start">
          {seatsAmount} {t('seats')}
        </Typography>
        <Typography
          variant={TypographyVariant.LABEL_LARGE}
          alightSelf="flex-start">
          {price} $
        </Typography>
      </FlexContainer>
      <CancelBookingButton onPress={handleTicketCancel}>
        {t('Cancel')}
      </CancelBookingButton>
    </FlexContainer>
  );
};
