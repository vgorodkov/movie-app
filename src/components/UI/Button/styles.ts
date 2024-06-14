import styled from 'styled-components/native';

import {spacing} from '@/constants/spacing';

export const ButtonContainer = styled.TouchableOpacity<{
  backgroundColor?: string;
}>`
  flex-direction: row;
  gap: ${spacing.s}px;
  justify-content: center;
  align-items: center;
  height: 48px;
  padding: 0 ${spacing.m}px;
  border-radius: 12px;
  background-color: ${props =>
    props.disabled
      ? 'gray'
      : props.backgroundColor || props.theme.colors.primary};
`;

export const AbsoluteButtonIcon = styled.Image`
  position: absolute;
  left: ${spacing.m}px;
`;

export const RelativeButtonIcon = styled.Image`
  width: 24px;
  height: 24px;
`;
