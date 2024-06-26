import styled from 'styled-components/native';

import {spacing} from '@/constants/spacing';

export const PressableAvaibleGenre = styled.Pressable<{isSelected: boolean}>`
  background-color: ${props =>
    props.isSelected ? props.theme.colors.primary : 'transparent'};

  padding: ${spacing.xs}px ${spacing.s}px;
  border-radius: 8px;
`;
