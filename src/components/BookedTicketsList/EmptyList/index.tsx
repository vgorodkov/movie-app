import React from 'react';
import {useTranslation} from 'react-i18next';

import {Typography, TypographyVariant} from '@/components/UI';
import {FlexContainer} from '@/styled/FlexContainer';

export const EmptyBookedList = () => {
  const {t} = useTranslation('tickets');
  return (
    <FlexContainer justifyContent="center" alignItems="center">
      <Typography variant={TypographyVariant.SUBTITLE_LARGE}>
        {t('NoTickets')}
      </Typography>
    </FlexContainer>
  );
};
