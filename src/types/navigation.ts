import {
  AuthRoutes,
  BottomTabRoutes,
  ProfileRoutes,
  RootRoutes,
} from '@/constants/routes';

export type RootStackParamList = {
  [AuthRoutes.WELCOME]: undefined;
  [AuthRoutes.SIGN_UP]: undefined;
  [AuthRoutes.SIGN_IN]: undefined;
  [RootRoutes.BOTTOM_TAB]: undefined;
  [RootRoutes.MOVIE_DETAILS]: {
    title: string;
    imageurl: string;
    synopsis: string;
    genre: string[];
    imdbid: string;
  };
  [RootRoutes.BOOKING_TICKET]: {
    movieId: string;
  };
  [RootRoutes.BOOKING_DATEPICKER]: undefined;
  [RootRoutes.TOP_MOVIE_RATING]: {
    movieId: string;
    imdbid: string;
  };
  [RootRoutes.TOP_MOVIES_FILTERS]: undefined;
};

export type BottomTabParamList = {
  [BottomTabRoutes.HOME]: undefined;
  [BottomTabRoutes.TOP_MOVIES]: undefined;
  [BottomTabRoutes.TICKETS]: undefined;
  [BottomTabRoutes.PROFILE_NAV]: undefined;
};

export type ProfileStackParamList = {
  [ProfileRoutes.PROFILE]: undefined;
  [ProfileRoutes.SETTINGS]: undefined;
  [ProfileRoutes.EDIT]: undefined;
};
