import {Typography} from '@/components/UI/Typography';
import {TypographyVariant} from '@/components/UI/Typography/types';

import {
  AbsoluteButtonIcon,
  ButtonContainer,
  RelativeButtonIcon,
} from './styles';
import {ButtonProps} from './types';

export const Button = ({
  icon,
  children,
  iconVariant = 'absolute',
  color,
  backgroundColor,
  ...props
}: ButtonProps) => {
  const isIconAbsolute = iconVariant === 'absolute';
  return (
    <ButtonContainer backgroundColor={backgroundColor} {...props}>
      {icon && isIconAbsolute && <AbsoluteButtonIcon source={icon} />}
      {icon && !isIconAbsolute && <RelativeButtonIcon source={icon} />}
      <Typography color={color} variant={TypographyVariant.LABEL_LARGE}>
        {children}
      </Typography>
    </ButtonContainer>
  );
};
