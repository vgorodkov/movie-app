import React, {useState} from 'react';
import {useDerivedValue, withSpring} from 'react-native-reanimated';

import {spacing} from '@/constants/spacing';
import {FlexContainer} from '@/styled/FlexContainer';

import {Typography} from '../Typography';
import {TypographyVariant} from '../Typography/types';
import {
  CONTROLLER_HEIGHT,
  CONTROLLER_WIDTH,
  SWITCH_HEIGHT,
  SWITCH_WIDTH,
} from './constants';
import {SwitchContainer, SwitchController} from './styles';
import {SwitchProps} from './types';

export const Switch = ({
  initialSwitchState = false,
  onValueChange,
}: SwitchProps) => {
  const [isOn, setIsOn] = useState(initialSwitchState);

  const onSwitchPress = () => {
    if (onValueChange) {
      onValueChange();
    }
    setIsOn(p => !p);
  };

  const switchControllerTranslateX = useDerivedValue(() => {
    if (isOn) {
      return withSpring(SWITCH_WIDTH - CONTROLLER_WIDTH);
    } else {
      return withSpring(0);
    }
  }, [isOn]);

  return (
    <FlexContainer flexFlow="row" alignItems="center" gap={spacing.xs}>
      <Typography variant={TypographyVariant.LABEL_MEDIUM}>Off</Typography>
      <SwitchContainer onPress={onSwitchPress}>
        <SwitchController
          style={{
            transform: [
              {translateY: -(CONTROLLER_HEIGHT - SWITCH_HEIGHT) / 2},
              {translateX: switchControllerTranslateX},
            ],
          }}
        />
      </SwitchContainer>
      <Typography variant={TypographyVariant.LABEL_MEDIUM}>On</Typography>
    </FlexContainer>
  );
};
