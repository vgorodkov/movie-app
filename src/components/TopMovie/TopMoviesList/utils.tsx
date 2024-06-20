import {ListRenderItem} from 'react-native';

import {Top100Movie} from '@/types/movies';

import {TopMovie} from './TopMovie';

export const keyExtractor = (item: Top100Movie) => item.id;

export const renderTopMovie: ListRenderItem<Top100Movie> = ({item}) => {
  const {title, rank, rating, image, year, genre, id, imdbid} = item;
  return (
    <TopMovie
      genre={genre}
      title={title}
      rank={rank}
      rating={rating}
      image={image}
      year={year}
      id={id}
      imdbid={imdbid}
    />
  );
};
