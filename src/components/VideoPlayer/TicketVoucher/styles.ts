import styled from 'styled-components/native';

import {spacing} from '@/constants/spacing';

export const TicketVoucherContainer = styled.View`
  position: absolute;
  bottom: ${spacing.s};
  right: ${spacing.s};
  flex-direction: row;
  align-items: center;
  gap: ${spacing.xs};
`;

export const TicketVoucherIcon = styled.Image`
  width: 24px;
  height: 24px;
`;
