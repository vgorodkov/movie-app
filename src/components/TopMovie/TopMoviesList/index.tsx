import React from 'react';
import {FlatList} from 'react-native';

import {Top100Movie} from '@/types/movies';

import {styles} from './styles';
import {keyExtractor, renderTopMovie} from './utils';

export const TopMoviesList = ({data}: {data: Top100Movie[]}) => {
  return (
    <FlatList
      data={data}
      renderItem={renderTopMovie}
      keyExtractor={keyExtractor}
      contentContainerStyle={styles.topMoviesListContentContainer}
    />
  );
};
