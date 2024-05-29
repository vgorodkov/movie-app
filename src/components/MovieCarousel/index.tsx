import React from 'react';
import {NativeScrollEvent, NativeSyntheticEvent} from 'react-native';
import Animated, {useSharedValue} from 'react-native-reanimated';

import {Typography} from '@/components/UI/Typography';
import {TypographyVariant} from '@/components/UI/Typography/types';
import {spacing} from '@/constants/spacing';
import {useGetMoviesQuery} from '@/store/apiSlices/movieApi';
import {useAppSelector} from '@/store/hooks';
import {selectSelectedMovieGenre} from '@/store/slices/movieGenre/selectors';
import {FlexContainer} from '@/styled/FlexContainer';
import {Movie} from '@/types/movies';

import {MOVIE_ITEM_WIDTH} from './constants';
import {renderMovieItem} from './renderMovieItem';
import {MovieCarouselProps} from './types';

const DATA_LIMIT = 10;

export const MovieCarousel = ({title}: MovieCarouselProps) => {
  const selectedGenre = useAppSelector(selectSelectedMovieGenre);
  const {data, isError, error, isLoading} = useGetMoviesQuery(selectedGenre);

  const scrollOffset = useSharedValue(0);

  if (isLoading) {
    return null;
  }
  if (isError) {
    console.error(error);
  }

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    scrollOffset.value = e.nativeEvent.contentOffset.x;
  };

  const getItemLayout = (
    _: ArrayLike<Movie> | null | undefined,
    index: number,
  ) => {
    return {
      length: MOVIE_ITEM_WIDTH,
      offset: MOVIE_ITEM_WIDTH * index,
      index,
    };
  };

  return (
    <FlexContainer gap={spacing.sm}>
      <Typography
        padding={`0 0 0 ${spacing.l}`}
        variant={TypographyVariant.SUBTITLE_LARGE}
        alightSelf="flex-start">
        {title}
      </Typography>
      <Animated.FlatList
        overScrollMode="never"
        scrollEventThrottle={16}
        decelerationRate={0.8}
        snapToInterval={MOVIE_ITEM_WIDTH}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={data?.results.slice(0, DATA_LIMIT)}
        renderItem={renderMovieItem(scrollOffset, DATA_LIMIT)}
        initialScrollIndex={DATA_LIMIT / 2}
        getItemLayout={getItemLayout}
        onScroll={onScroll}
      />
    </FlexContainer>
  );
};
