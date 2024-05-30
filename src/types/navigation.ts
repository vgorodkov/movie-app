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
  [ProtectedRoutes.BOOK_TICKET]: undefined;
};

export type BottomTabParamList = {
  [BottomTabRoutes.HOME]: undefined;
  [BottomTabRoutes.TOP_FILMS]: undefined;
  [BottomTabRoutes.TICKETS]: undefined;
  [BottomTabRoutes.PROFILE]: undefined;
};
