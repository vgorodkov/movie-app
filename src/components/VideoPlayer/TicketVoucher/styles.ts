import styled from 'styled-components/native';

import {spacing} from '@/constants/spacing';

export const TicketVoucherContainer = styled.View`
  position: absolute;
  bottom: ${spacing.s}px;
  right: ${spacing.s}px;
  flex-direction: row;
  align-items: center;
  gap: ${spacing.xs}px;
  z-index: 10;
`;
