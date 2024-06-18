import React from 'react';

import {Typography, TypographyVariant} from '@/components/UI';

export const ErrorFallback = ({error}: {error: string}) => {
  return (
    <Typography alightSelf="center" variant={TypographyVariant.SUBTITLE_LARGE}>
      {error}
    </Typography>
  );
};
