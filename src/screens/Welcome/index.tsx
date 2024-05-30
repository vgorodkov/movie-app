import {AppInfo} from '@/components/AppInfo';
import {AuthVariants} from '@/components/AuthVariants';
import {Studios} from '@/components/Studios';
import {Typography, TypographyVariant} from '@/components/UI';

import {WelcomeScreenContainer} from './styles';

export const WelcomeScreen = () => {
  return (
    <WelcomeScreenContainer>
      <AppInfo />
      <AuthVariants />
      <Studios />
      <Typography variant={TypographyVariant.BODY_SMALL}>
        2023 Version 0.0.1
      </Typography>
    </WelcomeScreenContainer>
  );
};
