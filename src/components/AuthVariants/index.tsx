import {isErrorWithCode} from '@react-native-google-signin/google-signin';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

import {facebookSignIn, githubSignIn, googleSignIn} from '@/api/auth';
import {Button} from '@/components/UI';
import {errorMessages} from '@/constants/errors';
import {AuthRoutes} from '@/constants/routes';
import {spacing} from '@/constants/spacing';
import {useToast} from '@/hooks/useToast';
import {FlexContainer} from '@/styled/FlexContainer';

import {AUTH_VARIANTS} from './constants';
import {LogInLink} from './LogInLink';
import {AuthVariantName} from './types';

export const AuthVariants = () => {
  const navigation = useNavigation();
  const {showErrorToast} = useToast();
  const {t} = useTranslation('auth');

  const onAccountCreateBtnPress = () => {
    navigation.navigate(AuthRoutes.SIGN_UP);
  };

  const authFunctions = {
    account: onAccountCreateBtnPress,
    google: googleSignIn,
    facebook: facebookSignIn,
    github: githubSignIn,
  };

  const onAuthVariantPress = (name: AuthVariantName) => async () => {
    try {
      await authFunctions[name]();
    } catch (error) {
      if (isErrorWithCode(error)) {
        showErrorToast(errorMessages[error.code]);
      } else {
        showErrorToast('An Error occured during auth');
      }
    }
  };

  return (
    <FlexContainer gap={spacing.m}>
      {AUTH_VARIANTS.map(({icon, backgroundColor, color, label, name}) => {
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
