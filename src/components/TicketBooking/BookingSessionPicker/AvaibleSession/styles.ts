import styled from 'styled-components/native';

import {spacing} from '@/constants/spacing';

export const MovieSessionContainer = styled.Pressable<{isActive: boolean}>`
  display: flex;
  gap: 2px;
  padding: ${spacing.s} ${spacing.sm};
  border-radius: 6px;
  background-color: #5a5a5c;
  border: ${({isActive, theme}) =>
    isActive ? `2px solid ${theme.colors.primary}` : '2px solid transparent'};
`;
