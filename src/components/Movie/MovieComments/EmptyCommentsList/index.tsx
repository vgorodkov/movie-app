import React from 'react';
import {useTranslation} from 'react-i18next';

import {Typography, TypographyVariant} from '@/components/UI';

export const EmptyCommentsList = () => {
  const {t} = useTranslation('home');
  return (
    <Typography variant={TypographyVariant.LABEL_LARGE}>
      {t('NoComments')}
    </Typography>
  );
};
