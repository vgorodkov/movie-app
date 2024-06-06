import {Top100Movie} from '@/types/movies';

import {MOVIE_HEIGHT} from './constants';
import {TopMovie} from './TopMovie';

export const keyExtractor = (item: Top100Movie) => item.id;

export const getItemLayout = (_: any, index: number) => ({
  length: MOVIE_HEIGHT,
  offset: MOVIE_HEIGHT * index,
  index,
});

export const renderTopMovie = ({item}: {item: Top100Movie}) => {
  const {title, rank, rating, image, year, genre} = item;
  return (
    <TopMovie
      genre={genre}
      title={title}
      rank={rank}
      rating={rating}
      image={image}
      year={year}
    />
  );
};
