import React from 'react';
import {useTranslation} from 'react-i18next';

import TicketVoucherIcon from '@/assets/icons/ticket-voucher.svg';
import {Typography, TypographyVariant} from '@/components/UI';

import {TicketVoucherContainer} from './styles';

export const TicketVoucher = () => {
  const {t} = useTranslation('home');
  return (
    <TicketVoucherContainer>
      <TicketVoucherIcon width={24} height={24} />
      <Typography color="white" variant={TypographyVariant.LABEL_LARGE}>
        {t('Tickets avaible')}
      </Typography>
    </TicketVoucherContainer>
  );
};
