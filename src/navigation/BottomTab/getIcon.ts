import {BottomTabRoutes} from '@/constants/routes';

export const getRouteIcon = (route: string, focused: boolean) => {
  switch (route) {
    case BottomTabRoutes.HOME:
      return focused
        ? require('@/assets/icons/home-active.png')
        : require('@/assets/icons/home.png');
    case BottomTabRoutes.TOP_MOVIES:
      return focused
        ? require('@/assets/icons/top-active.png')
        : require('@/assets/icons/top.png');
    case BottomTabRoutes.TICKETS:
      return focused
        ? require('@/assets/icons/ticket-active.png')
        : require('@/assets/icons/ticket.png');
    case BottomTabRoutes.PROFILE:
      return focused
        ? require('@/assets/icons/profile-active.png')
        : require('@/assets/icons/profile.png');
  }
};
