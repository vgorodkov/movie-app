import styled from 'styled-components/native';

import {spacing} from '@/constants/spacing';

export const MovieSessionContainer = styled.Pressable<{isActive: boolean}>`
  display: flex;
  gap: 2px;
  padding: ${spacing.s}px ${spacing.sm}px;
  border-radius: 6px;
  background-color: ${props => props.theme.colors.border};
  border: ${({isActive, theme}) =>
    isActive ? `2px solid ${theme.colors.primary}` : '2px solid transparent'};
`;
