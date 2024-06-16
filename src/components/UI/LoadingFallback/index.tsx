import React from 'react';
import {ActivityIndicator} from 'react-native';

import {FlexContainer} from '@/styled/FlexContainer';
import {darkTheme} from '@/theme/darkTheme';

export const LoadingFallback = () => {
  return (
    <FlexContainer
      style={{backgroundColor: darkTheme.colors.background}}
      justifyContent="center"
      alignItems="center"
      flex={1}>
      <ActivityIndicator size="large" />
    </FlexContainer>
  );
};
