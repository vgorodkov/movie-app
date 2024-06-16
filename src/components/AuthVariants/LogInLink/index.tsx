import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

import {Typography, TypographyVariant} from '@/components/UI';
import {AuthRoutes} from '@/constants/routes';
import {spacing} from '@/constants/spacing';
import {FlexContainer} from '@/styled/FlexContainer';

export const LogInLink = () => {
  const navigation = useNavigation();
  const {t} = useTranslation('auth');

  const onLoginBtnPress = () => {
    navigation.navigate(AuthRoutes.SIGN_IN);
  };

  return (
    <FlexContainer flexFlow="row wrap" gap={spacing.xs}>
      <Typography variant={TypographyVariant.LABEL_SMALL}>
        {t('AlreadyHasAccount')}
      </Typography>
      <Typography
        textDecoration="underline"
        onPress={onLoginBtnPress}
        variant={TypographyVariant.LABEL_SMALL}>
        {t('LoginPlease')}
      </Typography>
    </FlexContainer>
  );
};
