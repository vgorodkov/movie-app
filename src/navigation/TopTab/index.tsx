import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {TopTabRoutes} from '@/constants/routes';
import {
  MissedTicketsScreen,
  PastTicketsScreen,
  UpcomingTicketsScreen,
} from '@/screens';

const TabNavigator = createMaterialTopTabNavigator();

export const TopTabNavigation = () => {
  return (
    <TabNavigator.Navigator>
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
