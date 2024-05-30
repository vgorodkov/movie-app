import {PressableProps} from 'react-native';

export interface PressableIconProps extends PressableProps {
  icon: number;
  width?: number;
  height?: number;
  alignSelf?: string;
}
