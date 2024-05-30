import {useNavigation} from '@react-navigation/native';

import {Button} from '@/components/UI';
import {AuthRoutes} from '@/constants/routes';
import {spacing} from '@/constants/spacing';
import {FlexContainer} from '@/styled/FlexContainer';
import {facebookSignIn} from '@/utils/facebookSignIn';
import {googleSignIn} from '@/utils/googleSignIn';

import {AUTH_VARIANTS} from './constants';
import {LogInLink} from './LogInLink';

export const AuthVariants = () => {
  const navigation = useNavigation();

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

  return (
    <FlexContainer gap={spacing.m}>
      {AUTH_VARIANTS.map(button => {
        const {icon, backgroundColor, color, label, name} = button;
        return (
          <Button
            onPress={authFunctions[name]}
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
  );
};
