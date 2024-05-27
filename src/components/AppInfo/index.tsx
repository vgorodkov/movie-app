import React from 'react';

import {spacing} from '@/constants/spacing';
import {FlexContainer} from '@/styled/FlexContainer';
import {Typography} from '@/styled/Typography';
import {TypographyVariant} from '@/styled/Typography/types';

import {AppLogo} from './styles';

export const AppInfo = () => {
  return (
    <FlexContainer gap={spacing.xl}>
      <AppLogo source={require('@/assets/imgs/logo.png')} />
      <Typography variant={TypographyVariant.TITLE_LARGE}>
        Great Movies in the best cinema! We care about your comfort.
      </Typography>
    </FlexContainer>
  );
};
