import styled from 'styled-components/native';

import {Typography} from '@/components/UI';
import {spacing} from '@/constants/spacing';

export const Headline = styled(Typography)`
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${spacing.s}px;
`;

export const contentListContentContainerStyle = {
  gap: spacing.l,
  paddingHorizontal: spacing.sm,
};
