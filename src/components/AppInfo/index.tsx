import React from 'react';
import {useTranslation} from 'react-i18next';

import {Typography, TypographyVariant} from '@/components/UI';
import {spacing} from '@/constants/spacing';
import {FlexContainer} from '@/styled/FlexContainer';

import {AppLogo} from './styles';

export const AppInfo = () => {
  const {t} = useTranslation('auth');
  return (
    <FlexContainer gap={spacing.xl}>
      <AppLogo source={require('@/assets/imgs/logo.png')} />
      <Typography variant={TypographyVariant.TITLE_LARGE}>
        {t('Motto')}
      </Typography>
    </FlexContainer>
  );
};
