import {expect} from 'detox';

import {BottomTabRoutes, TopTabRoutes} from '@/constants/routes';

import {byId} from '../utils';

export const navigateViaBottomTabsWithCheck = async (
  targetTab: BottomTabRoutes,
) => {
  const homeTab = byId(`BottomTab.${BottomTabRoutes.HOME}`);
  const topMoviesTab = byId(`BottomTab.${BottomTabRoutes.TOP_MOVIES_NAV}`);
  const ticketsTab = byId(`BottomTab.${BottomTabRoutes.TICKETS}`);
  const profileTab = byId(`BottomTab.${BottomTabRoutes.PROFILE_NAV}`);

  const homeScreen = byId(BottomTabRoutes.HOME);
  const profileScreen = byId(BottomTabRoutes.PROFILE_NAV);
  const upcomingTicketsScreen = byId(TopTabRoutes.UPCOMING);
  const topMoviesScreen = byId(BottomTabRoutes.TOP_MOVIES_NAV);

  switch (targetTab) {
    case BottomTabRoutes.HOME:
      await homeTab.tap();
      await expect(homeScreen).toBeVisible();
      break;
    case BottomTabRoutes.PROFILE_NAV:
      await profileTab.tap();
      await expect(profileScreen).toBeVisible();
      break;
    case BottomTabRoutes.TICKETS:
      await ticketsTab.tap();
      await expect(upcomingTicketsScreen).toBeVisible();
      break;
    case BottomTabRoutes.TOP_MOVIES_NAV:
      await topMoviesTab.tap();
      await expect(topMoviesScreen).toBeVisible();
      break;
    default:
      break;
  }
};

export const navigateViaTopTabsWithCheck = async (targetTab: TopTabRoutes) => {
  const upcomingTicketsTab = byId(`TopTab.${TopTabRoutes.UPCOMING}`);
  const missedTicketsTab = byId(`TopTab.${TopTabRoutes.MISSED}`);
  const pastTicketsTab = byId(`TopTab.${TopTabRoutes.PAST}`);

  const upcomingTicketsScreen = byId(TopTabRoutes.UPCOMING);
  const missedTicketsScreen = byId(TopTabRoutes.MISSED);
  const pastTicketsScreen = byId(TopTabRoutes.PAST);

  switch (targetTab) {
    case TopTabRoutes.UPCOMING:
      await upcomingTicketsTab.tap();
      await expect(upcomingTicketsScreen).toBeVisible();
      break;
    case TopTabRoutes.MISSED:
      await missedTicketsTab.tap();
      await expect(missedTicketsScreen).toBeVisible();
      break;
    case TopTabRoutes.PAST:
      await pastTicketsTab.tap();
      await expect(pastTicketsScreen).toBeVisible();
      break;
    default:
      break;
  }
};
