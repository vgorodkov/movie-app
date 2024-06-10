import React, {useRef} from 'react';
import {Dimensions, PanResponder} from 'react-native';
import {
  clamp,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import {spacing} from '@/constants/spacing';
import {FlexContainer} from '@/styled/FlexContainer';

import {Typography} from '../Typography';
import {TypographyVariant} from '../Typography/types';
import {Controller} from './Controller';
import {RangeBar, RangeContainer} from './styles';

interface InputRangeProps {
  min: number;
  max: number;
  title: string;
  onValueChange?: ({min, max}: {min: string; max: string}) => void;
}
const {width} = Dimensions.get('window');
//modal = 80% + modalPadding = 24
const inputRangeWidth = width * 0.8 - 48;
const minControllerSeparation = 12;
export const InputRange = ({
  max,
  min,
  title,
  onValueChange,
}: InputRangeProps) => {
  const leftControllerScale = useSharedValue(1);
  const leftControllerStartX = useSharedValue(0);
  const leftControllerTranslateX = useSharedValue(0);
  const rightControllerScale = useSharedValue(1);
  const rightControllerStartX = useSharedValue(inputRangeWidth);
  const rightControllerTranslateX = useSharedValue(inputRangeWidth);

  const firstControllerValue = useDerivedValue(() => {
    const range = max - min;
    const normalizedRange = inputRangeWidth - minControllerSeparation;
    const leftControllerValue =
      min + (leftControllerTranslateX.value / normalizedRange) * range;
    return Math.round(leftControllerValue).toString();
  });

  const secondControllerValue = useDerivedValue(() => {
    const range = max - min;
    const normalizedRange = inputRangeWidth - minControllerSeparation;
    const rightControllerValue =
      min +
      ((rightControllerTranslateX.value - minControllerSeparation) /
        normalizedRange) *
        range; // Adjusted right controller position
    return Math.round(rightControllerValue).toString();
  });

  const rangeWidth = useDerivedValue(() => {
    return rightControllerTranslateX.value - leftControllerTranslateX.value;
  });

  const leftController = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        leftControllerScale.value = withSpring(1.4);
      },
      onPanResponderMove: (_, gestureState) => {
        const {dx} = gestureState;

        leftControllerTranslateX.value = clamp(
          leftControllerStartX.value + dx,
          0,
          rightControllerTranslateX.value - minControllerSeparation,
        );
      },
      onPanResponderRelease: (_, gestureState) => {
        const {dx} = gestureState;
        leftControllerStartX.value = leftControllerStartX.value + dx;
        leftControllerScale.value = withSpring(1);
        if (onValueChange) {
          onValueChange({
            min: firstControllerValue.value,
            max: secondControllerValue.value,
          });
        }
      },
    }),
  ).current;

  const rightController = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant() {
        rightControllerScale.value = withSpring(1.4);
      },
      onPanResponderMove: (_, gestureState) => {
        const {dx} = gestureState;
        rightControllerTranslateX.value = clamp(
          rightControllerStartX.value + dx,
          leftControllerTranslateX.value + minControllerSeparation,
          inputRangeWidth,
        );
      },
      onPanResponderRelease: (_, gestureState) => {
        const {dx} = gestureState;
        rightControllerStartX.value = rightControllerStartX.value + dx;
        rightControllerScale.value = withSpring(1);
        if (onValueChange) {
          onValueChange({
            min: firstControllerValue.value,
            max: secondControllerValue.value,
          });
        }
      },
    }),
  ).current;

  const leftControllerAStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: leftControllerTranslateX.value,
        },
        {
          scale: leftControllerScale.value,
        },
      ],
    };
  });

  const rightControllerAStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: rightControllerTranslateX.value,
        },
        {
          scale: rightControllerScale.value,
        },
      ],
    };
  });

  return (
    <FlexContainer gap={spacing.s}>
      <Typography variant={TypographyVariant.LABEL_LARGE}>{title}</Typography>
      <RangeContainer>
        <RangeBar
          style={{
            width: rangeWidth,
            transform: [{translateX: leftControllerTranslateX}],
          }}
        />
        <Controller
          style={leftControllerAStyle}
          {...leftController.panHandlers}
          value={firstControllerValue}
        />
        <Controller
          style={rightControllerAStyle}
          {...rightController.panHandlers}
          value={secondControllerValue}
        />
      </RangeContainer>
    </FlexContainer>
  );
};
