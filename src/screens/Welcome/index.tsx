import {AppInfo} from '@/components/AppInfo';
import {AuthVariants} from '@/components/AuthVariants';
import {Studios} from '@/components/Studios';
import {Typography} from '@/components/UI/Typography';
import {TypographyVariant} from '@/components/UI/Typography/types';
import {spacing} from '@/constants/spacing';
import {FullscreenContainer} from '@/styled/FlexContainer';

export const WelcomeScreen = () => {
  return (
    <FullscreenContainer
      paddingHorizontal={spacing.m}
      paddingVertical={spacing.l}
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
