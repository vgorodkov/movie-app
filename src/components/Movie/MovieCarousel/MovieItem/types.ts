import {SharedValue} from 'react-native-reanimated';

import {Movie} from '@/types/movies';

export interface MovieItemProps
  extends Pick<Movie, 'genre' | 'title' | 'imageurl' | 'synopsis' | 'imdbid'> {
  scrollOffset: SharedValue<number>;
  index: number;
  isLast: boolean;
  isFirst: boolean;
}
