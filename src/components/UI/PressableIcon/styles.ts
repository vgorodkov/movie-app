import styled from 'styled-components/native';

import {spacing} from '@/constants/spacing';

export const IconContainer = styled.Pressable<{alignSelf: string}>`
  opacity: ${props => (props.disabled ? 0.1 : 1)};
  align-self: ${props => props.alignSelf};
  padding: ${spacing.xs / 2}px;
`;
