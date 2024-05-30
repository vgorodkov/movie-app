import React from 'react';

import {Icon} from '@/components/UI/Icon';

import {IconContainer} from './styles';
import {PressableIconProps} from './types';

export const PressableIcon = ({
  icon,
  width = 24,
  height = 24,
  alignSelf = 'center',
  ...props
}: PressableIconProps) => {
  return (
    <IconContainer alignSelf={alignSelf} {...props}>
      <Icon source={icon} width={width} height={height} />
    </IconContainer>
  );
};
