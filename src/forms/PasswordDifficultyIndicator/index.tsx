import {Typography, TypographyVariant} from '@/components/UI';
import {getPasswordDifficulty} from '@/utils/getPasswordDifficulty';

import {PasswordDifficultyIndicatorProps} from './types';

export const PasswordDifficultyIndicator = ({
  password,
}: PasswordDifficultyIndicatorProps) => {
  return (
    <Typography variant={TypographyVariant.LABEL_SMALL}>
      {getPasswordDifficulty(password)}
    </Typography>
  );
};
