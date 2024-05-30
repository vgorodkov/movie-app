import React from 'react';

import {Typography, TypographyVariant} from '@/components/UI';
import {spacing} from '@/constants/spacing';
import {FlexContainer} from '@/styled/FlexContainer';

import {MovieGenre} from './styles';

export const MovieGenreRow = ({genre}: {genre: string[]}) => {
  return (
    <FlexContainer
      flexFlow="row nowrap"
      justifyContent="center"
      gap={spacing.s}>
      {genre.map(item => (
        <MovieGenre key={item}>
          <Typography variant={TypographyVariant.LABEL_MEDIUM}>
            {item}
          </Typography>
        </MovieGenre>
      ))}
    </FlexContainer>
  );
};
