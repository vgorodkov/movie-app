import React from 'react';
import {useTranslation} from 'react-i18next';

import Clock from '@/assets/icons/clock.svg';
import {MovieGenreRow} from '@/components/Movie/MovieGenreRow';
import {Typography, TypographyVariant} from '@/components/UI';
import {spacing} from '@/constants/spacing';
import {FlexContainer} from '@/styled/FlexContainer';

import {BasicDetailsProps} from './types';

export const BasicDetails = ({genre}: BasicDetailsProps) => {
  const {t} = useTranslation('home');
  return (
    <FlexContainer justifyContent="space-between" flexFlow="row nowrap">
      <MovieGenreRow genre={genre} />
      <FlexContainer alignItems="center" gap={spacing.xs} flexFlow="row nowrap">
        <Clock width={16} height={16} />
        <Typography variant={TypographyVariant.LABEL_MEDIUM}>
          2{t('HourLabel')} 13{t('MinuteLabel')}
        </Typography>
      </FlexContainer>
    </FlexContainer>
  );
};
