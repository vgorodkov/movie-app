import {TouchableOpacityProps} from 'react-native';

export interface ButtonProps extends TouchableOpacityProps {
  icon?: number;
  children: string;
  backgroundColor?: string;
  color?: string;
  iconVariant?: 'absolute' | 'relative';
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
}
