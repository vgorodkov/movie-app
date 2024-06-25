import React from 'react';

import {Typography, TypographyVariant} from '@/components/UI';
import {spacing} from '@/constants/spacing';
import {FlexContainer} from '@/styled/FlexContainer';

import {DescriptionProps} from './types';

export const Description = ({title, synopsis}: DescriptionProps) => {
  return (
    <FlexContainer gap={spacing.sm}>
      <Typography
        alightSelf="flex-start"
        variant={TypographyVariant.TITLE_SMALL}>
        {title}
      </Typography>
      <Typography
        alightSelf="flex-start"
        variant={TypographyVariant.BODY_MEDIUM}>
        {synopsis}
      </Typography>
    </FlexContainer>
  );
};
