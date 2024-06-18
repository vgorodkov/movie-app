import React from 'react';
import {ActivityIndicator} from 'react-native';

import {LoadingFallbackContainer} from './styles';

export const LoadingFallback = ({
  transparent = false,
}: {
  transparent?: boolean;
}) => {
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
