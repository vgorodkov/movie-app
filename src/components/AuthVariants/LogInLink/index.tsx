import {useNavigation} from '@react-navigation/native';

import {Typography, TypographyVariant} from '@/components/UI';
import {AuthRoutes} from '@/constants/routes';
import {spacing} from '@/constants/spacing';
import {FlexContainer} from '@/styled/FlexContainer';

export const LogInLink = () => {
  const navigation = useNavigation();

  const onLoginBtnPress = () => {
    navigation.navigate(AuthRoutes.SIGN_IN);
  };

  return (
    <FlexContainer flexFlow="row wrap" gap={spacing.xs}>
      <Typography variant={TypographyVariant.LABEL_SMALL}>
        Already has an account?
      </Typography>
      <Typography
        textDecoration="underline"
        onPress={onLoginBtnPress}
        variant={TypographyVariant.LABEL_SMALL}>
        Login please.
      </Typography>
    </FlexContainer>
  );
};
