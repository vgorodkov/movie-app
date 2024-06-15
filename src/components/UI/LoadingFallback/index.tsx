import React from 'react';
import {ActivityIndicator} from 'react-native';

import {FlexContainer} from '@/styled/FlexContainer';

export const LoadingFallback = () => {
  return (
    <FlexContainer justifyContent="center" alignItems="center" flex={1}>
      <ActivityIndicator size="large" />
    </FlexContainer>
  );
};
