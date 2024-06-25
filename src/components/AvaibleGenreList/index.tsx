import React from 'react';
import {FlatList} from 'react-native';

import {movieGenres} from '@/constants/movieGenres';
import {useAppSelector} from '@/store/hooks';
import {selectSelectedMovieGenre} from '@/store/slices/movieGenre/selectors';
import {FlexContainer} from '@/styled/FlexContainer';

import {renderAvaibleGenre} from './renderAvaibleGenre';
import {styles} from './styles';

export const AvaibleGenreList = () => {
  const selectedAvaibleGenre = useAppSelector(selectSelectedMovieGenre);

  return (
    <FlexContainer justifyContent="center" alignItems="center">
      <FlatList
        contentContainerStyle={styles.avaibleGenreListContentContainer}
        horizontal
        data={movieGenres}
        renderItem={renderAvaibleGenre(selectedAvaibleGenre)}
      />
    </FlexContainer>
  );
};
