import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

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
  margin-left: ${props => `${props.marginLeft}px`};
  margin-right: ${props => `${props.marginRight}px`};
  width: ${props => `${props.width}px`};
  gap: 8px;
`;

export const MovieImage = styled.Image`
  width: 100%;
  height: 80%;
  border-radius: 10px;
`;

export const MovieTag = styled.View`
  padding: 2px 4px;
  border-radius: 5px;
  background-color: #484747;
`;
