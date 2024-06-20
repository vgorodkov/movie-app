import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {TopMoviesRoutes} from '@/constants/routes';
import {TopMoviesStackParamList} from '@/types/navigation';

export type TopMoviesFiltersModalProps = NativeStackScreenProps<
  TopMoviesStackParamList,
  TopMoviesRoutes.TOP_MOVIES_FILTERS
>;
