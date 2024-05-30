import React from 'react';

import {MovieComments} from '@/components/MovieComments';
import {MovieDetails} from '@/components/MovieDetails';
import {MovieDetailsPoster} from '@/components/MovieDetailsPoster';
import {FullscreenContainer} from '@/styled/FlexContainer';

import {MovieDetailsScreenProps} from './types';

export const MovieDetailsScreen = ({route}: MovieDetailsScreenProps) => {
  const {title, synopsis, genre} = route.params;
  return (
    <FullscreenContainer>
      <MovieDetailsPoster />
      <MovieDetails genre={genre} title={title} synopsis={synopsis} />
      <MovieComments />
    </FullscreenContainer>
  );
};
