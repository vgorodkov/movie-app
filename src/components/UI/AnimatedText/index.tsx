import React from 'react';
import {TextInput} from 'react-native';
import Animated, {useAnimatedProps} from 'react-native-reanimated';

import {styles} from './styles';
import {AnimatedTextProps} from './types';

Animated.addWhitelistedNativeProps({text: true});

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

export const AnimatedText = (props: AnimatedTextProps) => {
  const {style, text, ...rest} = props;
  const animatedProps = useAnimatedProps(() => {
    return {
      text: text.value,
    } as any;
  });
  return (
    <AnimatedTextInput
      underlineColorAndroid="transparent"
      editable={false}
      value={text.value}
      style={[styles.baseStyle, style || undefined]}
      {...rest}
      {...{animatedProps}}
    />
  );
};
