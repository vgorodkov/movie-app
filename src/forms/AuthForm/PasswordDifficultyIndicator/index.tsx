import {Typography} from '@/components/UI/Typography';
import {TypographyVariant} from '@/components/UI/Typography/types';
import {getPasswordDifficulty} from '@/utils/getPasswordDifficulty';

export const PasswordDifficultyIndicator = ({password}: {password: string}) => {
  return (
    <Typography variant={TypographyVariant.LABEL_SMALL} alightSelf="flex-start">
      {getPasswordDifficulty(password)}
    </Typography>
  );
};
