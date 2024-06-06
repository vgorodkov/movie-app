import {Top100Movie} from '@/types/movies';

export interface TopMovieProps
  extends Omit<
    Top100Movie,
    'imdb_link' | 'big_image' | 'description' | 'id' | 'imdbid' | 'thumbnail'
  > {}
