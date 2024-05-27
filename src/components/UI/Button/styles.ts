import styled from 'styled-components/native';

import {spacing} from '@/constants/spacing';

export const ButtonContainer = styled.Pressable`
  flex-direction: row;
  gap: ${spacing.s};
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 48px;
  padding: 0 ${spacing.sm};
  border-radius: 12px;
`;

export const ButtonIcon = styled.Image`
  position: absolute;
  left: ${spacing.m};
`;
