import styled from 'styled-components/native';

import {spacing} from '@/constants/spacing';
import {FullscreenContainer} from '@/styled/FlexContainer';

export const WelcomeScreenContainer = styled(FullscreenContainer)`
  padding: ${spacing.l}px ${spacing.m}px;
  justify-content: space-between;
`;
