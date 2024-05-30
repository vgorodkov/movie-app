import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {ProtectedRoutes} from '@/constants/routes';
import {RootStackParamList} from '@/types/navigation';

export type MovieDetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  ProtectedRoutes.MOVIE_DETAILS
>;
