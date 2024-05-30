import React from 'react';

import {Typography, TypographyVariant} from '@/components/UI';
import {Avatar} from '@/components/UI/Avatar';
import {spacing} from '@/constants/spacing';
import {FlexContainer} from '@/styled/FlexContainer';

import {Comment} from '../types';

export const MovieComment = ({author, comment}: Comment) => {
  return (
    <FlexContainer flexFlow="row nowrap" gap={spacing.s} alignItems="center">
      <Avatar user={author} />
      <FlexContainer>
        <Typography
          variant={TypographyVariant.LABEL_MEDIUM}
          alightSelf="flex-start">
          {author}
        </Typography>
        <Typography
          alightSelf="flex-start"
          variant={TypographyVariant.BODY_SMALL}>
          {comment}
        </Typography>
      </FlexContainer>
    </FlexContainer>
  );
};
