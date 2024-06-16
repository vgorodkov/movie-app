import styled from 'styled-components/native';

import CancelIcon from '@/assets/icons/cancel.svg';
import {spacing} from '@/constants/spacing';
import {ToastStatus} from '@/store/slices/toast';

export const ToastContainer = styled.View<{status?: ToastStatus}>`
  position: absolute;
  bottom: ${spacing.sm}px;
  background-color: ${({status, theme}) => {
    switch (status) {
      case ToastStatus.SUCCESS:
        return theme.colors.success;
      case ToastStatus.ERROR:
        return theme.colors.error;
      case ToastStatus.WARNING:
        return theme.colors.warning;
      case ToastStatus.INFO:
        return theme.colors.info;
      default:
        return theme.colors.success;
    }
  }};
  width: 80%;
  align-self: center;
  justify-content: center;
  align-items: center;
  padding: ${spacing.l}px;
  border-radius: 4px;
`;

export const CloseToastIcon = styled(CancelIcon)`
  color: white;
  position: absolute;
  right: ${spacing.s}px;
  top: ${spacing.s}px;
`;
