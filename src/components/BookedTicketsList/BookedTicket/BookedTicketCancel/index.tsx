import React from 'react';
import {useTranslation} from 'react-i18next';

import {Typography, TypographyVariant} from '@/components/UI';
import {useAppDispatch} from '@/store/hooks';
import {cancelBookedTickets} from '@/store/slices/bookedTickets/thunk';
import {FlexContainer} from '@/styled/FlexContainer';

import {CancelBookingButton} from './styles';
import {BookedTicketCancelProps} from './types';

export const BookedTicketCancel = ({
  seatsAmount,
  price,
  ticketId,
}: BookedTicketCancelProps) => {
  const {t} = useTranslation('tickets');
  const dispatch = useAppDispatch();
  const handleTicketCancel = () => {
    dispatch(cancelBookedTickets(ticketId));
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
