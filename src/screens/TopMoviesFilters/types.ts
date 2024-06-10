import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootRoutes} from '@/constants/routes';
import {RootStackParamList} from '@/types/navigation';

export type TopMoviesFiltersModalProps = NativeStackScreenProps<
  RootStackParamList,
  RootRoutes.TOP_MOVIES_FILTERS
>;
