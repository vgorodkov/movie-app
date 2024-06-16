import React from 'react';

import {Typography, TypographyVariant} from '@/components/UI';

export const EmptyCommentsList = () => {
  return (
    <Typography variant={TypographyVariant.LABEL_LARGE}>
      No comments yet
    </Typography>
  );
};
