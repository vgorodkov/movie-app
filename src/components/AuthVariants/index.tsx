import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';

import {Button} from '@/components/UI';
import {AuthRoutes} from '@/constants/routes';
import {spacing} from '@/constants/spacing';
import {FlexContainer} from '@/styled/FlexContainer';
import {facebookSignIn} from '@/utils/facebookSignIn';
import {googleSignIn} from '@/utils/googleSignIn';

import {Toast} from '../UI/Toast';
import {AUTH_VARIANTS} from './constants';
import {LogInLink} from './LogInLink';

export const AuthVariants = () => {
  const navigation = useNavigation();

  const [error, setError] = useState<null | string>(null);

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

  const onAuthVariantPress =
    (name: 'account' | 'google' | 'facebook' | 'github') => async () => {
      try {
        await authFunctions[name]();
      } catch (err) {
        if (err.code === 'auth/account-exists-with-different-credential') {
          setError(
            ' An account already exists with the same email address but different sign-in credentials',
          );
        } else {
          setError('Error with auth');
        }
        setTimeout(() => setError(null), 3000);
      }
    };

  return (
    <>
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
              {label}
            </Button>
          );
        })}
        <LogInLink />
      </FlexContainer>
      {error && <Toast content={error} />}
    </>
  );
};
