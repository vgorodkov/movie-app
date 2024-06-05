import React from 'react';

import {Typography} from '../Typography';
import {TypographyVariant} from '../Typography/types';
import {ToastContainer} from './styles';

export interface ToastProps {
  content: string;
}

export const Toast = ({content}: {content: string}) => {
  return (
    <ToastContainer>
      <Typography color="black" variant={TypographyVariant.LABEL_LARGE}>
        {content}
      </Typography>
    </ToastContainer>
  );
};
