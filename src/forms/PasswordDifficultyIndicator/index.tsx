import {Typography, TypographyVariant} from '@/components/UI';
import {getPasswordDifficulty} from '@/utils/getPasswordDifficulty';

export const PasswordDifficultyIndicator = ({password}: {password: string}) => {
  return (
    <Typography variant={TypographyVariant.LABEL_SMALL}>
      {getPasswordDifficulty(password)}
    </Typography>
  );
};