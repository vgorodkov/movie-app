import React from 'react';
import {NativeScrollEvent, NativeSyntheticEvent} from 'react-native';
import Animated, {useSharedValue} from 'react-native-reanimated';

import {Typography, TypographyVariant} from '@/components/UI';
import {spacing} from '@/constants/spacing';
import {MOCK_DATA} from '@/data/mockMovies';
import {FlexContainer} from '@/styled/FlexContainer';

import {DATA_LIMIT, MOVIE_ITEM_WIDTH} from './constants';
import {MovieCarouselProps} from './types';
import {getItemLayout, renderMovieItem} from './utils';

export const MovieCarousel = ({title}: MovieCarouselProps) => {
  //const selectedGenre = useAppSelector(selectSelectedMovieGenre);
  //const {data, isError, error, isLoading} = useGetMoviesQuery(selectedGenre);
  const scrollOffset = useSharedValue(0);

  /*  if (isLoading) {
    return <LoadingFallback />;
  }
  if (isError) {
    console.error(error);
  }
 */
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
        overScrollMode="never"
        scrollEventThrottle={16}
        decelerationRate={0.8}
        snapToInterval={MOVIE_ITEM_WIDTH}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={MOCK_DATA?.results.slice(10, DATA_LIMIT * 2)}
        renderItem={renderMovieItem(scrollOffset, DATA_LIMIT)}
        contentOffset={{x: Math.floor(DATA_LIMIT / 2) * MOVIE_ITEM_WIDTH, y: 0}}
        getItemLayout={getItemLayout}
        onScroll={onScroll}
      />
    </FlexContainer>
  );
};
