import styled from 'styled-components/native';

import {Typography} from '@/components/UI/Typography';
import {spacing} from '@/constants/spacing';

export const VideoTitle = styled(Typography)`
  position: absolute;
  top: ${spacing.sm};
  left: ${spacing.sm};
  z-index: 10;
`;
