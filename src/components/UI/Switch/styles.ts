import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

import {
  CONTROLLER_HEIGHT,
  CONTROLLER_WIDTH,
  SWITCH_HEIGHT,
  SWITCH_WIDTH,
} from './constants';

export const SwitchContainer = styled.Pressable`
  width: ${SWITCH_WIDTH}px;
  height: ${SWITCH_HEIGHT}px;
  background-color: white;
  border-radius: 16px;
`;

export const SwitchController = styled(Animated.View)`
  border: 1px solid black;
  width: ${CONTROLLER_WIDTH}px;
  height: ${CONTROLLER_HEIGHT}px;
  background-color: lightblue;
  border-radius: 100px;
`;
