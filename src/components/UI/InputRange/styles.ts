import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

export const RangeContainer = styled.View`
  height: 4px;
  width: 100%;
  background-color: white;
`;

export const RangeBar = styled(Animated.View)`
  height: 4px;
  background-color: orange;
`;
