import React from 'react';
import {useTranslation} from 'react-i18next';

import {MovieGenreRow} from '@/components/MovieGenreRow';
import {Icon, Typography, TypographyVariant} from '@/components/UI';
import {spacing} from '@/constants/spacing';
import {FlexContainer} from '@/styled/FlexContainer';

import {BasicDetailsProps} from './types';

export const BasicDetails = ({genre}: BasicDetailsProps) => {
  const {t} = useTranslation('home');
  return (
    <FlexContainer justifyContent="space-between" flexFlow="row nowrap">
      <MovieGenreRow genre={genre} />
      <FlexContainer alignItems="center" gap={spacing.xs} flexFlow="row nowrap">
        <Icon
          width={16}
          height={16}
          source={require('@/assets/icons/clock.png')}
        />
        <Typography variant={TypographyVariant.LABEL_MEDIUM}>
          2{t('h')} 13{t('m')}
        </Typography>
      </FlexContainer>
    </FlexContainer>
  );
};
