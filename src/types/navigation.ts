import {AuthRoutes, BottomTabRoutes, ProtectedRoutes} from '@/constants/routes';

export type RootStackParamList = {
  [AuthRoutes.WELCOME]: undefined;
  [AuthRoutes.SIGN_UP]: undefined;
  [AuthRoutes.SIGN_IN]: undefined;
  [ProtectedRoutes.BOTTOM_TAB]: undefined;
  [ProtectedRoutes.MOVIE_DETAILS]: {
    title: string;
    imageurl: string;
    synopsis: string;
    genre: string[];
    imdbid: string;
  };
  [ProtectedRoutes.BOOKING_TICKET]: {
    title: string;
    imageurl: string;
  };
  [ProtectedRoutes.BOOKING_DATEPICKER]: undefined;
};

export type BottomTabParamList = {
  [BottomTabRoutes.HOME]: undefined;
  [BottomTabRoutes.TOP_MOVIES]: undefined;
  [BottomTabRoutes.TICKETS]: undefined;
  [BottomTabRoutes.PROFILE]: undefined;
};
