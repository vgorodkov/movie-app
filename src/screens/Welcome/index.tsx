import {AppInfo} from '@/components/AppInfo';
import {AuthVariants} from '@/components/AuthVariants';
import {Studios} from '@/components/Studios';
import {spacing} from '@/constants/spacing';
import {FullscreenContainer} from '@/styled/FlexContainer';
import {Typography} from '@/styled/Typography';
import {TypographyVariant} from '@/styled/Typography/types';

export const WelcomeScreen = () => {
  return (
    <FullscreenContainer
      paddingHorizontal={spacing.m}
      justifyContent="space-between">
      <AppInfo />
      <AuthVariants />
      <Studios />
      <Typography variant={TypographyVariant.BODY_SMALL}>
        2023 Version 0.0.1
      </Typography>
    </FullscreenContainer>
  );
};
