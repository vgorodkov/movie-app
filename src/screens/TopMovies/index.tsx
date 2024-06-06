import React from 'react';

import {TopMoviesList} from '@/components/TopMoviesList';
import {FullscreenContainer} from '@/styled/FlexContainer';

export const TopMoviesScreen = () => {
  return (
    <FullscreenContainer>
      <TopMoviesList />
    </FullscreenContainer>
  );
};
