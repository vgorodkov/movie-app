import type {TextInputProps, TextProps as RNTextProps} from 'react-native';
import {AnimatedProps, SharedValue} from 'react-native-reanimated';

export interface AnimatedTextProps
  extends Omit<TextInputProps, 'value' | 'style'> {
  text: SharedValue<string>;
  style?: AnimatedProps<RNTextProps>['style'];
}
