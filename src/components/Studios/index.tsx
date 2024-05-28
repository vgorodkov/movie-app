import React from 'react';

import {FlexContainer} from '@/styled/FlexContainer';

import {studios} from './constants';
import {StudioImage} from './styles';

export const Studios = () => {
  return (
    <FlexContainer flexFlow="row nowrap" justifyContent="space-between">
      {studios.map((studioImg, index) => {
        return (
          <StudioImage
            key={studioImg}
            source={studioImg}
            isFirst={index === 0}
          />
        );
      })}
    </FlexContainer>
  );
};
