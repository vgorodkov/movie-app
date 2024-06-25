import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootRoutes} from '@/constants/routes';
import {RootStackParamList} from '@/types/navigation';

export type BookDatepickerModalProps = NativeStackScreenProps<
  RootStackParamList,
  RootRoutes.BOOKING_DATEPICKER
>;
