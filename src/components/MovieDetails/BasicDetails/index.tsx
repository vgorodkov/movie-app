import React from 'react';

import {MovieTag} from '@/components/MovieCarousel/MovieItem/styles';
import {Typography, TypographyVariant} from '@/components/UI';
import {Icon} from '@/components/UI/Icon';
import {spacing} from '@/constants/spacing';
import {FlexContainer} from '@/styled/FlexContainer';

import {BasicDetailsProps} from './types';

export const BasicDetails = ({genre}: BasicDetailsProps) => {
  return (
    <FlexContainer justifyContent="space-between" flexFlow="row nowrap">
      <FlexContainer flexFlow="row wrap" gap={spacing.sm}>
        {genre.map(item => (
          <MovieTag key={item}>
            <Typography variant={TypographyVariant.LABEL_MEDIUM}>
              {item}
            </Typography>
          </MovieTag>
        ))}
      </FlexContainer>
      <FlexContainer alignItems="center" gap={spacing.xs} flexFlow="row nowrap">
        <Icon
          width={16}
          height={16}
          source={require('@/assets/icons/clock.png')}
        />
        <Typography variant={TypographyVariant.LABEL_MEDIUM}>2h 13m</Typography>
      </FlexContainer>
    </FlexContainer>
  );
};
