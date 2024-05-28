import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AuthRoutes} from '@/constants/routes';
import {SignIn} from '@/screens/SignIn';
import {SignUpScreen} from '@/screens/SignUp';
import {WelcomeScreen} from '@/screens/Welcome';
import {RootStackParamList} from '@/types/navigation';

const StackNavigator = createNativeStackNavigator<RootStackParamList>();

export const RootNavigation = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Group screenOptions={{headerShown: false}}>
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
      </StackNavigator.Group>
    </StackNavigator.Navigator>
  );
};
