import {AuthRoutes, BottomTabRoutes, ProtectedRoutes} from '@/constants/routes';

export type RootStackParamList = {
  [AuthRoutes.WELCOME]: undefined;
  [AuthRoutes.SIGN_UP]: undefined;
  [AuthRoutes.SIGN_IN]: undefined;
  [ProtectedRoutes.BOTTOM_TAB]: undefined;
};

export type BottomTabParamList = {
  [BottomTabRoutes.HOME]: undefined;
  [BottomTabRoutes.TOP_FILMS]: undefined;
  [BottomTabRoutes.TICKETS]: undefined;
  [BottomTabRoutes.PROFILE]: undefined;
};
