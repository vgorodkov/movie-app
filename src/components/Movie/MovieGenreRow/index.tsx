import React from 'react';
import {useTheme} from 'styled-components';

import {Typography, TypographyVariant} from '@/components/UI';
import {spacing} from '@/constants/spacing';
import {FlexContainer} from '@/styled/FlexContainer';

import {MovieGenre} from './styles';
import {MovieGenreRowProps} from './types';

export const MovieGenreRow = ({genre}: MovieGenreRowProps) => {
  const theme = useTheme();
  return (
    <FlexContainer
      flexFlow="row nowrap"
      justifyContent="center"
      gap={spacing.s}>
      {genre.map(item => (
        <MovieGenre key={item}>
          <Typography
            color={theme.colors.onPrimary}
            variant={TypographyVariant.LABEL_MEDIUM}>
            {item}
          </Typography>
        </MovieGenre>
      ))}
    </FlexContainer>
  );
};
