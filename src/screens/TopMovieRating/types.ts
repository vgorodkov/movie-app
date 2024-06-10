import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootRoutes} from '@/constants/routes';
import {RootStackParamList} from '@/types/navigation';

export type TopMovieScreenProps = NativeStackScreenProps<
  RootStackParamList,
  RootRoutes.TOP_MOVIE_RATING
>;
