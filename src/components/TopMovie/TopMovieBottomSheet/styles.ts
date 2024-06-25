import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

import {spacing} from '@/constants/spacing';

export const BottomSheetContainer = styled(Animated.View)<{height: number}>`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: ${props => props.theme.colors.modalBackground};
  align-items: center;
  gap: ${spacing.sm}px;
  padding: ${spacing.sm}px;
  height: ${props => props.height}px;
`;
