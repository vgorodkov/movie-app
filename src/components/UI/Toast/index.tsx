import React, {useEffect} from 'react';

import {useAppDispatch, useAppSelector} from '@/store/hooks';
import {closeToast} from '@/store/slices/toast';
import {
  isToastActiveSelector,
  toastContentSelector,
  toastStatusSelector,
} from '@/store/slices/toast/selectors';

import {TypographyVariant} from '../Typography/types';
import {CloseToastIcon, ToastContainer, ToastTypography} from './styles';
import {ToastProps} from './types';

export const Toast = ({autoclose, delay}: ToastProps) => {
  const dispatch = useAppDispatch();
  const isActive = useAppSelector(isToastActiveSelector);
  const status = useAppSelector(toastStatusSelector);
  const content = useAppSelector(toastContentSelector);

  const onCloseToastIconPress = () => {
    dispatch(closeToast());
  };

  useEffect(() => {
    if (autoclose && isActive) {
      setTimeout(() => {
        dispatch(closeToast());
      }, delay);
    }
  }, [isActive, autoclose, delay, dispatch]);

  if (!isActive) {
    return null;
  }

  return (
    <ToastContainer testID="Toast" status={status}>
      <CloseToastIcon onPress={onCloseToastIconPress} />
      <ToastTypography
        testID="ToastContent"
        variant={TypographyVariant.LABEL_LARGE}>
        {content}
      </ToastTypography>
    </ToastContainer>
  );
};
