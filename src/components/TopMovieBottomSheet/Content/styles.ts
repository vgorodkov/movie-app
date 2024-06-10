import styled from 'styled-components/native';

import {Typography} from '@/components/UI';
import {spacing} from '@/constants/spacing';

export const Headline = styled(Typography)`
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${spacing.s};
`;

export const contentListContentContainerStyle = {
  gap: 32,
  paddingHorizontal: 16,
};
