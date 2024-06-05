import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {TopTabRoutes} from '@/constants/routes';
import {
  MissedTicketsScreen,
  PastTicketsScreen,
  UpcomingTicketsScreen,
} from '@/screens';
import {darkTheme} from '@/theme/darkTheme';

const TabNavigator = createMaterialTopTabNavigator();

export const TopTabNavigation = () => {
  return (
    <TabNavigator.Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: darkTheme.colors.background},
        tabBarActiveTintColor: 'white',
      }}>
      <TabNavigator.Screen
        name={TopTabRoutes.UPCOMING}
        component={UpcomingTicketsScreen}
      />
      <TabNavigator.Screen
        name={TopTabRoutes.PAST}
        component={PastTicketsScreen}
      />
      <TabNavigator.Screen
        name={TopTabRoutes.MISSED}
        component={MissedTicketsScreen}
      />
    </TabNavigator.Navigator>
  );
};
