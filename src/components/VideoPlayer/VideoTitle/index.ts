import styled from 'styled-components/native';

import {Typography} from '@/components/UI/Typography';
import {spacing} from '@/constants/spacing';

export const VideoTitle = styled(Typography)`
  position: absolute;
  top: ${spacing.sm}px;
  left: ${spacing.sm}px;
  z-index: 10;
  color: white;
`;
