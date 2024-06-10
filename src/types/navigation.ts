import {AuthRoutes, BottomTabRoutes, RootRoutes} from '@/constants/routes';

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
    title: string;
    imageurl: string;
  };
  [RootRoutes.BOOKING_DATEPICKER]: undefined;
  [RootRoutes.TOP_MOVIE_RATING]: {
    movieId: string;
    imdbid: string;
  };
};

export type BottomTabParamList = {
  [BottomTabRoutes.HOME]: undefined;
  [BottomTabRoutes.TOP_MOVIES]: undefined;
  [BottomTabRoutes.TICKETS]: undefined;
  [BottomTabRoutes.PROFILE]: undefined;
};
