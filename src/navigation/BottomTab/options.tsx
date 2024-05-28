import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';

import {getRouteIcon} from './getIcon';
import {BottomTabBarOptionsProps} from './types';

export const bottomTabBarOptions = ({
  route,
}: BottomTabBarOptionsProps): BottomTabNavigationOptions => {
  return {
    headerShown: false,
    tabBarStyle: {backgroundColor: '#16171F'},
    tabBarShowLabel: false,
    tabBarIcon: ({focused}) => (
      <Image
        style={{width: 24, height: 24}}
        source={getRouteIcon(route.name, focused)}
      />
    ),
  };
};
