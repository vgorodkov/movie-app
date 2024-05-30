import styled from 'styled-components/native';

import {spacing} from '@/constants/spacing';

export const PressableAvaibleGenre = styled.Pressable<{isSelected: boolean}>`
  background-color: ${props => (props.isSelected ? '#D98639' : 'transparent')};
  padding: ${spacing.xs} ${spacing.s};
  border-radius: 8px;
`;
