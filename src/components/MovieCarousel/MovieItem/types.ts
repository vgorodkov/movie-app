import {SharedValue} from 'react-native-reanimated';

import {Movie} from '@/types/movies';

export interface MovieItemProps extends Movie {
  scrollOffset: SharedValue<number>;
  index: number;
  isLast: boolean;
  isFirst: boolean;
}
