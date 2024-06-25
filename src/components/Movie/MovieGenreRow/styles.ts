import styled from 'styled-components/native';

import {spacing} from '@/constants/spacing';

export const MovieGenre = styled.View`
  padding: ${spacing.xs / 2}px ${spacing.xs}px;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.primary};
`;
