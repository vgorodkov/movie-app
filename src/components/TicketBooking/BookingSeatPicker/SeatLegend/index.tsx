import React from 'react';

import {Typography, TypographyVariant} from '@/components/UI';
import {spacing} from '@/constants/spacing';
import {FlexContainer} from '@/styled/FlexContainer';

import {SeatLegendIcon} from './styles';
import {SeatsLegendProps} from './types';

export const SeatLegend = ({type}: SeatsLegendProps) => {
  return (
    <FlexContainer
      flexFlow="row nowrap"
      gap={spacing.s - 2}
      alignItems="center">
      <SeatLegendIcon type={type} />
      <Typography variant={TypographyVariant.LABEL_MEDIUM}>{type}</Typography>
    </FlexContainer>
  );
};
