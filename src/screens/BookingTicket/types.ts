import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {ProtectedRoutes} from '@/constants/routes';
import {RootStackParamList} from '@/types/navigation';

export type BookingTicketScreenProps = NativeStackScreenProps<
  RootStackParamList,
  ProtectedRoutes.BOOKING_TICKET
>;
