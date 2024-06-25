import {DefaultTheme} from 'styled-components/native';

import Home from '@/assets/icons/home.svg';
import Profile from '@/assets/icons/profile.svg';
import Ticket from '@/assets/icons/ticket.svg';
import Top from '@/assets/icons/top.svg';
import {BottomTabRoutes} from '@/constants/routes';

export const getRouteIcon = (
  route: string,
  focused: boolean,
  theme: DefaultTheme,
) => {
  switch (route) {
    case BottomTabRoutes.HOME:
      return (
        <Home
          color={focused ? theme.colors.primaryText : theme.colors.disabledText}
        />
      );
    case BottomTabRoutes.TOP_MOVIES_NAV:
      return (
        <Top
          color={focused ? theme.colors.primaryText : theme.colors.disabledText}
        />
      );
    case BottomTabRoutes.TICKETS:
      return (
        <Ticket
          color={focused ? theme.colors.primaryText : theme.colors.disabledText}
        />
      );
    case BottomTabRoutes.PROFILE_NAV:
      return (
        <Profile
          color={focused ? theme.colors.primaryText : theme.colors.disabledText}
        />
      );
  }
};
