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
          style={{
            color: focused
              ? theme.colors.primaryText
              : theme.colors.disabledText,
          }}
        />
      );
    case BottomTabRoutes.TOP_MOVIES:
      return (
        <Top
          style={{
            color: focused
              ? theme.colors.primaryText
              : theme.colors.disabledText,
          }}
        />
      );
    case BottomTabRoutes.TICKETS:
      return (
        <Ticket
          style={{
            color: focused
              ? theme.colors.primaryText
              : theme.colors.disabledText,
          }}
        />
      );
    case BottomTabRoutes.PROFILE_NAV:
      return (
        <Profile
          style={{
            color: focused
              ? theme.colors.primaryText
              : theme.colors.disabledText,
          }}
        />
      );
  }
};
