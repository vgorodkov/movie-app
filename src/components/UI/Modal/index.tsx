import React from 'react';
import {StyleSheet} from 'react-native';

import ExitIcon from '@/assets/icons/cancel.svg';
import {spacing} from '@/constants/spacing';
import {FlexContainer} from '@/styled/FlexContainer';

import {Typography} from '../Typography';
import {TypographyVariant} from '../Typography/types';
import {ModalBackdrop, ModalContainer, ModalContent} from './styles';
import {ModalProps} from './types';

export const Modal = ({
  children,
  onBackdropPress,
  title,
  gap = spacing.l,
}: ModalProps) => {
  return (
    <ModalContainer>
      <ModalBackdrop
        style={StyleSheet.absoluteFill}
        onPress={onBackdropPress}
      />
      <ModalContent style={{gap: gap}}>
        {title && (
          <FlexContainer flexFlow="row nowrap" justifyContent="space-between">
            <Typography variant={TypographyVariant.SUBTITLE_MEDIUM}>
              {title}
            </Typography>
            <ExitIcon color="white" onPress={onBackdropPress} />
          </FlexContainer>
        )}
        {children}
      </ModalContent>
    </ModalContainer>
  );
};
