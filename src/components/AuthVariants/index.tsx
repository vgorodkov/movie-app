import {isErrorWithCode} from '@react-native-google-signin/google-signin';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

import {Button} from '@/components/UI';
import {AuthRoutes} from '@/constants/routes';
import {spacing} from '@/constants/spacing';
import {useHandleError} from '@/hooks/useHandleError';
import {FlexContainer} from '@/styled/FlexContainer';
import {facebookSignIn} from '@/utils/facebookSignIn';
import {googleSignIn} from '@/utils/googleSignIn';

import {AUTH_VARIANTS} from './constants';
import {LogInLink} from './LogInLink';
import {AuthVariantName} from './types';

export const AuthVariants = () => {
  const navigation = useNavigation();
  const showErrorToast = useHandleError();
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
      if (isErrorWithCode(error)) {
        showErrorToast(error.code);
      } else {
        showErrorToast('An Error occured during auth');
      }
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
