import styled from 'styled-components/native';

import {spacing} from '@/constants/spacing';

export const ToastContainer = styled.View`
  position: absolute;
  background-color: white;
  bottom: ${spacing.l};
  z-index: 100;
  padding: ${spacing.sm} ${spacing.m};
  border-radius: 6px;
  align-self: center;
`;
