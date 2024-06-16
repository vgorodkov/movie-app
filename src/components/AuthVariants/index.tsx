import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

import {Button} from '@/components/UI';
import {AuthRoutes} from '@/constants/routes';
import {spacing} from '@/constants/spacing';
import {FlexContainer} from '@/styled/FlexContainer';
import {facebookSignIn} from '@/utils/facebookSignIn';
import {googleSignIn} from '@/utils/googleSignIn';
import {handleAuthError} from '@/utils/handleAuthError';

import {AUTH_VARIANTS} from './constants';
import {LogInLink} from './LogInLink';
import {AuthVariantName} from './types';

export const AuthVariants = () => {
  const navigation = useNavigation();
  const {t} = useTranslation('auth');

  const onAccountCreateBtnPress = () => {
    navigation.navigate(AuthRoutes.SIGN_UP);
  };

  const onGithubAuthBtnPress = () => {};

  const authFunctions = {
    account: onAccountCreateBtnPress,
    google: googleSignIn,
    facebook: facebookSignIn,
    github: onGithubAuthBtnPress,
  };

  const onAuthVariantPress = (name: AuthVariantName) => async () => {
    try {
      await authFunctions[name]();
    } catch (error) {
      handleAuthError(error as {code: string; message: string});
    }
  };

  return (
    <FlexContainer gap={spacing.m}>
      {AUTH_VARIANTS.map(button => {
        const {icon, backgroundColor, color, label, name} = button;
        return (
          <Button
            onPress={onAuthVariantPress(name)}
            key={label}
            icon={icon}
            backgroundColor={backgroundColor}
            color={color}>
            {t(label)}
          </Button>
        );
      })}
      <LogInLink />
    </FlexContainer>
  );
};
