import React from 'react';
import {StatusBar} from 'react-native';

import {MovieComments, MovieDetails, MoviePoster} from '@/components/Movie';
import {FullscreenContainer} from '@/styled/FlexContainer';

import {MovieDetailsScreenProps} from './types';

export const MovieDetailsScreen = ({route}: MovieDetailsScreenProps) => {
  const {title, synopsis, genre, imdbid} = route.params;
  return (
    <FullscreenContainer>
      <StatusBar hidden />
      <MoviePoster movieId={imdbid} />
      <MovieDetails genre={genre} title={title} synopsis={synopsis} />
      <MovieComments imdbid={imdbid} />
    </FullscreenContainer>
  );
};
