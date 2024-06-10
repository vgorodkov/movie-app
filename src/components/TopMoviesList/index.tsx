import React from 'react';
import {FlatList} from 'react-native';

import {mockTop100Movies} from '@/data/top100Mock';

import {styles} from './styles';
import {keyExtractor, renderTopMovie} from './utils';

export const TopMoviesList = () => {
  return (
    <FlatList
      data={mockTop100Movies}
      renderItem={renderTopMovie}
      keyExtractor={keyExtractor}
      contentContainerStyle={styles.topMoviesListContentContainer}
    />
  );
};
