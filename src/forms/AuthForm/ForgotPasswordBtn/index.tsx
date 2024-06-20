import {Typography, TypographyVariant} from '@/components/UI';

export const ForgotPasswordBtn = () => {
  return (
    <Typography
      textDecoration="underline"
      variant={TypographyVariant.LABEL_SMALL}
      alightSelf="flex-end">
      Forgot password
    </Typography>
  );
};
