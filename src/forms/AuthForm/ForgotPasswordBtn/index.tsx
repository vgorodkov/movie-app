import {Typography, TypographyVariant} from '@/components/UI';

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
