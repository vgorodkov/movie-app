import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';

import {getRouteIcon} from './getIcon';
import {styles} from './styles';
import {BottomTabBarOptionsProps} from './types';

export const bottomTabBarOptions = ({
  route,
}: BottomTabBarOptionsProps): BottomTabNavigationOptions => {
  return {
    headerShown: false,
    tabBarStyle: styles.tabBarStyle,
    tabBarShowLabel: false,
    tabBarIcon: ({focused}) => (
      <Image
        style={styles.tabBarIcon}
        source={getRouteIcon(route.name, focused)}
      />
    ),
  };
};
