import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

import {AnimatedText} from '@/components/UI';

export const AnimatedControllerContainer = styled(Animated.View)`
  height: 12px;
  width: 12px;
  background-color: black;
  position: absolute;
  border: 2px solid white;
  border-radius: 100px;
  top: -4px;
`;

export const AnimatedControllerText = styled(AnimatedText)`
  position: absolute;
  height: 20px;
  padding: 0px;
  width: 40px;
  top: 10px;
  left: -15px;
  color: white;
  text-align: center;
`;
