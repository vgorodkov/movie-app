import styled from 'styled-components/native';

import {spacing} from '@/constants/spacing';

export const ButtonContainer = styled.Pressable`
  flex-direction: row;
  gap: ${spacing.s};
  justify-content: center;
  align-items: center;
  height: 48px;
  padding: 0 ${spacing.m};
  border-radius: 12px;
`;

export const AbsoluteButtonIcon = styled.Image`
  position: absolute;
  left: ${spacing.m};
`;

export const RelativeButtonIcon = styled.Image`
  width: 24px;
  height: 24px;
`;
