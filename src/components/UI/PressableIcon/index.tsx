import React from 'react';
import {Image} from 'react-native';

import {IconContainer} from './styles';
import {PressableIconProps} from './types';

export const PressableIcon = ({
  icon,
  width = 24,
  height = 24,
  ...props
}: PressableIconProps) => {
  return (
    <IconContainer {...props}>
      <Image style={{width, height}} source={icon} />
    </IconContainer>
  );
};
