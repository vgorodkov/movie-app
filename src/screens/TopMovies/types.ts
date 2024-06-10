import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {BottomTabRoutes} from '@/constants/routes';
import {BottomTabParamList} from '@/types/navigation';

export type TopMoviesScreenProps = NativeStackScreenProps<
  BottomTabParamList,
  BottomTabRoutes.TOP_MOVIES
>;
