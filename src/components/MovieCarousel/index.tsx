import React from 'react';
import {NativeScrollEvent, NativeSyntheticEvent} from 'react-native';
import Animated, {useSharedValue} from 'react-native-reanimated';

import {spacing} from '@/constants/spacing';
import {FlexContainer} from '@/styled/FlexContainer';
import {Movie} from '@/types/movies';

import {Typography} from '../UI/Typography';
import {TypographyVariant} from '../UI/Typography/types';
import {MOVIE_ITEM_WIDTH} from './constants';
import {renderMovieItem} from './renderMovieItem';
import {MovieCarouselProps} from './types';

export const MovieCarousel = ({data, title}: MovieCarouselProps) => {
  const scrollOffset = useSharedValue(0);

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
        data={data}
        renderItem={renderMovieItem(scrollOffset, data.length)}
        initialScrollIndex={Math.floor(data.length / 2)}
        getItemLayout={getItemLayout}
        onScroll={onScroll}
      />
    </FlexContainer>
  );
};
