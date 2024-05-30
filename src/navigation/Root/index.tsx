import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AuthRoutes, ProtectedRoutes} from '@/constants/routes';
import {useAuth} from '@/hooks/useAuth';
import {BottomTabNavigation} from '@/navigation/BottomTab';
import {MovieDetailsScreen} from '@/screens/MovieDetails';
import {SignIn} from '@/screens/SignIn';
import {SignUpScreen} from '@/screens/SignUp';
import {WelcomeScreen} from '@/screens/Welcome';
import {RootStackParamList} from '@/types/navigation';

const StackNavigator = createNativeStackNavigator<RootStackParamList>();

export const RootNavigation = () => {
  const {initializing, user} = useAuth();

  if (initializing) {
    return null;
  }

  return (
    <StackNavigator.Navigator screenOptions={{headerShown: false}}>
      {user ? (
        <>
          <StackNavigator.Screen
            name={ProtectedRoutes.BOTTOM_TAB}
            component={BottomTabNavigation}
          />
          <StackNavigator.Screen
            options={{
              headerShown: true,
              headerTransparent: true,
              headerTitle: '',
              headerTintColor: 'white',
            }}
            name={ProtectedRoutes.MOVIE_DETAILS}
            component={MovieDetailsScreen}
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
            options={{presentation: 'transparentModal'}}
          />
          <StackNavigator.Screen
            name={AuthRoutes.SIGN_IN}
            component={SignIn}
            options={{presentation: 'transparentModal'}}
          />
        </>
      )}
    </StackNavigator.Navigator>
  );
};
