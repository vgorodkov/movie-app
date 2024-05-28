import {PressableProps} from 'react-native';

import {Typography} from '@/components/UI/Typography';
import {TypographyVariant} from '@/components/UI/Typography/types';

import {ButtonContainer, ButtonIcon} from './styles';

export interface ButtonProps extends PressableProps {
  icon?: number;
  children: string;
  backgroundColor?: string;
  color?: string;
}

export const Button = ({icon, children, color, ...props}: ButtonProps) => {
  return (
    <ButtonContainer {...props}>
      {icon && <ButtonIcon source={icon} />}
      <Typography color={color} variant={TypographyVariant.LABEL_LARGE}>
        {children}
      </Typography>
    </ButtonContainer>
  );
};
