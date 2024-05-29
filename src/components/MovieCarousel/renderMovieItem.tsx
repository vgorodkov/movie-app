import React from 'react';
import {SharedValue} from 'react-native-reanimated';

import {Movie} from '@/types/movies';

import {MovieItem} from './MovieItem';

export const renderMovieItem =
  (scrollOffset: SharedValue<number>, dataLength: number) =>
  ({item, index}: {item: Movie; index: number}) => {
    const {tags, title, img} = item;
    return (
      <MovieItem
        isLast={index === dataLength - 1}
        isFirst={index === 0}
        tags={tags}
        title={title}
        img={img}
        index={index}
        scrollOffset={scrollOffset}
      />
    );
  };
