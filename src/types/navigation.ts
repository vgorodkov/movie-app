import {NavigatorScreenParams} from '@react-navigation/native';

import {
  AuthRoutes,
  BottomTabRoutes,
  ProfileRoutes,
  RootRoutes,
  TopMoviesRoutes,
} from '@/constants/routes';

export type RootStackParamList = {
  [AuthRoutes.WELCOME]: undefined;
  [AuthRoutes.SIGN_UP]: undefined;
  [AuthRoutes.SIGN_IN]: undefined;
  [RootRoutes.BOTTOM_TAB]: NavigatorScreenParams<BottomTabParamList>;
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
};

export type ProfileStackParamList = {
  [ProfileRoutes.PROFILE]: undefined;
  [ProfileRoutes.SETTINGS]: undefined;
  [ProfileRoutes.EDIT]: undefined;
};

export type TopMoviesStackParamList = {
  [TopMoviesRoutes.TOP_MOVIES]: undefined;
  [TopMoviesRoutes.TOP_MOVIES_FILTERS]: undefined;
};

export type BottomTabParamList = {
  [BottomTabRoutes.HOME]: undefined;
  [BottomTabRoutes.TOP_MOVIES_NAV]: NavigatorScreenParams<TopMoviesStackParamList>;
  [BottomTabRoutes.TICKETS]: undefined;
  [BottomTabRoutes.PROFILE_NAV]: NavigatorScreenParams<ProfileStackParamList>;
};
