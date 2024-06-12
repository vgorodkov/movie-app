import React from 'react';
import {useTranslation} from 'react-i18next';

import {Typography, TypographyVariant} from '@/components/UI';

import {TicketVoucherContainer, TicketVoucherIcon} from './styles';

export const TicketVoucher = () => {
  const {t} = useTranslation('home');
  return (
    <TicketVoucherContainer>
      <TicketVoucherIcon
        source={require('@/assets/icons/ticket-voucher.png')}
      />
      <Typography color="white" variant={TypographyVariant.LABEL_LARGE}>
        {t('Tickets avaible')}
      </Typography>
    </TicketVoucherContainer>
  );
};
