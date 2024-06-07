import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AuthRoutes, RootRoutes} from '@/constants/routes';
import {useAuth} from '@/hooks/useAuth';
import {BottomTabNavigation} from '@/navigation/BottomTab';
import {
  BookingTicketScreen,
  MovieDetailsScreen,
  SignIn,
  SignUpScreen,
  TopMovieRatingScreen,
  WelcomeScreen,
} from '@/screens';
import {BookingDatepickerModal} from '@/screens/BookingDatepicker';
import {RootStackParamList} from '@/types/navigation';

import {
  bookTicketScreenOptions,
  movieDetailsScreenOptions,
  stackNavigatorOptions,
  transparentModalOptions,
} from './options';

const StackNavigator = createNativeStackNavigator<RootStackParamList>();

export const RootNavigation = () => {
  const {initializing, user} = useAuth();

  if (initializing) {
    return null;
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
            options={bookTicketScreenOptions}
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
