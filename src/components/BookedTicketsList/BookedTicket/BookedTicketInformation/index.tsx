import React from 'react';
import {useTranslation} from 'react-i18next';

import {Typography, TypographyVariant} from '@/components/UI';

import {BookedTicketInformationProps} from './types';

export const BookedTicketInformation = ({
  movieName,
  date,
  ticketId,
}: BookedTicketInformationProps) => {
  const {t} = useTranslation('tickets');
  return (
    <>
      <Typography
        alightSelf="flex-start"
        variant={TypographyVariant.SUBTITLE_MEDIUM}>
        {movieName}
      </Typography>
      <Typography
        alightSelf="flex-start"
        variant={TypographyVariant.LABEL_MEDIUM}>
        {t('Date')}: {date}
      </Typography>
      <Typography
        alightSelf="flex-start"
        variant={TypographyVariant.LABEL_SMALL}>
        {ticketId}
      </Typography>
    </>
  );
};
