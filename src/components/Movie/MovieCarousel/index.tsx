import React from 'react';
import {NativeScrollEvent, NativeSyntheticEvent} from 'react-native';
import Animated, {useSharedValue} from 'react-native-reanimated';

import {
  ErrorFallback,
  LoadingFallback,
  Typography,
  TypographyVariant,
} from '@/components/UI';
import {spacing} from '@/constants/spacing';
import {useGetMoviesQuery} from '@/store/apiSlices/movieApi';
import {useAppSelector} from '@/store/hooks';
import {selectSelectedMovieGenre} from '@/store/slices/movieGenre/selectors';
import {FlexContainer} from '@/styled/FlexContainer';
import {Movie} from '@/types/movies';

import {DATA_LIMIT, MOVIE_ITEM_WIDTH} from './constants';
import {MovieCarouselProps} from './types';
import {getItemLayout, renderMovieItem} from './utils';

const IS_MOCKED = process.env.MY_APP_MODE === 'mocked';

export const MovieCarousel = ({title}: MovieCarouselProps) => {
  const selectedGenre = useAppSelector(selectSelectedMovieGenre);
  const {data, isError, isLoading} = useGetMoviesQuery(selectedGenre);

  const scrollOffset = useSharedValue(0);
  if (isLoading) {
    return <LoadingFallback />;
  }
  if (isError || !data) {
    return <ErrorFallback error="Error while loading movie data" />;
  }

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    scrollOffset.value = e.nativeEvent.contentOffset.x;
  };
  return (
    <FlexContainer gap={spacing.sm}>
      <Typography
        padding={`0 0 0 ${spacing.l}px`}
        variant={TypographyVariant.SUBTITLE_LARGE}
        alightSelf="flex-start">
        {title}
      </Typography>
      <Animated.FlatList
        testID="MovieCarousel"
        overScrollMode="never"
        scrollEventThrottle={16}
        decelerationRate={0.8}
        snapToInterval={MOVIE_ITEM_WIDTH}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={
          IS_MOCKED
            ? (data as any as Movie[])?.slice(0, DATA_LIMIT)
            : data?.results.slice(0, DATA_LIMIT)
        }
        renderItem={renderMovieItem(scrollOffset, DATA_LIMIT)}
        contentOffset={{x: Math.floor(DATA_LIMIT / 2) * MOVIE_ITEM_WIDTH, y: 0}}
        getItemLayout={getItemLayout}
        onScroll={onScroll}
      />
    </FlexContainer>
  );
};
