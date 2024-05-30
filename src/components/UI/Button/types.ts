import {PressableProps} from 'react-native';

export interface ButtonProps extends PressableProps {
  icon?: number;
  children: string;
  backgroundColor?: string;
  color?: string;
  iconVariant?: 'absolute' | 'relative';
}
