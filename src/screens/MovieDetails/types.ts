import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootRoutes} from '@/constants/routes';
import {RootStackParamList} from '@/types/navigation';

export type MovieDetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  RootRoutes.MOVIE_DETAILS
>;
