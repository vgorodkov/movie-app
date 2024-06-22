import React from 'react';

import {
  TopMovieBottomSheet,
  TopMovieGradientPoster,
} from '@/components/TopMovie';
import {FullscreenContainer} from '@/styled/FlexContainer';

import {TopMovieScreenProps} from './types';

export const TopMovieRatingScreen = ({route}: TopMovieScreenProps) => {
  const {movieId, imdbid} = route.params;

  return (
    <FullscreenContainer>
      <TopMovieGradientPoster movieId={movieId} />
      <TopMovieBottomSheet imdbid={imdbid} movieId={movieId} />
    </FullscreenContainer>
  );
};
