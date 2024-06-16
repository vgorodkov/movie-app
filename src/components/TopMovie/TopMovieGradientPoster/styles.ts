import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

import {spacing} from '@/constants/spacing';

export const PosterImage = styled.Image`
  width: 80%;
  height: 80%;
  object-fit: contain;
  margin: ${spacing.l}px 0;
`;

export const GradientContainer = styled(LinearGradient)`
  flex: 0.7;
  justify-content: center;
  align-items: center;
`;
