import {Button} from '@/components/UI/Button';
import {spacing} from '@/constants/spacing';
import {FlexContainer} from '@/styled/FlexContainer';
import {Typography} from '@/styled/Typography';
import {TypographyVariant} from '@/styled/Typography/types';

import {AUTH_VARIANTS} from './constants';
import {UnderlinedTypography} from './styles';

export const AuthVariants = () => {
  return (
    <FlexContainer gap={spacing.m}>
      {AUTH_VARIANTS.map(button => {
        const {icon, backgroundColor, color, label} = button;
        return (
          <Button
            key={label}
            icon={icon}
            backgroundColor={backgroundColor}
            color={color}>
            {label}
          </Button>
        );
      })}
      <FlexContainer flexFlow="row wrap" gap={spacing.xs}>
        <Typography variant={TypographyVariant.LABEL_SMALL}>
          Already has an account?
        </Typography>
        <UnderlinedTypography variant={TypographyVariant.LABEL_SMALL}>
          Login please.
        </UnderlinedTypography>
      </FlexContainer>
    </FlexContainer>
  );
};
