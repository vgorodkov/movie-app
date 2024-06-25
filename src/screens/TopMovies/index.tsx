import React, {useState} from 'react';

import {TopMoviesList} from '@/components/TopMovie';
import {ErrorFallback, LoadingFallback} from '@/components/UI';
import {SearchBar} from '@/components/UI/SearchBar';
import {BottomTabRoutes, TopMoviesRoutes} from '@/constants/routes';
import {useGetTop100MoviesQuery} from '@/store/apiSlices/imbdApi';
import {useAppSelector} from '@/store/hooks';
import {FullscreenContainer} from '@/styled/FlexContainer';
import {filterMovies} from '@/utils/filterMovies';

import {TopMoviesScreenProps} from './types';

export const TopMoviesScreen = ({navigation}: TopMoviesScreenProps) => {
  const {data, isLoading, isError} = useGetTop100MoviesQuery();
  const [movieTitleQuery, setMovieTitleQuery] = useState('');
  const yearFilter = useAppSelector(state => state.topMovieFilters.year);
  const ratingFilter = useAppSelector(state => state.topMovieFilters.rating);

  const onFiltersPress = () => {
    navigation.navigate(TopMoviesRoutes.TOP_MOVIES_FILTERS);
  };

  if (isLoading) {
    return <LoadingFallback />;
  }

  if (isError || !data) {
    return <ErrorFallback error="Error while loading top movies" />;
  }

  const filteredData = filterMovies(data, {
    title: movieTitleQuery.trim(),
    year: yearFilter,
    rating: ratingFilter,
  });

  return (
    <FullscreenContainer testID={BottomTabRoutes.TOP_MOVIES_NAV}>
      <SearchBar
        value={movieTitleQuery}
        onValueChange={setMovieTitleQuery}
        onFiltersPress={onFiltersPress}
      />
      <TopMoviesList data={filteredData} />
    </FullscreenContainer>
  );
};
