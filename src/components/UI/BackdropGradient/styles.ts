import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export const BackdropGradientContainer = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 100;
`;

export const Gradient = styled(LinearGradient)`
  flex: 1;
`;
