import React from 'react';

import {Typography} from '@/components/UI/Typography';
import {TypographyVariant} from '@/components/UI/Typography/types';
import {spacing} from '@/constants/spacing';
import {FlexContainer} from '@/styled/FlexContainer';

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
