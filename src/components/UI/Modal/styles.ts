import styled from 'styled-components/native';

import {spacing} from '@/constants/spacing';

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ModalBackdrop = styled.Pressable`
  background-color: #00000065;
`;

export const ModalContent = styled.View`
  background-color: ${props => props.theme.colors.modalBackground};
  padding: ${spacing.m}px;
  width: 80%;
  gap: ${spacing.l}px;
`;
