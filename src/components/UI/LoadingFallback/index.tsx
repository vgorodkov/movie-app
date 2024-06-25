import React from 'react';
import {ActivityIndicator} from 'react-native';

import {LoadingFallbackContainer} from './styles';
import {LoadingFallbackProps} from './types';

export const LoadingFallback = ({
  transparent = false,
}: LoadingFallbackProps) => {
  return (
    <LoadingFallbackContainer
      transparent={transparent}
      flex={1}
      alignItems="center"
      justifyContent="center">
      <ActivityIndicator size="large" />
    </LoadingFallbackContainer>
  );
};
