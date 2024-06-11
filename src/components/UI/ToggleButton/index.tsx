import React, {useState} from 'react';

import {TypographyVariant} from '../Typography/types';
import {ToggleButtonContainer, ToggleButtonLabel} from './styles';

interface ToggleButtonSide {
  label: string;
  color: string;
  backgroundColor: string;
  onPress: () => void;
}

interface ToggleButtonProps {
  left: ToggleButtonSide;
  right: ToggleButtonSide;
}

export const ToggleButton = ({left, right}: ToggleButtonProps) => {
  const [activeSide, setActiveSide] = useState('right');

  const onLeftSidePress = () => {
    setActiveSide('left');
    left.onPress();
  };

  const onRightSidePress = () => {
    setActiveSide('right');
    right.onPress();
  };

  return (
    <ToggleButtonContainer>
      <ToggleButtonLabel
        onPress={onLeftSidePress}
        isActive={activeSide === 'left'}
        side="left"
        style={{
          backgroundColor: left.backgroundColor,
          color: left.color,
        }}
        variant={TypographyVariant.LABEL_LARGE}>
        {left.label}
      </ToggleButtonLabel>
      <ToggleButtonLabel
        onPress={onRightSidePress}
        isActive={activeSide === 'right'}
        side="right"
        style={{backgroundColor: right.backgroundColor, color: right.color}}
        variant={TypographyVariant.LABEL_LARGE}>
        {right.label}
      </ToggleButtonLabel>
    </ToggleButtonContainer>
  );
};
