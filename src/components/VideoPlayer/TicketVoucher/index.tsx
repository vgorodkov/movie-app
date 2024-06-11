import React from 'react';

import {Typography} from '@/components/UI/Typography';
import {TypographyVariant} from '@/components/UI/Typography/types';

import {TicketVoucherContainer, TicketVoucherIcon} from './styles';

export const TicketVoucher = () => {
  return (
    <TicketVoucherContainer>
      <TicketVoucherIcon
        source={require('@/assets/icons/ticket-voucher.png')}
      />
      <Typography color="white" variant={TypographyVariant.LABEL_LARGE}>
        Tickets Avaible
      </Typography>
    </TicketVoucherContainer>
  );
};
