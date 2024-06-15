import React from 'react';

import {Typography, TypographyVariant} from '@/components/UI';
import {spacing} from '@/constants/spacing';
import {FlexContainer} from '@/styled/FlexContainer';

import {SeatLegendIcon} from './styles';
import {SeatsLegendProps} from './types';

export const SeatLegend = ({
  borderColor = 'transparent',
  backgroundColor = 'transparent',
  label,
}: SeatsLegendProps) => {
  return (
    <FlexContainer
      flexFlow="row nowrap"
      gap={spacing.s - 2}
      alignItems="center">
      <SeatLegendIcon
        backgroundColor={backgroundColor}
        borderColor={borderColor}
      />
      <Typography variant={TypographyVariant.LABEL_MEDIUM}>{label}</Typography>
    </FlexContainer>
  );
};
