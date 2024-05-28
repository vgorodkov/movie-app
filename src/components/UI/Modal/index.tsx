import React from 'react';
import {StyleSheet} from 'react-native';

import {ModalBackdrop, ModalContainer, ModalContent} from './styles';
import {ModalProps} from './types';

export const Modal = ({children, onBackdropPress}: ModalProps) => {
  return (
    <ModalContainer>
      <ModalBackdrop
        style={StyleSheet.absoluteFill}
        onPress={onBackdropPress}
      />
      <ModalContent>{children}</ModalContent>
    </ModalContainer>
  );
};
