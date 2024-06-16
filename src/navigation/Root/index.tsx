import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTranslation} from 'react-i18next';
import {useTheme} from 'styled-components';

import {LoadingFallback} from '@/components/UI';
import {AuthRoutes, RootRoutes} from '@/constants/routes';
import {useAuth} from '@/hooks/useAuth';
import {BottomTabNavigation} from '@/navigation/BottomTab';
import {
  BookingDatepickerModal,
  BookingTicketScreen,
  MovieDetailsScreen,
  SignIn,
  SignUpScreen,
  TopMovieRatingScreen,
  TopMoviesFiltersModal,
  WelcomeScreen,
} from '@/screens';
import {RootStackParamList} from '@/types/navigation';

import {
  bookTicketScreenOptions,
  movieDetailsScreenOptions,
  stackNavigatorOptions,
  transparentModalOptions,
} from './options';

const StackNavigator = createNativeStackNavigator<RootStackParamList>();

export const RootNavigation = () => {
  const theme = useTheme();
  const {user, initializing} = useAuth();
  const {t} = useTranslation('home');

  if (initializing) {
    return <LoadingFallback />;
  }

  return (
    <StackNavigator.Navigator screenOptions={stackNavigatorOptions}>
      {user ? (
        <>
          <StackNavigator.Screen
            name={RootRoutes.BOTTOM_TAB}
            component={BottomTabNavigation}
          />
          <StackNavigator.Screen
            options={movieDetailsScreenOptions}
            name={RootRoutes.MOVIE_DETAILS}
            component={MovieDetailsScreen}
          />
          <StackNavigator.Screen
            name={RootRoutes.BOOKING_TICKET}
            options={{
              headerStyle: {backgroundColor: theme.colors.background},
              headerTitle: t('Choose Cinema & Seats'),
              ...bookTicketScreenOptions,
            }}
            component={BookingTicketScreen}
          />
          <StackNavigator.Screen
            name={RootRoutes.BOOKING_DATEPICKER}
            options={transparentModalOptions}
            component={BookingDatepickerModal}
          />
          <StackNavigator.Screen
            name={RootRoutes.TOP_MOVIE_RATING}
            component={TopMovieRatingScreen}
          />
          <StackNavigator.Screen
            name={RootRoutes.TOP_MOVIES_FILTERS}
            component={TopMoviesFiltersModal}
            options={transparentModalOptions}
          />
        </>
      ) : (
        <>
          <StackNavigator.Screen
            name={AuthRoutes.WELCOME}
            component={WelcomeScreen}
          />
          <StackNavigator.Screen
            name={AuthRoutes.SIGN_UP}
            component={SignUpScreen}
            options={transparentModalOptions}
          />
          <StackNavigator.Screen
            name={AuthRoutes.SIGN_IN}
            component={SignIn}
            options={transparentModalOptions}
          />
        </>
      )}
    </StackNavigator.Navigator>
  );
};
