import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {DefaultTheme} from 'styled-components/native';

import {getRouteIcon} from './getIcon';
import {styles} from './styles';
import {BottomTabBarOptionsProps} from './types';

export const bottomTabBarOptions =
  (theme: DefaultTheme) =>
  ({route}: BottomTabBarOptionsProps): BottomTabNavigationOptions => {
    return {
      headerShown: false,
      tabBarStyle: styles.tabBarStyle,
      tabBarShowLabel: false,
      tabBarIcon: ({focused}) => getRouteIcon(route.name, focused, theme),
    };
  };
