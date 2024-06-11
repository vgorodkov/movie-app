import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from 'styled-components';

import {BottomTabRoutes} from '@/constants/routes';
import {HomeScreen, ProfileScreen, TopMoviesScreen} from '@/screens';
import {BottomTabParamList} from '@/types/navigation';

import {TopTabNavigation} from '../TopTab';
import {bottomTabBarOptions} from './options';

const TabNavigator = createBottomTabNavigator<BottomTabParamList>();

export const BottomTabNavigation = () => {
  const theme = useTheme();

  return (
    <TabNavigator.Navigator screenOptions={bottomTabBarOptions(theme)}>
      <TabNavigator.Screen name={BottomTabRoutes.HOME} component={HomeScreen} />
      <TabNavigator.Screen
        name={BottomTabRoutes.TOP_MOVIES}
        component={TopMoviesScreen}
      />
      <TabNavigator.Screen
        name={BottomTabRoutes.TICKETS}
        component={TopTabNavigation}
      />
      <TabNavigator.Screen
        name={BottomTabRoutes.PROFILE}
        component={ProfileScreen}
      />
    </TabNavigator.Navigator>
  );
};
