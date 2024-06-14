import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

import {spacing} from '@/constants/spacing';

export const AnimatedFlexBox = styled(Animated.View)<{
  marginLeft?: number;
  marginRight?: number;
  gap?: number;
}>`
  margin-left: ${props => `${props.marginLeft}px` || 0};
  margin-right: ${props => `${props.marginRight}px` || 0};
  gap: ${props => `${props.gap}px` || 0};
`;

export const MovieItemContainer = styled(AnimatedFlexBox)<{
  width: number;
}>`
  align-items: center;
  margin-left: ${props => `${props.marginLeft}px`};
  margin-right: ${props => `${props.marginRight}px`};
  width: ${props => `${props.width}px`};
  gap: ${spacing.s}px;
`;

export const MovieImage = styled.Image`
  width: 182px;
  height: 268px;
  border-radius: 10px;
`;
