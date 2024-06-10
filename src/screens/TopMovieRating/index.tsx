import React from 'react';

import {GradientMoviePoster} from '@/components/GradientMoviePoster';
import {TopMovieBottomSheet} from '@/components/TopMovieBottomSheet';
import {FullscreenContainer} from '@/styled/FlexContainer';

import {TopMovieScreenProps} from './types';

export const TopMovieRatingScreen = ({route}: TopMovieScreenProps) => {
  const {movieId, imdbid} = route.params;

  return (
    <FullscreenContainer>
      <GradientMoviePoster movieId={movieId} />
      <TopMovieBottomSheet imdbid={imdbid} />
    </FullscreenContainer>
  );
};
