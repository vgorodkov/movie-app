import styled from 'styled-components/native';

import {spacing} from '@/constants/spacing';

export const TopFilmMoreButton = styled.Pressable`
  background-color: ${props => props.theme.colors.primary};
  align-self: flex-end;
  padding: ${spacing.s}px ${spacing.sm}px;
  border-radius: 8px;
`;
