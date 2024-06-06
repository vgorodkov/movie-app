import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {BottomTabRoutes} from '@/constants/routes';
import {HomeScreen, ProfileScreen, TopMoviesScreen} from '@/screens';
import {BottomTabParamList} from '@/types/navigation';

import {TopTabNavigation} from '../TopTab';
import {bottomTabBarOptions} from './options';

const TabNavigator = createBottomTabNavigator<BottomTabParamList>();

export const BottomTabNavigation = () => {
  return (
    <TabNavigator.Navigator screenOptions={bottomTabBarOptions}>
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
