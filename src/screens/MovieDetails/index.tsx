import React from 'react';

import {MovieComments} from '@/components/MovieComments';
import {MovieDetails} from '@/components/MovieDetails';
import {MovieDetailsPoster} from '@/components/MovieDetailsPoster';
import {FullscreenContainer} from '@/styled/FlexContainer';

import {MovieDetailsScreenProps} from './types';

export const MovieDetailsScreen = ({route}: MovieDetailsScreenProps) => {
  const {title, synopsis, genre, imdbid, imageurl} = route.params;
  return (
    <FullscreenContainer>
      <MovieDetailsPoster title={title} imageurl={imageurl} />
      <MovieDetails genre={genre} title={title} synopsis={synopsis} />
      <MovieComments imdbid={imdbid} />
    </FullscreenContainer>
  );
};
