import React, {useRef} from 'react';
import {PanResponder} from 'react-native';
import {
  clamp,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import {Typography, TypographyVariant} from '@/components/UI';
import {spacing} from '@/constants/spacing';
import {FlexContainer} from '@/styled/FlexContainer';

import {
  MIN_CONTROLLER_SEPARATION,
  NORMALIZED_RANGE_WIDTH,
  RANGE_WIDTH,
  SCALE_ACTIVE,
  SCALE_INACTIVE,
} from './constants';
import {Controller} from './Controller';
import {RangeBar, RangeContainer} from './styles';
import {InputRangeProps} from './types';

export const InputRange = ({
  max,
  min,
  title,
  onValueChange,
  initialMax = max,
  initialMin = min,
}: InputRangeProps) => {
  const RANGE = max - min;
  const INITIAL_MIN_NORMALIZED =
    ((initialMin - min) / RANGE) * NORMALIZED_RANGE_WIDTH;
  const INITIAL_MAX_NORMALIZED =
    MIN_CONTROLLER_SEPARATION +
    ((initialMax - min) / RANGE) * NORMALIZED_RANGE_WIDTH;

  const leftControllerScale = useSharedValue(SCALE_INACTIVE);
  const leftControllerStartX = useSharedValue(INITIAL_MIN_NORMALIZED);
  const leftControllerTranslateX = useSharedValue(INITIAL_MIN_NORMALIZED);

  const rightControllerScale = useSharedValue(SCALE_INACTIVE);
  const rightControllerStartX = useSharedValue(INITIAL_MAX_NORMALIZED);
  const rightControllerTranslateX = useSharedValue(INITIAL_MAX_NORMALIZED);

  const firstControllerValue = useDerivedValue(() => {
    const leftControllerValue =
      min + (leftControllerTranslateX.value / NORMALIZED_RANGE_WIDTH) * RANGE;
    return Math.round(leftControllerValue).toString();
  });

  const secondControllerValue = useDerivedValue(() => {
    const rightControllerValue =
      min +
      ((rightControllerTranslateX.value - MIN_CONTROLLER_SEPARATION) /
        NORMALIZED_RANGE_WIDTH) *
        RANGE;
    return Math.round(rightControllerValue).toString();
  });

  const rangeWidth = useDerivedValue(() => {
    return rightControllerTranslateX.value - leftControllerTranslateX.value;
  });

  const leftController = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        leftControllerScale.value = withSpring(SCALE_ACTIVE);
      },
      onPanResponderMove: (_, gestureState) => {
        const {dx} = gestureState;

        leftControllerTranslateX.value = clamp(
          leftControllerStartX.value + dx,
          0,
          rightControllerTranslateX.value - MIN_CONTROLLER_SEPARATION,
        );
      },
      onPanResponderRelease: (_, gestureState) => {
        const {dx} = gestureState;
        leftControllerStartX.value = leftControllerStartX.value + dx;
        leftControllerScale.value = withSpring(SCALE_INACTIVE);
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
        rightControllerScale.value = withSpring(SCALE_ACTIVE);
      },
      onPanResponderMove: (_, gestureState) => {
        const {dx} = gestureState;
        rightControllerTranslateX.value = clamp(
          rightControllerStartX.value + dx,
          leftControllerTranslateX.value + MIN_CONTROLLER_SEPARATION,
          RANGE_WIDTH,
        );
      },
      onPanResponderRelease: (_, gestureState) => {
        const {dx} = gestureState;
        rightControllerStartX.value = rightControllerStartX.value + dx;
        rightControllerScale.value = withSpring(SCALE_INACTIVE);
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
          testID={`${title}.RangeBar`}
          style={{
            width: rangeWidth,
            transform: [{translateX: leftControllerTranslateX}],
          }}
        />
        <Controller
          testID={`LeftController.${title}`}
          style={leftControllerAStyle}
          {...leftController.panHandlers}
          value={firstControllerValue}
        />
        <Controller
          testID={`RightController.${title}`}
          style={rightControllerAStyle}
          {...rightController.panHandlers}
          value={secondControllerValue}
        />
      </RangeContainer>
    </FlexContainer>
  );
};
