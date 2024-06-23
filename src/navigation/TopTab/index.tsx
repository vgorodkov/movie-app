import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useTranslation} from 'react-i18next';

import {TopTabRoutes} from '@/constants/routes';
import {
  MissedTicketsScreen,
  PastTicketsScreen,
  UpcomingTicketsScreen,
} from '@/screens';

const TabNavigator = createMaterialTopTabNavigator();

export const TopTabNavigation = () => {
  const {t} = useTranslation('tickets');
  return (
    <TabNavigator.Navigator>
      <TabNavigator.Screen
        name={TopTabRoutes.UPCOMING}
        component={UpcomingTicketsScreen}
        options={{
          title: t('upcoming'),
          tabBarTestID: `TopTab.${TopTabRoutes.UPCOMING}`,
        }}
      />
      <TabNavigator.Screen
        name={TopTabRoutes.PAST}
        component={PastTicketsScreen}
        options={{
          title: t('past'),
          tabBarTestID: `TopTab.${TopTabRoutes.PAST}`,
        }}
      />
      <TabNavigator.Screen
        name={TopTabRoutes.MISSED}
        component={MissedTicketsScreen}
        options={{
          title: t('missed'),
          tabBarTestID: `TopTab.${TopTabRoutes.MISSED}`,
        }}
      />
    </TabNavigator.Navigator>
  );
};
