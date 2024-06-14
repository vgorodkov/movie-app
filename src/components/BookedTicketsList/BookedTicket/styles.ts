import styled from 'styled-components/native';

import {spacing} from '@/constants/spacing';

export const BookedTicketContainer = styled.View`
  flex-flow: row nowrap;
  gap: ${spacing.s}px;
  background-color: #76767860;
  border-radius: 8px;
`;

export const BookedTicketImage = styled.Image`
  height: 100%;
  flex: 0.3;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;
