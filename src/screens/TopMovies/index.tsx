import React, {useState} from 'react';

import {TopMoviesList} from '@/components/TopMovie';
import {SearchBar} from '@/components/UI/SearchBar';
import {RootRoutes} from '@/constants/routes';
import {mockTop100Movies} from '@/data/top100Mock';
import {useAppSelector} from '@/store/hooks';
import {FullscreenContainer} from '@/styled/FlexContainer';
import {filterMovies} from '@/utils/filterMovies';

import {TopMoviesScreenProps} from './types';

export const TopMoviesScreen = ({navigation}: TopMoviesScreenProps) => {
  const data = mockTop100Movies;
  const [movieTitleQuery, setMovieTitleQuery] = useState('');
  const yearFilter = useAppSelector(state => state.topMovieFilters.year);
  const ratingFilter = useAppSelector(state => state.topMovieFilters.rating);
  const filteredData = filterMovies(data, {
    title: movieTitleQuery,
    year: yearFilter,
    rating: ratingFilter,
  });

  const onFiltersPress = () => {
    navigation.navigate(RootRoutes.TOP_MOVIES_FILTERS);
  };

  return (
    <FullscreenContainer>
      <SearchBar
        value={movieTitleQuery}
        onValueChange={setMovieTitleQuery}
        onFiltersPress={onFiltersPress}
      />
      <TopMoviesList data={filteredData} />
    </FullscreenContainer>
  );
};
