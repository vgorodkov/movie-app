import styled from 'styled-components/native';

import {spacing} from '@/constants/spacing';

export const TopFilmMoreButton = styled.Pressable`
  background-color: ${props => props.theme.colors.primary};
  align-self: flex-end;
  padding: ${spacing.s} ${spacing.sm};
  border-radius: 8px;
`;
