import React from 'react';
import {FlatList} from 'react-native';

import {styles} from './styles';
import {TopMoviesListProps} from './types';
import {keyExtractor, renderTopMovie} from './utils';

export const TopMoviesList = ({data}: TopMoviesListProps) => {
  return (
    <FlatList
      testID="TopMoviesList"
      data={data}
      renderItem={renderTopMovie}
      keyExtractor={keyExtractor}
      contentContainerStyle={styles.topMoviesListContentContainer}
    />
  );
};
