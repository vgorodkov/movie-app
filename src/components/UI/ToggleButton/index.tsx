import React, {useState} from 'react';

import {TypographyVariant} from '../Typography/types';
import {ToggleButtonContainer, ToggleButtonLabel} from './styles';
import {ToggleButtonProps} from './types';

export const ToggleButton = ({
  left,
  right,
  initialSide = 'right',
}: ToggleButtonProps) => {
  const [activeSide, setActiveSide] = useState(initialSide);

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
        testID="ToggeButtonLeft"
        onPress={onLeftSidePress}
        isActive={activeSide === 'left'}
        side="left"
        variant={TypographyVariant.LABEL_LARGE}>
        {left.label}
      </ToggleButtonLabel>
      <ToggleButtonLabel
        testID="ToggeButtonRight"
        onPress={onRightSidePress}
        isActive={activeSide === 'right'}
        side="right"
        variant={TypographyVariant.LABEL_LARGE}>
        {right.label}
      </ToggleButtonLabel>
    </ToggleButtonContainer>
  );
};
