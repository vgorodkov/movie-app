import {PressableProps} from 'react-native';

import {Typography} from '@/styled/Typography';
import {TypographyVariant} from '@/styled/Typography/types';

import {ButtonContainer, ButtonIcon} from './styles';

export interface ButtonProps extends PressableProps {
  icon?: number;
  children: string;
  backgroundColor?: string;
  color?: string;
}

export const Button = ({
  icon,
  children,
  backgroundColor,
  color,
}: ButtonProps) => {
  return (
    <ButtonContainer style={{backgroundColor}}>
      {icon && <ButtonIcon source={icon} />}
      <Typography color={color} variant={TypographyVariant.LABEL_LARGE}>
        {children}
      </Typography>
    </ButtonContainer>
  );
};
