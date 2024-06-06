import styled from 'styled-components/native';

import {spacing} from '@/constants/spacing';

export const TopFilmMoreButton = styled.Pressable`
  background-color: ${props => props.theme.colors.primary};
  align-self: flex-start;
  padding: ${spacing.xs};
  border-radius: 8px;
`;

export const StarIcon = styled.Text`
  color: yellow;
`;
