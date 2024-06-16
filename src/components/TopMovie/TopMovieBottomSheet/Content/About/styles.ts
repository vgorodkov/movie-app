import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

export const AnimatedDesciprtion = styled(Animated.Text)`
  color: ${props => props.theme.colors.primaryText};
`;

export const AnimatedDesciprtionContainer = styled(Animated.View)`
  overflow: hidden;
`;
