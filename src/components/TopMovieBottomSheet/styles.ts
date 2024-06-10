import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

import {spacing} from '@/constants/spacing';

export const BottomSheetContainer = styled(Animated.View)<{height: number}>`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #1e1f27;
  align-items: center;
  gap: ${spacing.sm};
  padding: ${spacing.sm};
  height: ${props => props.height}px;
`;