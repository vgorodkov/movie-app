import React from 'react';
import {ListRenderItem} from 'react-native';
import {SharedValue} from 'react-native-reanimated';

import {Movie} from '@/types/movies';

import {MOVIE_ITEM_WIDTH} from './constants';
import {MovieItem} from './MovieItem';

export const renderMovieItem =
  (
    scrollOffset: SharedValue<number>,
    dataLength: number,
  ): ListRenderItem<Movie> =>
  ({item, index}) => {
    const {genre, imageurl, title, imdbid} = item;
    return (
      <MovieItem
        isLast={index === dataLength - 1}
        isFirst={index === 0}
        genre={genre}
        title={title}
        imageurl={imageurl}
        index={index}
        scrollOffset={scrollOffset}
        synopsis={item.synopsis}
        imdbid={imdbid}
      />
    );
  };

export const getItemLayout = (
  _: ArrayLike<Movie> | null | undefined,
  index: number,
) => {
  return {
    length: MOVIE_ITEM_WIDTH,
    offset: MOVIE_ITEM_WIDTH * index,
    index,
  };
};
