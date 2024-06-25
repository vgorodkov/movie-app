import React from 'react';

import {Typography, TypographyVariant} from '@/components/UI';

import {ErrorFallbackProps} from './types';

export const ErrorFallback = ({error}: ErrorFallbackProps) => {
  return (
    <Typography alightSelf="center" variant={TypographyVariant.SUBTITLE_LARGE}>
      {error}
    </Typography>
  );
};
