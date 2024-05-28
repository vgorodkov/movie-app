import {Typography} from '@/components/UI/Typography';
import {TypographyVariant} from '@/components/UI/Typography/types';

export const ForgotPasswordBtn = () => {
  const onForgotPasswordBtnPress = () => {};
  return (
    <Typography
      onPress={onForgotPasswordBtnPress}
      textDecoration="underline"
      variant={TypographyVariant.LABEL_SMALL}
      alightSelf="flex-end">
      Forgot password
    </Typography>
  );
};
