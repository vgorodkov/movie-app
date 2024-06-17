import React from 'react';

import {Avatar, Typography, TypographyVariant} from '@/components/UI';
import {spacing} from '@/constants/spacing';
import {FlexContainer} from '@/styled/FlexContainer';
import {getDaysDiffByTimestamp} from '@/utils/getDaysDiffByTimestamp';

import {Comment} from '../types';

export const MovieComment = ({author, comment, createdAt}: Comment) => {
  return (
    <FlexContainer flexFlow="row nowrap" gap={spacing.s} alignItems="center">
      <Avatar user={author} />
      <FlexContainer>
        <FlexContainer flexFlow="row nowrap" gap={spacing.s}>
          <Typography
            variant={TypographyVariant.LABEL_MEDIUM}
            alightSelf="flex-start">
            {author}
          </Typography>
          <Typography variant={TypographyVariant.BODY_SMALL}>
            {getDaysDiffByTimestamp(createdAt)}
          </Typography>
        </FlexContainer>
        <Typography
          alightSelf="flex-start"
          variant={TypographyVariant.BODY_SMALL}>
          {comment}
        </Typography>
      </FlexContainer>
    </FlexContainer>
  );
};
