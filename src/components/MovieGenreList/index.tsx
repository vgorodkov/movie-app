import React from 'react';
import {FlatList} from 'react-native';

import {movieGenres} from '@/constants/movieGenres';
import {useAppSelector} from '@/store/hooks';
import {selectSelectedMovieGenre} from '@/store/slices/movieGenre/selectors';
import {FlexContainer} from '@/styled/FlexContainer';

import {renderMovieGenre} from './renderMovieGenre';
import {styles} from './styles';

export const MovieGenreList = () => {
  const selectedMovieGenre = useAppSelector(selectSelectedMovieGenre);

  return (
    <FlexContainer justifyContent="center" alignItems="center">
      <FlatList
        contentContainerStyle={styles.movieGenreListContentContainer}
        horizontal
        data={movieGenres}
        renderItem={renderMovieGenre(selectedMovieGenre)}
      />
    </FlexContainer>
  );
};
