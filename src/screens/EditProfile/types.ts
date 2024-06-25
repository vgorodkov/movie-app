import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {ProfileRoutes} from '@/constants/routes';
import {ProfileStackParamList} from '@/types/navigation';

export type EditProfileModalProps = NativeStackScreenProps<
  ProfileStackParamList,
  ProfileRoutes.EDIT
>;
